#!/bin/bash
# deploy.sh — Run this on your droplet to deploy/update Conduit Software
# Usage: bash deploy.sh

set -e

APP_DIR="/var/www/conduit-software"
REPO_URL="YOUR_GIT_REPO_URL_HERE"  # e.g. git@github.com:you/conduit-software.git
BRANCH="main"

echo "╔══════════════════════════════════════╗"
echo "║   Conduit Software — Deploy Script   ║"
echo "╚══════════════════════════════════════╝"

# ─── First-time setup ────────────────────────────────────────
if [ ! -d "$APP_DIR" ]; then
    echo "→ First deploy: cloning repository..."
    sudo mkdir -p "$APP_DIR"
    sudo chown $USER:$USER "$APP_DIR"
    git clone "$REPO_URL" "$APP_DIR"
    cd "$APP_DIR"
    git checkout "$BRANCH"
else
    echo "→ Pulling latest changes..."
    cd "$APP_DIR"
    git fetch origin
    git reset --hard "origin/$BRANCH"
fi

# ─── Install dependencies ────────────────────────────────────
echo "→ Installing dependencies..."
npm ci --production=false

# ─── Build ────────────────────────────────────────────────────
echo "→ Building Next.js app..."
npm run build

# ─── PM2 ──────────────────────────────────────────────────────
echo "→ Restarting with PM2..."
if pm2 describe conduit-software > /dev/null 2>&1; then
    pm2 restart conduit-software
else
    pm2 start ecosystem.config.js
fi
pm2 save

echo ""
echo "✅ Deploy complete! Site is running on port 3000."
echo "   Make sure Nginx is configured to proxy to port 3000."
echo ""
