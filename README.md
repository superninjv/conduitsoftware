# Conduit Software

Main website for Conduit Software — hub for all projects, APIs, and tools.

**Live at:** [conduitsoftware.org](https://conduitsoftware.org)
**report bugs:** [https://conduitsoftware.org/bugs](https://conduitsoftware.org/bugs)

---

## Stack

- **Next.js 14** (App Router)
- **React 18** + TypeScript
- **Tailwind CSS** with dark/light mode
- **Nodemailer** for contact/bug report emails
- **PM2** for process management
- **Nginx** as reverse proxy

## Local Development

```bash
# Install dependencies
npm install

# Copy env file and fill in your values
cp .env.example .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles + design tokens
│   ├── projects/page.tsx     # All projects with filtering
│   ├── bugs/page.tsx         # Bug report form
│   ├── contact/page.tsx      # Contact form
│   ├── docs/page.tsx         # API documentation
│   └── api/v1/
│       ├── projects/route.ts # GET /api/v1/projects
│       ├── bugs/route.ts     # POST /api/v1/bugs
│       └── contact/route.ts  # POST /api/v1/contact
├── components/
│   ├── Navbar.tsx            # Sticky nav with theme toggle
│   ├── Footer.tsx            # Site footer
│   ├── ConduitLogo.tsx       # SVG logo component
│   ├── ProjectCard.tsx       # Reusable project card
│   └── AnimatedSection.tsx   # Scroll-triggered animation wrapper
├── config/
│   ├── site.ts               # Site-wide config (name, URLs, nav)
│   └── projects.ts           # All products/projects data
└── lib/
    ├── theme.tsx              # Dark/light mode provider
    └── email.ts               # Nodemailer setup
```

## Adding a New Project

Edit `src/config/projects.ts` and add an entry:

```ts
{
  id: "my-new-project",
  name: "My New Project",
  tagline: "Short description",
  description: "Longer description for the card.",
  category: "tools",        // analytics | mods | tools | platforms
  status: "development",    // live | beta | development | planned
  icon: "🔧",
  tags: ["Tag1", "Tag2"],
  featured: true,           // show on homepage
}
```

That's it — it automatically appears on the projects page and API.

## Deployment (DigitalOcean Droplet)

### Prerequisites on the droplet
- Node.js 18+ (already installed)
- Nginx (`sudo apt install nginx`)
- PM2 (`npm install -g pm2`)
- Certbot (`sudo apt install certbot python3-certbot-nginx`)

### Step-by-step

1. **Push code to a git repo** (GitHub, etc.)

2. **SSH into your droplet** and run initial setup:
   ```bash
   # Install PM2 globally if not already
   npm install -g pm2

   # Install Nginx if not already
   sudo apt update && sudo apt install nginx -y

   # Clone your repo
   sudo mkdir -p /var/www/conduit-software
   sudo chown $USER:$USER /var/www/conduit-software
   git clone YOUR_REPO_URL /var/www/conduit-software
   cd /var/www/conduit-software
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   nano .env.local
   # Fill in your SMTP credentials
   ```

4. **Build and start:**
   ```bash
   npm ci
   npm run build
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup  # auto-start on reboot
   ```

5. **Configure Nginx:**
   ```bash
   sudo cp nginx/conduitsoftware.org.conf /etc/nginx/sites-available/conduitsoftware.org
   sudo ln -s /etc/nginx/sites-available/conduitsoftware.org /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

6. **Set up SSL:**
   ```bash
   sudo certbot --nginx -d conduitsoftware.org -d www.conduitsoftware.org
   ```

7. **Point your domain's DNS:**
   - A record: `conduitsoftware.org` → your droplet IP
   - A record: `www.conduitsoftware.org` → your droplet IP

### Updating
```bash
cd /var/www/conduit-software
git pull
npm ci
npm run build
pm2 restart conduit-software
```

Or use the deploy script: `bash deploy.sh`

## Running alongside Paragon Royale

Since paragonroyale.com already runs on your droplet, you'll have two Next.js apps:

| App | Port | Domain |
|-----|------|--------|
| Conduit Software | 3000 | conduitsoftware.org |
| Paragon Royale | 3001 | paragonroyale.com |

Make sure Paragon Royale is on a different port (update its config if needed), and add a separate Nginx server block for it pointing to its port.

## API

All public endpoints are at `/api/v1/`:

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/v1/projects` | List all projects (supports `?category=` and `?status=` filters) |
| GET | `/api/v1/projects?id=paragon-royale` | Get single project |
| POST | `/api/v1/bugs` | Submit bug report |
| POST | `/api/v1/contact` | Send contact message |

## License

Proprietary — Conduit Software
