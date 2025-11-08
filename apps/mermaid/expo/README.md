# Mermaid Mobile App

Expo app for Mermaid.

## Development

```bash
# Start dev server
yarn dev

# iOS Simulator
yarn ios

# Android Emulator
yarn android
```

## Building

```bash
# Development build
eas build --profile development --platform ios

# Production build
eas build --profile production --platform all
```

## Deployment

See [DEPLOYMENT.md](../../../DEPLOYMENT.md) for detailed instructions.

## Assets

Place your app assets in the `assets/` directory:
- `icon.png` - App icon (1024x1024)
- `splash.png` - Splash screen (1284x2778)
- `adaptive-icon.png` - Android adaptive icon (1024x1024)
- `favicon.png` - Web favicon (48x48)

## Configuration

Edit `app.json` to customize:
- App name and slug
- Bundle identifiers
- Orientation
- Permissions
- Plugins

