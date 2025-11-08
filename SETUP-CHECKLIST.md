# Setup Checklist

Use this checklist to set up your Turborepo POC step by step.

## 📋 Initial Setup

### Prerequisites

- [ ] Node.js 18+ installed ([Download](https://nodejs.org/))
- [ ] Git installed ([Download](https://git-scm.com/))
- [ ] Code editor (VS Code recommended)

### Installation

```bash
# Enable Corepack (built into Node.js)
corepack enable

# Install dependencies
yarn install
```

- [ ] Dependencies installed successfully
- [ ] No error messages

## ✅ Verification

### 1. Check Workspace Setup

```bash
yarn workspaces list
```

Expected output:
- [ ] `@cross-platform/mermaid-expo`
- [ ] `@cross-platform/mermaid-web`
- [ ] `@cross-platform/prompt-expo`
- [ ] `@cross-platform/prompt-web`
- [ ] `@cross-platform/shared-utils`

### 2. Build Shared Packages

```bash
yarn workspace @cross-platform/shared-utils build
```

- [ ] Build completed without errors
- [ ] `packages/shared-utils/dist/` directory created

### 3. Run Tests

```bash
yarn workspace @cross-platform/shared-utils test
```

- [ ] All tests pass (5 passing)

## 🌐 Test Web Apps

### Mermaid Web

```bash
yarn workspace @cross-platform/mermaid-web dev
```

- [ ] Server starts on http://localhost:3000
- [ ] Page loads in browser
- [ ] Displays "Mermaid App", today's date, and version
- [ ] No console errors

### Prompt Web

```bash
yarn workspace @cross-platform/prompt-web dev
```

- [ ] Server starts on http://localhost:3001
- [ ] Page loads in browser
- [ ] Displays "Prompt App"
- [ ] No console errors

## 📱 Test Mobile Apps (Expo)

### Prerequisites

- [ ] Expo Go app installed on your phone
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

OR

- [ ] Xcode installed (Mac only, for iOS Simulator)
- [ ] Android Studio installed (for Android Emulator)

### Mermaid Expo

```bash
cd apps/mermaid/expo
yarn dev
```

- [ ] QR code displayed
- [ ] Scan with Expo Go app
- [ ] App loads on phone
- [ ] Displays "Mermaid App" with "Expo Mobile"

### Prompt Expo

```bash
cd apps/prompt/expo
yarn dev
```

- [ ] QR code displayed
- [ ] Scan with Expo Go app
- [ ] App loads on phone
- [ ] Displays "Prompt App" with "Expo Mobile"

## 🔧 Optional Configurations

### VS Code Setup

Install recommended extensions:
- [ ] ESLint
- [ ] Prettier
- [ ] TypeScript and JavaScript Language Features

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Git Setup

- [ ] Initialize git: `git init`
- [ ] Add remote: `git remote add origin <your-repo-url>`
- [ ] Initial commit:

```bash
git add .
git commit -m "Initial commit: Turborepo POC setup"
git push -u origin main
```

## 🚀 Deployment Setup (Optional)

### Vercel (Web Apps)

- [ ] Create Vercel account ([vercel.com](https://vercel.com))
- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Login: `vercel login`
- [ ] Deploy test:
  ```bash
  cd apps/mermaid/web
  vercel
  ```

### Expo EAS (Mobile Apps)

- [ ] Create Expo account ([expo.dev](https://expo.dev))
- [ ] Install EAS CLI: `npm i -g eas-cli`
- [ ] Login: `eas login`
- [ ] Configure:
  ```bash
  cd apps/mermaid/expo
  eas build:configure
  ```

## 🧪 Run All Tasks

### Build Everything

```bash
yarn build
```

- [ ] All apps build successfully
- [ ] No TypeScript errors

### Type Check

```bash
yarn type-check
```

- [ ] No type errors

### Lint (if configured)

```bash
yarn lint
```

- [ ] No linting errors

## 🎯 Success Criteria

You're all set if:

- ✅ All dependencies installed
- ✅ Web apps run locally (ports 3000 & 3001)
- ✅ Mobile apps run on Expo Go
- ✅ Shared package builds and tests pass
- ✅ No TypeScript or build errors
- ✅ Hot reload works when editing files

## 📚 Next Steps

Now that setup is complete:

1. **Customize apps**: Edit files in `apps/*/app/`
2. **Add shared code**: Create utilities in `packages/shared-utils/src/`
3. **Add features**: Implement your app logic
4. **Add tests**: Write tests alongside your code
5. **Deploy**: Follow `DEPLOYMENT.md`

## 🐛 Troubleshooting

### "corepack: command not found"
→ Update Node.js to v16.10+

### "Workspace not found"
→ Run `yarn install` from root directory

### Expo QR code won't scan
→ Make sure phone and computer are on same WiFi

### Port already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Build fails
```bash
# Clear all caches
rm -rf node_modules .next .turbo .expo
yarn install
yarn build
```

### Yarn issues
```bash
# Reset Yarn
yarn cache clean
rm -rf .yarn/cache
yarn install
```

## 📝 Configuration Checklist

Before deploying to production:

- [ ] Update bundle identifiers in `app.json` files
- [ ] Set up environment variables
- [ ] Configure app icons and splash screens
- [ ] Update app names and descriptions
- [ ] Set up analytics (optional)
- [ ] Configure error tracking (optional)
- [ ] Set up CI/CD (optional)

## ✨ You're Done!

Everything working? Awesome! 🎉

Check out:
- `README.md` - Full documentation
- `ARCHITECTURE.md` - How it all works
- `DEPLOYMENT.md` - Deployment guide
- `CONTRIBUTING.md` - Development workflow

Happy coding! 🚀

