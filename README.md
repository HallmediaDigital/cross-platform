# Cross-Platform Monorepo

A Turborepo-based monorepo demonstrating multiple Expo apps with cross-platform deployment targets using **Gluestack UI** and **NativeWind**.

## 📁 Structure

```
monorepo/
├── apps/
│   ├── mermaid/
│   │   ├── expo/           # Deploy to Expo EAS
│   │   └── web/            # Deploy to Vercel (Next.js)
│   └── prompt/
│       ├── expo/           # Deploy to Expo EAS
│       └── web/            # Deploy to Vercel (Next.js)
├── packages/
│   └── shared-utils/       # Shared utilities
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn 4 (will be installed automatically via Corepack)

### Installation

```bash
# Enable Corepack (comes with Node.js 16.10+)
# Windows: Run PowerShell as Administrator first
corepack enable

# Install dependencies
yarn install
```

> **Windows Users**: See [WINDOWS-SETUP.md](./WINDOWS-SETUP.md) for complete Windows installation guide. If you get "EPERM: operation not permitted", run PowerShell as Administrator or use `npm install -g yarn` instead.

## 📦 Apps & Packages

### Apps

- `@cross-platform/mermaid-expo` - Mermaid mobile app (Expo)
- `@cross-platform/mermaid-web` - Mermaid web app (Next.js)
- `@cross-platform/prompt-expo` - Prompt mobile app (Expo)
- `@cross-platform/prompt-web` - Prompt web app (Next.js)

### Packages

- `@cross-platform/shared-utils` - Shared utility functions
- `@cross-platform/ui-components` - Shared UI components (Gluestack UI)

## 🛠️ Commands

### Development

```bash
# Run all apps in dev mode
yarn dev

# Run specific app
yarn workspace @cross-platform/mermaid-web dev
yarn workspace @cross-platform/prompt-expo dev
```

### Build

```bash
# Build all apps
yarn build

# Build specific app
yarn workspace @cross-platform/mermaid-web build
```

### Testing

```bash
# Run tests across all packages
yarn test
```

### Linting & Type Checking

```bash
# Lint all packages
yarn lint

# Type check all packages
yarn type-check
```

## 📱 Expo Apps

### Development

```bash
# Start Expo for Mermaid
cd apps/mermaid/expo
yarn dev

# Start Expo for Prompt
cd apps/prompt/expo
yarn dev
```

### EAS Build

```bash
# Build for iOS/Android
cd apps/mermaid/expo
yarn build:ios
yarn build:android
yarn build:all
```

### EAS Submit

```bash
# Submit to stores
yarn submit:ios
yarn submit:android
```

## 🌐 Web Apps (Next.js)

### Development

```bash
# Mermaid web (port 3000)
cd apps/mermaid/web
yarn dev

# Prompt web (port 3001)
cd apps/prompt/web
yarn dev
```

### Deployment to Vercel

Each web app has a `vercel.json` configured. Deploy via:

```bash
cd apps/mermaid/web
vercel
```

Or connect your Git repository to Vercel for automatic deployments.

## 🏗️ Turborepo Features

- **Parallel Execution**: Turbo runs tasks across packages in parallel
- **Smart Caching**: Builds are cached and never recomputed
- **Remote Caching**: Share cache across your team (configure in Turbo)
- **Incremental Builds**: Only rebuild what changed

## 📝 Adding a New App

1. Create app directory structure:
   ```bash
   mkdir -p apps/new-app/expo
   mkdir -p apps/new-app/web
   ```

2. Copy package.json from existing app and update names

3. Install dependencies:
   ```bash
   yarn install
   ```

4. The workspace will automatically pick it up!

## 🔧 Tech Stack

- **Monorepo**: Turborepo
- **Package Manager**: Yarn 4
- **Mobile**: Expo + React Native
- **Web**: Next.js (App Router)
- **UI Library**: Gluestack UI (universal components)
- **Styling**: NativeWind (Tailwind for React Native) + Tailwind CSS (Web)
- **Language**: TypeScript
- **Testing**: Vitest
- **Build**: EAS (mobile), Vercel (web)

## 📄 License

MIT

