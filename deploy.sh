#!/bin/bash
#
# AFC Spittal Deployment Script
# Usage: ./deploy.sh [up|down|restart|status|logs|build]
#

set -e

# Configuration
CONTAINER_NAME="afcspittal"
IMAGE_NAME="afcspittal"
HOST_PORT="8880"
CONTAINER_PORT="80"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Build the Docker image
build() {
    log_info "Building Docker image: ${IMAGE_NAME}"
    docker build -t "${IMAGE_NAME}" "${SCRIPT_DIR}"
    log_info "Build complete"
}

# Start the container
up() {
    if docker ps -q -f name="${CONTAINER_NAME}" | grep -q .; then
        log_warn "Container ${CONTAINER_NAME} is already running"
        return 0
    fi

    # Remove stopped container if exists
    if docker ps -aq -f name="${CONTAINER_NAME}" | grep -q .; then
        log_info "Removing stopped container"
        docker rm "${CONTAINER_NAME}" > /dev/null
    fi

    # Build if image doesn't exist
    if ! docker images -q "${IMAGE_NAME}" | grep -q .; then
        build
    fi

    log_info "Starting container ${CONTAINER_NAME} on port ${HOST_PORT}"
    docker run -d \
        --name "${CONTAINER_NAME}" \
        --restart unless-stopped \
        -p "${HOST_PORT}:${CONTAINER_PORT}" \
        "${IMAGE_NAME}"

    log_info "Container started successfully"
    log_info "Website available at: http://localhost:${HOST_PORT}"
}

# Stop the container
down() {
    if docker ps -q -f name="${CONTAINER_NAME}" | grep -q .; then
        log_info "Stopping container ${CONTAINER_NAME}"
        docker stop "${CONTAINER_NAME}" > /dev/null
        docker rm "${CONTAINER_NAME}" > /dev/null
        log_info "Container stopped and removed"
    else
        log_warn "Container ${CONTAINER_NAME} is not running"
    fi
}

# Restart the container
restart() {
    down
    build
    up
}

# Show container status
status() {
    if docker ps -q -f name="${CONTAINER_NAME}" | grep -q .; then
        log_info "Container ${CONTAINER_NAME} is running"
        docker ps -f name="${CONTAINER_NAME}" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
    else
        log_warn "Container ${CONTAINER_NAME} is not running"
    fi
}

# Show container logs
logs() {
    if docker ps -aq -f name="${CONTAINER_NAME}" | grep -q .; then
        docker logs -f "${CONTAINER_NAME}"
    else
        log_error "Container ${CONTAINER_NAME} does not exist"
        exit 1
    fi
}

# Show usage
usage() {
    echo "AFC Spittal Deployment Script"
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  up       Start the container (builds if needed)"
    echo "  down     Stop and remove the container"
    echo "  restart  Rebuild and restart the container"
    echo "  status   Show container status"
    echo "  logs     Show container logs (follow mode)"
    echo "  build    Build the Docker image"
    echo ""
    echo "Configuration:"
    echo "  Container: ${CONTAINER_NAME}"
    echo "  Port:      ${HOST_PORT}"
    echo ""
}

# Main
case "${1:-}" in
    up)
        up
        ;;
    down)
        down
        ;;
    restart)
        restart
        ;;
    status)
        status
        ;;
    logs)
        logs
        ;;
    build)
        build
        ;;
    *)
        usage
        exit 1
        ;;
esac
