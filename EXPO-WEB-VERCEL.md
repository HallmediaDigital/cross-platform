# Deploying Expo Web to Vercel

Complete guide to deploy your Expo apps as web applications on Vercel.

## 📋 Overview

Your monorepo structure supports two web deployment strategies:

1. **Next.js Web** (`apps/mermaid/web/`) - Traditional Next.js app
2. **Expo Web** (`apps/mermaid/expo/`) - Expo app running on web via Metro bundler

Both can be deployed to Vercel independently!

## 🎯 Why Deploy Expo as Web?

- ✅ **Same codebase** for mobile and web
- ✅ **Gluestack UI** works perfectly on web
- ✅ **Code reuse** - share 100% of code between platforms
- ✅ **Faster development** - one app, multiple platforms
- ✅ **Consistent UX** - same components everywhere

## 🚀 Quick Deploy (Expo to Vercel)

### Option 1: Using Vercel Dashboard (Recommended)

1. **Push to Git**
   ```bash
   git add .
   git commit -m "Add Expo web support"
   git push
   ```

2. **Create New Project in Vercel**
   - Go to https://vercel.com/new
   - Import your repository
   - Configure as follows:

3. **Vercel Project Settings**
   ```
   Framework Preset: Other
   Root Directory: apps/mermaid/expo
   Build Command: cd ../.. && yarn install && yarn workspace @cross-platform/mermaid-expo expo export -p web
   Output Directory: apps/mermaid/expo/dist
   Install Command: cd ../.. && yarn install
   ```

### Option 2: Using vercel.json (Automated)

I'll create the config files for you:

## 📁 Configuration Files

### For Mermaid Expo Web

Create `apps/mermaid/expo/vercel.json`:

```json
{
  "version": 2,
  "buildCommand": "cd ../.. && yarn install && yarn workspace @cross-platform/mermaid-expo expo export -p web",
  "outputDirectory": "dist",
  "installCommand": "cd ../.. && yarn install",
  "framework": null,
  "devCommand": "expo start --web"
}
```

### For Prompt Expo Web

Create `apps/prompt/expo/vercel.json`:

```json
{
  "version": 2,
  "buildCommand": "cd ../.. && yarn install && yarn workspace @cross-platform/prompt-expo expo export -p web",
  "outputDirectory": "dist",
  "installCommand": "cd ../.. && yarn install",
  "framework": null,
  "devCommand": "expo start --web"
}
```

## 🔧 Required Package Updates

Add web-specific dependencies to your Expo apps:

```bash
cd apps/mermaid/expo
yarn add react-dom react-native-web
```

Or I can update the package.json files.

## 📦 Package.json Updates

### Mermaid Expo - Add Web Scripts

```json
{
  "scripts": {
    "dev": "expo start",
    "web": "expo start --web",
    "build:web": "expo export -p web",
    "serve": "npx serve dist"
  }
}
```

## 🧪 Test Locally First

Before deploying, test the web build locally:

```bash
# Terminal 1 - Build for web
cd apps/mermaid/expo
yarn expo export -p web

# Terminal 2 - Serve the build
npx serve dist -p 8000
```

Then open http://localhost:8000

## 🌐 Deployment URLs

You'll have multiple deployment URLs:

| App | Platform | URL Example |
|-----|----------|-------------|
| Mermaid Next.js | Web | `mermaid-web.vercel.app` |
| Mermaid Expo | Web | `mermaid-expo-web.vercel.app` |
| Mermaid Expo | iOS/Android | Via Expo Go or EAS Build |
| Prompt Next.js | Web | `prompt-web.vercel.app` |
| Prompt Expo | Web | `prompt-expo-web.vercel.app` |
| Prompt Expo | iOS/Android | Via Expo Go or EAS Build |

## 🔐 Environment Variables

### In Vercel Dashboard

1. Go to Project Settings → Environment Variables
2. Add your variables:
   ```
   API_URL=https://api.example.com
   PUBLIC_KEY=your-public-key
   ```

### In Expo Code

Access them via `process.env`:

```typescript
const apiUrl = process.env.EXPO_PUBLIC_API_URL;
```

**Important:** Prefix web-accessible env vars with `EXPO_PUBLIC_`

## 🎨 App.json Web Configuration

Update `apps/mermaid/expo/app.json`:

```json
{
  "expo": {
    "name": "Mermaid",
    "slug": "mermaid",
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/favicon.png",
      "build": {
        "babel": {
          "include": ["@gluestack-ui/themed"]
        }
      }
    }
  }
}
```

## 🚨 Common Issues & Solutions

### Issue 1: Build Fails - "Module not found"

**Solution:** Make sure to install from monorepo root:
```json
{
  "buildCommand": "cd ../.. && yarn install && yarn workspace @cross-platform/mermaid-expo expo export -p web"
}
```

### Issue 2: Assets Not Loading

**Solution:** Check asset paths and ensure they're in the `assets/` folder:
```typescript
<Image source={require('./assets/logo.png')} />
```

### Issue 3: Gluestack UI Not Styled

**Solution:** Make sure Babel config includes Gluestack UI:
```javascript
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      '@gluestack-style/react/babel-plugin',
    ],
  };
};
```

### Issue 4: Build Command Times Out

**Solution:** Add to `vercel.json`:
```json
{
  "builds": [{
    "src": "package.json",
    "use": "@vercel/static-build",
    "config": {
      "distDir": "dist",
      "maxDuration": 300
    }
  }]
}
```

## 📊 Comparison: Next.js vs Expo Web

| Feature | Next.js Web | Expo Web |
|---------|-------------|----------|
| **Code Sharing** | Separate codebase | Shares with mobile |
| **Performance** | Excellent (SSR/SSG) | Good (SPA) |
| **SEO** | Excellent | Limited (SPA) |
| **Setup** | More config | Simpler |
| **Routing** | Next.js Router | Expo Router |
| **Best For** | Marketing sites, blogs | Apps, dashboards |

## 🎯 Recommended Strategy

### Strategy 1: Separate Web Apps (Current Setup)

**Use Next.js for:**
- Public-facing websites
- Marketing pages
- Landing pages
- Blogs
- SEO-critical pages

**Use Expo Web for:**
- Authenticated app experiences
- Admin dashboards
- Internal tools
- When you want 100% code reuse

### Strategy 2: Expo Web Only

If you want maximum code reuse:
1. Remove Next.js web folders
2. Use Expo web for everything
3. Deploy to Vercel with the configs above

### Strategy 3: Hybrid (Recommended)

Keep both:
- Next.js for public site (SEO, marketing)
- Expo web for the actual app (after login)
- Share backend utilities via `packages/`

## 📝 Step-by-Step Deployment

### Step 1: Prepare Expo App

```bash
cd apps/mermaid/expo

# Add web dependencies
yarn add react-dom react-native-web

# Test build
yarn expo export -p web

# Verify output
ls dist/
```

### Step 2: Create vercel.json

Use the config provided above.

### Step 3: Push to Git

```bash
git add .
git commit -m "Add Expo web deployment config"
git push
```

### Step 4: Deploy to Vercel

```bash
# Option A: CLI
cd apps/mermaid/expo
vercel

# Option B: Dashboard
# Import via Vercel dashboard
```

### Step 5: Configure Domain (Optional)

In Vercel:
1. Go to Project Settings → Domains
2. Add custom domain: `app.yourdomain.com`
3. Update DNS records as instructed

## 🔧 Advanced Configuration

### Custom Headers

Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### Redirects

```json
{
  "redirects": [
    {
      "source": "/old-path",
      "destination": "/new-path",
      "permanent": true
    }
  ]
}
```

### Rewrites (API Proxy)

```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://api.backend.com/:path*"
    }
  ]
}
```

## 🎨 Metro Bundler Configuration

For better web builds, create `metro.config.js`:

```javascript
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, {
  input: './global.css',
  configPath: './tailwind.config.js',
});
```

## 📱 Progressive Web App (PWA)

Make your Expo web app installable:

1. **Update app.json:**
```json
{
  "expo": {
    "web": {
      "bundler": "metro",
      "favicon": "./assets/favicon.png",
      "themeColor": "#0ea5e9",
      "name": "Mermaid App",
      "shortName": "Mermaid",
      "description": "Mermaid cross-platform app",
      "startUrl": "/"
    }
  }
}
```

2. **Expo automatically generates:**
   - `manifest.json`
   - Service worker
   - Icons at various sizes

## 🚀 Performance Optimization

### 1. Enable Production Minification

Already enabled by default with `expo export -p web`

### 2. Code Splitting

Expo Router does this automatically:
```typescript
// Lazy load heavy screens
const HeavyScreen = lazy(() => import('./screens/Heavy'));
```

### 3. Image Optimization

Use Expo's optimized image component:
```typescript
import { Image } from 'expo-image';

<Image
  source={require('./assets/image.jpg')}
  placeholder={blurhash}
  contentFit="cover"
  transition={1000}
/>
```

### 4. Bundle Analysis

```bash
# Analyze bundle size
yarn expo export -p web --bundle-output
```

## 📊 Monitoring

### Vercel Analytics

Enable in Vercel dashboard for:
- Page views
- Performance metrics
- Core Web Vitals

### Error Tracking

Add Sentry:
```bash
yarn add @sentry/react
```

```typescript
// app/_layout.tsx
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
});
```

## ✅ Pre-Deployment Checklist

- [ ] Test web build locally: `yarn expo export -p web`
- [ ] Add `react-dom` and `react-native-web` dependencies
- [ ] Create `vercel.json` with correct paths
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Test mobile responsive design
- [ ] Set up environment variables in Vercel
- [ ] Configure custom domain (if needed)
- [ ] Test error pages (404, 500)
- [ ] Enable Vercel Analytics
- [ ] Set up error monitoring

## 🎉 Example Deployments

### Mermaid Expo Web

```bash
cd apps/mermaid/expo
vercel --prod
```

**Result:** `https://mermaid-expo.vercel.app`

### Prompt Expo Web

```bash
cd apps/prompt/expo
vercel --prod
```

**Result:** `https://prompt-expo.vercel.app`

## 📚 Resources

- [Expo Web Documentation](https://docs.expo.dev/workflow/web/)
- [Vercel Deployment](https://vercel.com/docs)
- [Metro Bundler](https://facebook.github.io/metro/)
- [React Native Web](https://necolas.github.io/react-native-web/)

## 🆘 Need Help?

1. Check Vercel deployment logs
2. Run `expo doctor` for Expo issues
3. Test build locally first
4. Check this guide's troubleshooting section

---

**You now have a complete guide to deploying Expo web to Vercel!** 🎉

Your architecture:
- **Next.js Web** - Public pages, SEO
- **Expo Web** - App experience, shared with mobile
- **Expo Mobile** - iOS/Android via EAS
- All deployed and managed independently! ✨

