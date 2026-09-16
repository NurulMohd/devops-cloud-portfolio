# Nurul Mohammad — DevOps Portfolio

A responsive, static portfolio website for showcasing DevOps, cloud
infrastructure, automation, and reliability engineering work.

The site is built with React and Vite. It uses hash-based client-side routing,
so it can be deployed to static hosting without a backend server.

## Contents

- [Overview](#overview)
- [Features](#features)
- [Technology](#technology)
- [Routes](#routes)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Customization](#customization)
- [Deployment](#deployment)
- [Constraints](#constraints)

## Overview

The portfolio presents a DevOps profile focused on making software delivery
reliable and repeatable. It includes:

- A landing page with a personal introduction and key metrics
- A skills section covering cloud, infrastructure, automation, and observability
- A selected projects showcase
- A dedicated contact page
- Responsive layouts for desktop and mobile screens

## Features

- Clean editorial-style visual design
- Responsive navigation and content layout
- Hash-based routing with a fallback 404 view
- Project data rendered from reusable React components
- Accessible navigation labels and descriptive page metadata
- Static production build suitable for GitHub Pages, Netlify, Vercel, or any
  static file host

## Technology

- [React](https://react.dev/) 18
- [React DOM](https://react.dev/reference/react-dom) 18
- [Vite](https://vite.dev/) 5
- CSS3
- Google Fonts:
  - DM Sans
  - DM Mono
  - Playfair Display

This project does **not** use Express, Docker, or Kubernetes.

## Routes

The application uses hash routes:

| Route | Description |
| --- | --- |
| `#/` | Home page with profile introduction, capabilities, and featured work |
| `#/projects` | Full selected projects page |
| `#/contact` | Contact information and social links |
| Any other route | Not-found page |

Examples:

```text
http://localhost:5173/#/
http://localhost:5173/#/projects
http://localhost:5173/#/contact
```

## Project structure

```text
devops-cloud-portfolio/
├── index.html              # Vite HTML entry point and page metadata
├── package.json             # Project metadata and npm scripts
├── package-lock.json        # Locked dependency versions
├── src/
│   ├── main.jsx             # React app, routes, page components, and content
│   └── styles.css           # Global styles and responsive layout rules
└── README.md                # Project documentation
```

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually:

```text
http://localhost:5173
```

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Customization

Most portfolio content is maintained in
[`src/main.jsx`](./src/main.jsx).

Update the following values there:

- Name and location
- Introduction text
- Experience metrics
- Skills and tools
- Project titles, descriptions, and results
- Email address
- GitHub and LinkedIn URLs

The visual theme and responsive breakpoints are defined in
[`src/styles.css`](./src/styles.css).

Update the document title and SEO description in
[`index.html`](./index.html) if the portfolio is being reused for another
profile.

## Deployment

Build the static site:

```bash
npm run build
```

The generated files are placed in `dist/`. Upload that directory to a static
hosting provider.

### GitHub Pages

For GitHub Pages deployment, configure the project to publish the `dist/`
directory using your preferred CI workflow or static deployment action. Because
the application uses hash-based routes, direct navigation to `#/projects` and
`#/contact` works without server-side rewrite rules.

### Netlify or Vercel

Use the following settings:

```text
Build command: npm run build
Publish directory: dist
```

## Constraints

- No Express server is required.
- No Docker image or container runtime is required.
- No Kubernetes cluster or manifest is required.
- Routing is handled in the browser with URL hashes.

## License

This project is intended as a personal portfolio template. Update the license
and attribution details before distributing it as a reusable public template.
