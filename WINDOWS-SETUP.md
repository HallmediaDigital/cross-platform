# Windows Setup Guide

Complete guide for setting up this Turborepo on Windows.

## ✅ Setup Complete!

If you're reading this after following the installation steps, **congratulations!** Your environment is ready.

## 🚀 Quick Commands

### Run Web Apps

```powershell
# Mermaid Web (http://localhost:3000)
yarn workspace @cross-platform/mermaid-web dev

# Prompt Web (http://localhost:3001)
yarn workspace @cross-platform/prompt-web dev
```

### Run Mobile Apps

```powershell
# Mermaid Expo
cd apps\mermaid\expo
yarn dev

# Prompt Expo
cd apps\prompt\expo
yarn dev
```

## ⚠️ Common Windows Issues & Solutions

### 1. Corepack Permission Error

**Error:** `EPERM: operation not permitted`

**Solutions:**

**Option A (Recommended):** Run PowerShell as Administrator
1. Right-click PowerShell
2. Select "Run as Administrator"
3. Run: `corepack enable`
4. Navigate to project: `cd C:\dev\cross-platform`
5. Run: `yarn install`

**Option B:** Use npm to install Yarn (no admin needed)
```powershell
npm install -g yarn
cd C:\dev\cross-platform
yarn install
```

### 2. Yarn Binary Not Found

**Error:** `Cannot find module '.yarn\releases\yarn-4.0.0.cjs'`

**Solution:** Download Yarn 4 manually
```powershell
# Create directory
New-Item -ItemType Directory -Force -Path .yarn\releases

# Download Yarn 4
Invoke-WebRequest -Uri "https://github.com/yarnpkg/berry/raw/@yarnpkg/cli/4.0.0/packages/yarnpkg-cli/bin/yarn.js" -OutFile ".yarn\releases\yarn-4.0.0.cjs"

# Install
yarn install
```

### 3. PowerShell Execution Policy

**Error:** Script execution is disabled

**Solution:**
```powershell
# Run as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 4. Long Path Issues

**Error:** Path too long

**Solution:** Enable long paths in Windows
```powershell
# Run as Administrator
New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force
```

Or use shorter paths:
```powershell
cd C:\dev\cross-platform
```

### 5. Git Line Endings

**Warning:** CRLF vs LF warnings

**Solution:**
```powershell
git config --global core.autocrlf false
```

## 🔧 Development Workflow

### 1. Start Development

```powershell
# All apps
yarn dev

# Specific web app
yarn workspace @cross-platform/mermaid-web dev

# Specific Expo app
cd apps\mermaid\expo
yarn dev
```

### 2. Build for Production

```powershell
# Build everything
yarn build

# Build specific app
yarn workspace @cross-platform/mermaid-web build
```

### 3. Run Tests

```powershell
# All tests
yarn test

# Specific package
yarn workspace @cross-platform/shared-utils test
```

## 📱 Expo Development

### Install Expo Go

1. iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)
2. Android: [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Start Expo App

```powershell
cd apps\mermaid\expo
yarn dev
```

Scan the QR code with your phone to open the app.

### Clear Expo Cache

```powershell
cd apps\mermaid\expo
yarn start --clear
```

## 🌐 Web Development

### Start Next.js App

```powershell
# Mermaid (port 3000)
yarn workspace @cross-platform/mermaid-web dev

# Prompt (port 3001)
yarn workspace @cross-platform/prompt-web dev
```

### Open in Browser

- Mermaid: http://localhost:3000
- Prompt: http://localhost:3001

## 💡 Windows-Specific Tips

### 1. Use Windows Terminal

Download [Windows Terminal](https://aka.ms/terminal) for better experience:
- Tabs support
- Better colors
- Copy/paste works better

### 2. Use VS Code

Install [VS Code](https://code.visualstudio.com/) with extensions:
- **ESLint** - Linting
- **Prettier** - Formatting
- **Tailwind CSS IntelliSense** - Tailwind autocomplete
- **ES7+ React/Redux/React-Native snippets** - Snippets

### 3. Path Separators

PowerShell commands use backslash (`\`):
```powershell
cd apps\mermaid\expo
```

Bash/Git Bash use forward slash (`/`):
```bash
cd apps/mermaid/expo
```

### 4. Kill Processes on Ports

If a port is in use:

```powershell
# Find process
netstat -ano | findstr :3000

# Kill process (replace PID with actual number)
taskkill /PID <PID> /F
```

### 5. Environment Variables

Set environment variables for current session:
```powershell
$env:NODE_ENV = "development"
```

Or create `.env.local` file in app directory.

## 🐛 Debugging

### Check Node Version

```powershell
node --version  # Should be 18+
```

### Check Yarn Version

```powershell
yarn --version  # Should be 4.x
```

### Check Git Status

```powershell
git status
```

### View Installed Workspaces

```powershell
yarn workspaces list
```

## 📊 Performance Tips

### 1. Exclude from Windows Defender

Add to exclusions (improves install speed):
- `C:\dev\cross-platform\node_modules`
- `C:\dev\cross-platform\.yarn`

### 2. Use SSD

Store project on SSD, not HDD.

### 3. Close Other Apps

Free up RAM when running Metro bundler.

## 🎯 Next Steps

1. ✅ Setup complete
2. 📚 Read [GLUESTACK-NATIVEWIND-GUIDE.md](./GLUESTACK-NATIVEWIND-GUIDE.md)
3. 🎨 Customize your apps
4. 🚀 Deploy (see [DEPLOYMENT.md](./DEPLOYMENT.md))

## 📚 Resources

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Expo](https://docs.expo.dev/)
- [Next.js](https://nextjs.org/docs)
- [Gluestack UI](https://gluestack.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NativeWind](https://www.nativewind.dev/)

## 🆘 Still Having Issues?

1. Check [QUICKSTART.md](./QUICKSTART.md) troubleshooting section
2. Check [GitHub Issues](https://github.com/yarnpkg/berry/issues) for Yarn issues
3. Clear all caches and reinstall:
   ```powershell
   rm -r node_modules,.yarn\cache,.turbo,.next,.expo
   yarn install
   ```

---

**Happy coding on Windows!** 🎉

