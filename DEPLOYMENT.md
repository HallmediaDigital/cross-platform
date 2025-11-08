# Deployment Guide

## 📱 Expo Apps (Mobile)

### Prerequisites
- Expo account: https://expo.dev
- EAS CLI: `npm install -g eas-cli`
- Login: `eas login`

### Initial Setup

1. **Configure EAS for each app:**

```bash
# For Mermaid
cd apps/mermaid/expo
eas build:configure

# For Prompt
cd apps/prompt/expo
eas build:configure
```

2. **Update bundle identifiers** in `app.json`:
   - iOS: `expo.ios.bundleIdentifier`
   - Android: `expo.android.package`

### Building

```bash
# Development build (for testing)
eas build --profile development --platform ios

# Production build
eas build --profile production --platform all
```

### Submitting to Stores

```bash
# iOS App Store
eas submit --platform ios

# Google Play Store
eas submit --platform android
```

### Over-the-Air (OTA) Updates

```bash
# Publish update
eas update --branch production --message "Bug fixes"
```

## 🌐 Next.js Apps (Web)

### Vercel Deployment

#### Option 1: Git Integration (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Import to Vercel:**
   - Go to https://vercel.com/new
   - Import your repository
   - Vercel will detect the Next.js apps automatically

3. **Configure each app:**
   - Root Directory: `apps/mermaid/web` or `apps/prompt/web`
   - Build Command: Uses the `vercel.json` config
   - Install Command: Uses the `vercel.json` config

#### Option 2: CLI Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy Mermaid Web
cd apps/mermaid/web
vercel

# Deploy Prompt Web
cd apps/prompt/web
vercel
```

### Environment Variables

Set environment variables in:
- **Vercel**: Project Settings → Environment Variables
- **Expo**: `eas.json` or EAS Secrets

```bash
# Add Expo secret
eas secret:create --name API_KEY --value your-key
```

## 🚀 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy-web:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: corepack enable
      - run: yarn install
      - run: yarn build
      
  deploy-mobile:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install -g eas-cli
      - run: eas build --platform all --non-interactive
        env:
          EXPO_TOKEN: ${{ secrets.EXPO_TOKEN }}
```

## 📊 Environment-Specific Configs

### Development
- Web: `yarn dev` (local)
- Mobile: Expo Go app

### Staging
- Web: Vercel preview deployments
- Mobile: EAS preview builds

### Production
- Web: Vercel production
- Mobile: EAS production builds → App stores

## 🔒 Secrets Management

### For Expo:
```bash
eas secret:create --name SECRET_NAME --value secret-value
```

### For Vercel:
- Use Vercel dashboard or CLI
- Reference in code via `process.env.SECRET_NAME`

## 📝 Pre-deployment Checklist

- [ ] Update version numbers in `package.json` and `app.json`
- [ ] Test builds locally
- [ ] Set all required environment variables
- [ ] Update app store listings (screenshots, descriptions)
- [ ] Test on real devices
- [ ] Review bundle sizes: `turbo run build --filter=<app-name>`
- [ ] Update changelog

## 🐛 Troubleshooting

### Expo Build Fails
- Check `eas.json` configuration
- Verify bundle identifiers are unique
- Check expo-cli version: `eas --version`

### Vercel Build Fails
- Check build logs in Vercel dashboard
- Verify `vercel.json` paths are correct
- Ensure all dependencies are in `package.json`

### Workspace Issues
- Clear node_modules: `rm -rf node_modules && yarn install`
- Clear Turbo cache: `turbo run build --force`

