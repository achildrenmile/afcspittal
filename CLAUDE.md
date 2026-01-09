# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AFC Spittal (Amateurfunkclub Spittal an der Drau) - a ham radio club website built as a static SPA.

## Build Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (static export to out/)
npm run lint     # Run ESLint
```

## Architecture

- **Framework**: Next.js 16 with App Router and static export (`output: "export"`)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Output**: Static HTML files in `out/` directory (no server required)

## Project Structure

```
src/app/          # App Router pages and layouts
  layout.tsx      # Root layout with metadata
  page.tsx        # Home page
  globals.css     # Global styles and Tailwind imports
public/           # Static assets
out/              # Build output (static files)
```
