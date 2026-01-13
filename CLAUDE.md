# AFC Spittal - Claude Context

## Project Overview

Website for **AFC Spittal** (Amateurfunkclub Spittal an der Drau) - a ham radio club in Carinthia, Austria.

- **URL:** https://demo.afc-spittal.at
- **Repository:** https://github.com/achildrenmile/afcspittal

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Output**: Static HTML export (no server required)
- **Deployment**: Docker + nginx on Synology NAS

## Project Structure

```
├── src/
│   ├── app/              # App Router pages and layouts
│   │   ├── layout.tsx    # Root layout with metadata
│   │   ├── page.tsx      # Home page
│   │   ├── aktuelles/    # News section
│   │   ├── presse/       # Press section
│   │   ├── diplome/      # Diplomas/awards
│   │   ├── kontakt/      # Contact
│   │   ├── ueber-uns/    # About us
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   └── Navigation.tsx
│   └── lib/              # Utility functions
│       ├── aktuelles.ts  # News content loader
│       └── presse.ts     # Press content loader
├── content/
│   ├── aktuelles/        # News articles (markdown)
│   └── presse/           # Press articles (markdown)
├── public/               # Static assets
├── out/                  # Build output (static files)
├── Dockerfile            # Multi-stage build (Next.js → nginx)
├── nginx.conf            # Nginx configuration for SPA
└── deploy-production.sh  # Synology deployment script
```

## Deployment

### Production (Synology NAS)

```bash
# Deploy to production
./deploy-production.sh
```

**Requirements:**
- Copy `.env.production.example` to `.env.production` and configure
- SSH access to Synology configured

**Infrastructure:**
- **Host**: Synology NAS
- **Container**: `afcspittal-synology` on port 8880
- **Tunnel**: `cloudflared-afcspittal` (Cloudflare Tunnel)
- **URL**: https://demo.afc-spittal.at

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (static export to out/)
npm run build

# Run ESLint
npm run lint
```

## Content Management

### Adding News Articles

1. Create markdown file in `content/aktuelles/YYYY-MM-DD-slug.md`
2. Add frontmatter with title, date, excerpt
3. Rebuild and deploy

### Adding Press Articles

1. Create markdown file in `content/presse/YYYY-MM-DD-slug.md`
2. Add frontmatter with title, date, source, url
3. Rebuild and deploy

## Pages

- `/` - Home page
- `/aktuelles` - News listing
- `/aktuelles/[slug]` - Individual news article
- `/presse` - Press coverage
- `/diplome` - Club diplomas and awards
- `/ueber-uns` - About the club
- `/ueber-uns/beitritt` - How to join
- `/ueber-uns/clubabend` - Club meetings
- `/ueber-uns/geschichte` - Club history
- `/kontakt` - Contact information
- `/impressum` - Legal notice
- `/datenschutz` - Privacy policy

## Maintenance

### Check logs on Synology
```bash
ssh straliadmin@<SYNOLOGY_IP> '/usr/local/bin/docker logs afcspittal-synology'
```

### Verify deployment
```bash
curl -s -o /dev/null -w "%{http_code}" https://demo.afc-spittal.at/
```
