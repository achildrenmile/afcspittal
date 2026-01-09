# AFC Spittal - Deployment Guide

## Overview

The AFC Spittal website is a static Next.js site served via nginx in a Docker container.

## Requirements

- Docker (version 20.10 or later)
- Bash shell

## Quick Start

```bash
# Start the container
./deploy.sh up

# Stop the container
./deploy.sh down
```

## Configuration

| Setting | Value | Description |
|---------|-------|-------------|
| Container Name | `afcspittal` | Docker container name |
| Image Name | `afcspittal` | Docker image name |
| Host Port | `8880` | Port exposed on host machine |
| Container Port | `80` | Internal nginx port |

**Website URL:** http://localhost:8880

## Deployment Commands

### Start Container

```bash
./deploy.sh up
```

Builds the image (if not exists) and starts the container. The container is configured to restart automatically unless explicitly stopped.

### Stop Container

```bash
./deploy.sh down
```

Stops and removes the container. The image is preserved for faster restarts.

### Restart with Rebuild

```bash
./deploy.sh restart
```

Stops the container, rebuilds the image with latest code, and starts a new container. Use this after code changes.

### Check Status

```bash
./deploy.sh status
```

Shows whether the container is running and its current state.

### View Logs

```bash
./deploy.sh logs
```

Follows the nginx access and error logs in real-time. Press `Ctrl+C` to exit.

### Build Only

```bash
./deploy.sh build
```

Builds the Docker image without starting a container.

## Architecture

```
┌─────────────────────────────────────────┐
│           Docker Container              │
│  ┌───────────────────────────────────┐  │
│  │            nginx:alpine           │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │   /usr/share/nginx/html     │  │  │
│  │  │   (Next.js static export)   │  │  │
│  │  └─────────────────────────────┘  │  │
│  │              :80                  │  │
│  └───────────────────────────────────┘  │
└──────────────────┬──────────────────────┘
                   │
                   ▼ mapped to
            Host :8880
```

## Build Process

The Dockerfile uses a multi-stage build:

1. **Builder Stage** (node:20-alpine)
   - Installs npm dependencies
   - Runs `npm run build` to generate static files in `out/`

2. **Production Stage** (nginx:alpine)
   - Copies static files to nginx html directory
   - Applies custom nginx configuration for SPA routing

## nginx Configuration

The `nginx.conf` includes:

- **Gzip compression** for text-based assets
- **Security headers** (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection)
- **Static asset caching** (1 year for JS, CSS, images, fonts)
- **SPA routing** via `try_files` directive

## Changing the Port

Edit `deploy.sh` and modify the `HOST_PORT` variable:

```bash
HOST_PORT="8880"  # Change to desired port
```

Then restart:

```bash
./deploy.sh restart
```

## Troubleshooting

### Container won't start

Check if port 8880 is already in use:

```bash
ss -tlnp | grep 8880
```

### View build errors

```bash
docker build -t afcspittal .
```

### Check container health

```bash
docker inspect afcspittal
```

### Force rebuild without cache

```bash
docker build --no-cache -t afcspittal .
./deploy.sh up
```

## Production Deployment

For production, consider:

1. **Reverse Proxy**: Place behind nginx/Apache/Caddy with SSL
2. **Domain**: Configure DNS to point to server
3. **SSL**: Use Let's Encrypt for HTTPS
4. **Monitoring**: Add health checks and logging

Example nginx reverse proxy config:

```nginx
server {
    listen 443 ssl http2;
    server_name afcspittal.example.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:8880;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Files

| File | Purpose |
|------|---------|
| `Dockerfile` | Multi-stage build configuration |
| `nginx.conf` | nginx server configuration |
| `deploy.sh` | Deployment automation script |
| `.dockerignore` | Files excluded from Docker build |
