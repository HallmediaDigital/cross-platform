# Quick Start Guide

Get up and running in 5 minutes with Gluestack UI and NativeWind! 🚀

## Prerequisites

- **Node.js** 18+ ([download](https://nodejs.org/))
- **Git** ([download](https://git-scm.com/))

That's it! Yarn 4 will be automatically installed via Corepack.

## Installation

### Step 1: Enable Corepack

**Windows (requires Admin):**

```powershell
# Right-click PowerShell and "Run as Administrator", then:
corepack enable
```

**Mac/Linux:**

```bash
corepack enable
```

> **Windows Note**: If you get a permission error, you MUST run PowerShell as Administrator. Or alternatively, install Yarn globally: `npm install -g yarn`

### Step 2: Install Dependencies

```bash
# Navigate to project directory
cd C:\dev\cross-platform

# Install all dependencies
yarn install
```

## Running the Apps

### 🌐 Web Apps (Next.js)

```bash
# Terminal 1: Mermaid Web (http://localhost:3000)
yarn workspace @cross-platform/mermaid-web dev

# Terminal 2: Prompt Web (http://localhost:3001)
yarn workspace @cross-platform/prompt-web dev
```

Or run all at once:

```bash
yarn dev
```

### 📱 Mobile Apps (Expo)

**Option 1: Expo Go (Quickest)**

1. Install Expo Go on your phone:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Start the dev server:

```bash
# Mermaid
cd apps/mermaid/expo
yarn dev

# Prompt
cd apps/prompt/expo
yarn dev
```

3. Scan the QR code with your phone

**Option 2: iOS Simulator (Mac only)**

```bash
cd apps/mermaid/expo
yarn ios
```

**Option 3: Android Emulator**

```bash
cd apps/prompt/expo
yarn android
```

## Project Structure

```
cross-platform/
├── apps/
│   ├── mermaid/
│   │   ├── expo/          # 📱 Mobile app
│   │   └── web/           # 🌐 Web app
│   └── prompt/
│       ├── expo/          # 📱 Mobile app
│       └── web/           # 🌐 Web app
├── packages/
│   └── shared-utils/      # 📦 Shared code
└── turbo.json             # ⚡ Turbo config
```

## Making Changes

### Edit Web App

1. Open `apps/mermaid/web/app/page.tsx`
2. Make changes
3. See updates instantly at http://localhost:3000

### Edit Mobile App

1. Open `apps/mermaid/expo/app/index.tsx`
2. Make changes
3. Shake your phone → "Reload" (or press `r` in terminal)

### Add Shared Code

1. Edit `packages/shared-utils/src/index.ts`
2. Build it: `yarn workspace @cross-platform/shared-utils build`
3. Use in apps:

```typescript
import { formatDate } from '@cross-platform/shared-utils';
```

## Common Commands

```bash
# Install all dependencies
yarn install

# Run all apps in dev mode
yarn dev

# Build everything
yarn build

# Run tests
yarn test

# Type check
yarn type-check

# Lint code
yarn lint
```

## Next Steps

✅ Apps are running!

Now try:

1. 📝 Edit code and see hot reload
2. 🧪 Add a test: `packages/shared-utils/src/index.test.ts`
3. 🎨 Customize UI in the app files
4. 📦 Create a new shared package
5. 🚀 Deploy (see `DEPLOYMENT.md`)

## Troubleshooting

### "Command not found: corepack"

Update Node.js to version 16.10 or later.

### "EPERM: operation not permitted" (Windows)

**Solution 1 (Recommended):** Run PowerShell as Administrator, then run `corepack enable`

**Solution 2:** Install Yarn globally (no admin needed):

```bash
npm install -g yarn
```

### "Workspace not found"

Run `yarn install` from the root directory.

### Expo app won't load

1. Make sure you're on the same WiFi network
2. Try: `yarn start --clear`

### Port already in use

```bash
# Kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Yarn 4 not working

```bash
corepack enable
corepack prepare yarn@4.0.0 --activate
```

## Resources

- 📚 [Full README](./README.md)
- 🎨 [Gluestack UI + NativeWind Guide](./GLUESTACK-NATIVEWIND-GUIDE.md)
- 🚀 [Deployment Guide](./DEPLOYMENT.md)
- 🤝 [Contributing Guide](./CONTRIBUTING.md)
- 💬 [Turborepo Docs](https://turbo.build/repo/docs)
- 📱 [Expo Docs](https://docs.expo.dev)
- 🌐 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Gluestack UI Docs](https://gluestack.io/)
- 💨 [NativeWind Docs](https://www.nativewind.dev/)

## Getting Help

Having issues? Check:

1. The troubleshooting section above
2. `CONTRIBUTING.md` for debugging tips
3. GitHub Issues

Happy coding! 🎉
