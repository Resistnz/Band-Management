# BandHQ – Band Management Dashboard

A Next.js application for managing your band's songs, gigs, finances, roadmap, and photos (via Immich).

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 16 (App Router)
- **Database**: SQLite via [Prisma](https://www.prisma.io/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Docker / Docker Compose

---

## Getting Started (Local Development)

### Prerequisites

- **Node.js** 20+
- **npm** (comes with Node)

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd "Band Management"
npm install
```

### 2. Set up the database

The app uses SQLite by default. The database file is stored at `prisma/dev.db`.

```bash
# Push the schema to create/update the database
npx prisma db push

# (Optional) Open Prisma Studio to browse your data
npx prisma studio
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Environment Variables

Create a `.env` file in the project root (one is already provided):

```env
DATABASE_URL="file:./dev.db"
```

Optionally set `NEXT_PUBLIC_IMMICH_URL` to point to your Immich instance.

---

## Database Backups

> **⚠️ Important:** Before making schema changes (adding/removing fields), always back up your database first.

The database is a single SQLite file located at:

```
prisma/dev.db
```

### How to Back Up

**On Windows:**
```bash
copy prisma\dev.db prisma\dev.db.backup
```

**On Linux/Mac:**
```bash
cp prisma/dev.db prisma/dev.db.backup
```

### How to Restore

Simply copy the backup file back:

```bash
# Windows
copy prisma\dev.db.backup prisma\dev.db

# Linux/Mac
cp prisma/dev.db.backup prisma/dev.db
```

### Schema Migration Safety

This project uses `prisma db push` (not `prisma migrate`) for schema updates. When you run `npx prisma db push`:

- **Adding new optional fields** (e.g. `String?`, `Int?`) is **safe** – existing data is preserved, new columns default to `null`.
- **Adding new required fields** without a default is **destructive** – Prisma will warn you and may drop data.
- **Renaming or removing fields** is **destructive**.

Always back up before making schema changes. The safest approach:

```bash
# 1. Back up your database
copy prisma\dev.db prisma\dev.db.backup

# 2. Apply schema changes
npx prisma db push

# 3. Verify your data is intact
npx prisma studio
```

---

## Docker Deployment

### Build and run locally

```bash
docker compose up --build -d
```

The app will be available at `http://localhost:3000`.

### Where is the Docker database?

The `docker-compose.yml` uses a **named volume** (`bandhq_db`) mounted to `/app/prisma` inside the container. This means the database file (`dev.db`) is NOT in your project directory — it's managed by Docker.

**To find the database on your server:**

```bash
# Find the actual path of the named volume
docker volume inspect bandhq_db

# Look for the "Mountpoint" value, e.g.:
# /var/lib/docker/volumes/bandhq_db/_data/dev.db
```

### Backing up the Docker database

```bash
# Option 1: Copy from the running container
docker cp bandhq:/app/prisma/dev.db ./dev.db.backup

# Option 2: Copy directly from the volume mountpoint (requires sudo)
sudo cp /var/lib/docker/volumes/bandhq_db/_data/dev.db ./dev.db.backup
```

### Restoring a backup

```bash
# Stop the container first
docker compose down

# Copy the backup into the volume
docker cp ./dev.db.backup bandhq:/app/prisma/dev.db

# Or copy to the volume mountpoint
sudo cp ./dev.db.backup /var/lib/docker/volumes/bandhq_db/_data/dev.db

# Restart
docker compose up -d
```

### Alternative: Use a bind mount (easier backups)

If you want the database in a visible directory on your server, change `docker-compose.yml`:

```yaml
volumes:
  - ./data:/app/prisma    # bind mount instead of named volume
```

Then the database will be at `./data/dev.db` on your host filesystem.

### Production Notes

- On first run, the container runs `prisma db push` to initialize the schema.
- Always back up the database before deploying schema changes.

---

## Project Structure

```
src/
  app/
    page.tsx          # Dashboard
    songs/            # Song repertoire & setlists
    gigs/             # Gig timeline & setlist management
    finances/         # Income & expense ledger
    roadmap/          # Band goals tracker
    photos/           # Immich integration (iframe)
    globals.css       # Design system & styles
  components/
    Sidebar.tsx       # Navigation sidebar
    SongCharts.tsx    # Recharts chart components
prisma/
  schema.prisma       # Database schema
  dev.db              # SQLite database file
```
