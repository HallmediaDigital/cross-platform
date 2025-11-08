# Start Expo Web - Troubleshooting Guide

## 🚀 Quick Start (Choose One)

### Option 1: Simple Command
```powershell
cd C:\dev\cross-platform\apps\mermaid\expo
yarn web
```

### Option 2: Direct npx
```powershell
cd C:\dev\cross-platform\apps\mermaid\expo
npx expo start --web
```

### Option 3: With Specific Port
```powershell
cd C:\dev\cross-platform\apps\mermaid\expo
npx expo start --web --port 8081
```

## 📋 What You Should See

After running the command, you should see:

```
Starting Metro Bundler
› Metro waiting on exp://192.168.x.x:8081

› Web is waiting on http://localhost:8081

› Press a │ open Android
› Press w │ open web
› Press r │ reload app
```

**Look for the line that says "Web is waiting on..."** - that's your URL!

## 🐛 Common Errors & Solutions

### Error 1: "Cannot find module 'webpack'"

**Solution:**
```powershell
cd C:\dev\cross-platform\apps\mermaid\expo
yarn add --dev @expo/webpack-config webpack-dev-server webpack
```

### Error 2: "Port 8081 already in use"

**Solution:**
```powershell
# Find what's using the port
netstat -ano | findstr :8081

# Kill it (replace <PID> with the number from above)
taskkill /PID <PID> /F

# Or use a different port
npx expo start --web --port 8082
```

### Error 3: "Module not found: Error: Can't resolve 'react-native-web'"

**Solution:**
```powershell
cd C:\dev\cross-platform\apps\mermaid\expo
yarn add react-native-web react-dom
```

### Error 4: Blank page or "Loading..."

**Check browser console (F12)** for errors, then:

```powershell
# Clear caches
cd C:\dev\cross-platform\apps\mermaid\expo
npx expo start --web --clear
```

## 🔍 Debugging Steps

### Step 1: Check Installation
```powershell
cd C:\dev\cross-platform\apps\mermaid\expo
npx expo --version
# Should show: 0.22.x or similar
```

### Step 2: Verify Dependencies
```powershell
# Check if package exists
ls node_modules\react-native-web
ls node_modules\react-dom
```

### Step 3: Check Metro Bundler
```powershell
# Start without web to see if Expo itself works
npx expo start
# Press 'w' when it starts to open web
```

### Step 4: Test with Clear Cache
```powershell
npx expo start --web --clear
```

## 📝 If Still Not Working

Try reinstalling everything:

```powershell
# Go to project root
cd C:\dev\cross-platform

# Clean install
rm -r node_modules
yarn install

# Go back to Expo app
cd apps\mermaid\expo

# Try again
yarn web
```

## 🎯 Alternative: Use Expo Go on Phone

If web still doesn't work, you can test on mobile:

```powershell
cd C:\dev\cross-platform\apps\mermaid\expo
yarn start
# Scan QR code with Expo Go app on your phone
```

## ✅ Success Checklist

- [ ] Command runs without errors
- [ ] See "Web is waiting on http://localhost:XXXX"
- [ ] Browser opens automatically OR
- [ ] Can manually open the URL shown
- [ ] Page loads (might take 30-60 seconds first time)
- [ ] See your app UI

## 🌐 Expected Result

When it works, you should see:
- Mermaid App heading
- "Expo Mobile" and "Gluestack UI" badges
- Welcome card with blue background
- "Get Started" and "Learn More" buttons

## 📱 Comparing Versions

You now have TWO ways to run Mermaid as web:

| Version | Command | Port | URL |
|---------|---------|------|-----|
| **Next.js** | `yarn workspace @cross-platform/mermaid-web dev` | 3000 | http://localhost:3000 |
| **Expo Web** | `cd apps/mermaid/expo && yarn web` | 8081 | http://localhost:8081 |

Both should work independently!

## 🆘 Still Stuck?

**Copy and paste the FULL error message** you see in the terminal.

Common things to check:
- Are you in the correct directory? (`C:\dev\cross-platform\apps\mermaid\expo`)
- Did `yarn install` complete successfully?
- Is another process using port 8081?
- Do you have firewall blocking localhost?

## 💡 Quick Test

Try this single command that does everything:

```powershell
cd C:\dev\cross-platform && yarn install && cd apps\mermaid\expo && npx expo start --web --port 8081
```

If this works, the URL will be shown in the output!

