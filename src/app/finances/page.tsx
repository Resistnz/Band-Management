import prisma from '@/lib/prisma'
import { addTransaction, deleteTransaction, updateTransaction } from './actions'
import { format } from 'date-fns'
import { DollarSign, Plus, Trash2, ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react'
import EditableTransactionRow from './EditableTransactionRow'
import { MoneyOverTimeChart } from '@/components/FinanceChart'

export default async function FinancesPage() {
  const transactions = await prisma.transaction.findMany({
    orderBy: { date: 'desc' }
  })

  const income = transactions.filter(t => t.type === 'INCOME').reduce((sum, t) => sum + t.amount, 0)
  const expenses = transactions.filter(t => t.type === 'EXPENSE').reduce((sum, t) => sum + t.amount, 0)
  const balance = income - expenses

  // Compute cumulative balance trend over time
  const chronologicalTxs = [...transactions].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  let currentAccumulated = 0
  const trendData = chronologicalTxs.map(t => {
    const change = t.type === 'INCOME' ? t.amount : -t.amount
    currentAccumulated += change
    return {
      date: format(new Date(t.date), 'MMM d, yyyy'),
      balance: Math.round(currentAccumulated * 100) / 100
    }
  })

  return (
    <div>
      <header className="flex-between mb-6">
        <div>
          <h1>Finances</h1>
          <p>Track income, expenses, and current band balance.</p>
        </div>
      </header>

      <div className="grid grid-cols-3 mb-6">
        <div className="glass-panel stat-card">
          <div className="flex-between">
            <span className="stat-title">Current Balance</span>
            <div className="stat-icon"><DollarSign size={18} className="text-accent" /></div>
          </div>
          <span className="stat-value" style={{ color: balance >= 0 ? 'var(--text-primary)' : 'var(--danger)' }}>
            ${balance.toFixed(2)}
          </span>
        </div>
        <div className="glass-panel stat-card">
          <div className="flex-between">
            <span className="stat-title">Total Income</span>
            <div className="stat-icon"><ArrowUpRight size={18} className="text-success" /></div>
          </div>
          <span className="stat-value text-success">${income.toFixed(2)}</span>
        </div>
        <div className="glass-panel stat-card">
          <div className="flex-between">
            <span className="stat-title">Total Expenses</span>
            <div className="stat-icon"><ArrowDownRight size={18} className="text-danger" /></div>
          </div>
          <span className="stat-value text-danger">${expenses.toFixed(2)}</span>
        </div>
      </div>

      <div className="glass-panel mb-6">
        <h2 className="flex items-center gap-2 mb-4" style={{ display: 'flex', alignItems: 'center' }}>
          <TrendingUp size={20} style={{ color: 'var(--accent-color)' }} />
          Money Over Time
        </h2>
        <MoneyOverTimeChart data={trendData} />
      </div>

      <div className="grid grid-cols-3">
        <div className="glass-panel" style={{ gridColumn: 'span 2' }}>
          <h2 className="mb-6">Ledger</h2>
          <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th className="text-right">Amount</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.length === 0 ? (
                  <tr><td colSpan={5} className="text-center">No transactions yet.</td></tr>
                ) : transactions.map((t) => (
                  <EditableTransactionRow
                    key={t.id}
                    transaction={{
                      id: t.id,
                      date: format(new Date(t.date), 'yyyy-MM-dd'),
                      amount: t.amount,
                      type: t.type,
                      category: t.category,
                      description: t.description,
                      attachmentLink: t.attachmentLink,
                    }}
                    onDelete={deleteTransaction}
                    onUpdate={updateTransaction}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass-panel" style={{ height: 'fit-content' }}>
          <h2 className="flex-center gap-2" style={{ justifyContent: 'flex-start' }}>
            <Plus size={20} className="text-accent" />
            Add Transaction
          </h2>
          <form action={addTransaction} className="mt-4">
            <div className="input-group">
              <label className="input-label" htmlFor="type">Type</label>
              <select id="type" name="type" className="input-field" required>
                <option value="INCOME">Income</option>
                <option value="EXPENSE">Expense</option>
              </select>
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="amount">Amount ($)</label>
              <input type="number" id="amount" name="amount" step="0.01" min="0" className="input-field" required placeholder="0.00" />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="category">Category</label>
              <input type="text" id="category" name="category" className="input-field" required placeholder="Gig Pay, Rehearsal, Merch..." />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="date">Date</label>
              <input type="date" id="date" name="date" className="input-field" required defaultValue={new Date().toISOString().split('T')[0]} />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="description">Description (Optional)</label>
              <input type="text" id="description" name="description" className="input-field" placeholder="Notes about this..." />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="attachmentLink">Attachment Link (Optional)</label>
              <input type="url" id="attachmentLink" name="attachmentLink" className="input-field" placeholder="https://drive.google.com/..." />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Save Transaction</button>
          </form>
        </div>
      </div>
    </div>
  )
}
