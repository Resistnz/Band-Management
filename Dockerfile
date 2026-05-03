FROM node:20-alpine AS base

# 1. Install necessary shared libraries in the base stage
# openssl is required for Prisma to communicate with your database
# libc6-compat is required for process execution in Alpine
RUN apk add --no-cache libc6-compat openssl

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 2. Generate Prisma Client before building
RUN npx prisma generate

# 3. Build Next.js application
# (This will now succeed because openssl is available for prerendering)
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Install prisma CLI matching the version in package.json to run db push
RUN npm install -g prisma@5.14.0

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to the correct user
USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# 4. Use a shell to execute multiple commands at runtime
CMD ["sh", "-c", "prisma db push --skip-generate && node server.js"]