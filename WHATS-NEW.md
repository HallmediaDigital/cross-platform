# What's New - Gluestack UI + NativeWind Setup

This monorepo has been updated to include **Gluestack UI** and **NativeWind** for a unified cross-platform UI experience!

## 🎨 What Changed

### ✨ New Features

1. **Gluestack UI Integration**
   - Universal UI components that work on React Native and Web
   - Pre-built, accessible components (Button, Card, Input, etc.)
   - Consistent design system across all apps

2. **NativeWind (Tailwind for React Native)**
   - Use Tailwind CSS utility classes in Expo apps
   - Same styling approach for mobile and web
   - Responsive design utilities

3. **Tailwind CSS for Web Apps**
   - Next.js apps now use Tailwind CSS
   - Matching color schemes across platforms
   - Modern, utility-first styling

4. **Shared UI Components Package**
   - `@cross-platform/ui-components` - Reusable components
   - `AppHeader` and `WelcomeCard` example components
   - Easy to extend with your own components

## 📦 Updated Packages

### Expo Apps (Mobile)
```json
{
  "@gluestack-ui/themed": "^1.1.30",
  "@gluestack-style/react": "^1.0.51",
  "nativewind": "^4.0.1",
  "react-native-svg": "15.2.0",
  "tailwindcss": "^3.4.1"
}
```

### Web Apps
```json
{
  "tailwindcss": "^3.4.1",
  "autoprefixer": "^10.4.17",
  "postcss": "^8.4.33"
}
```

## 📁 New Files

### Configuration Files

**Expo Apps:**
- `tailwind.config.js` - Tailwind configuration
- `global.css` - Tailwind directives
- `gluestack-ui.config.ts` - Gluestack UI theme
- `metro.config.js` - Metro bundler config for NativeWind
- `nativewind-env.d.ts` - TypeScript types

**Web Apps:**
- `tailwind.config.ts` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `app/globals.css` - Global styles

### New Package
- `packages/ui-components/` - Shared UI components library

### Documentation
- `GLUESTACK-NATIVEWIND-GUIDE.md` - Complete guide to using the UI libraries

## 🚀 Getting Started

### 1. Install Dependencies

```bash
yarn install
```

### 2. Run the Apps

**Mobile (Expo):**
```bash
cd apps/mermaid/expo
yarn dev
```

**Web (Next.js):**
```bash
yarn workspace @cross-platform/mermaid-web dev
```

### 3. See the Changes

- **Mobile apps** now feature:
  - Beautiful Gluestack UI components
  - Tailwind utility classes via NativeWind
  - Cards, badges, buttons with consistent styling

- **Web apps** now feature:
  - Tailwind CSS styling
  - Responsive design
  - Matching color scheme with mobile

## 💡 Example Usage

### Expo App (Mobile)

```tsx
import { View } from 'react-native';
import {
  Box,
  VStack,
  Heading,
  Button,
  ButtonText,
  Card,
} from '@gluestack-ui/themed';

export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <Box className="p-6">
        <VStack space="xl">
          <Heading size="3xl" className="text-primary-600">
            Hello Gluestack!
          </Heading>
          
          <Card className="p-6 bg-primary-50">
            <Text>Using Gluestack UI + NativeWind</Text>
          </Card>
          
          <Button className="bg-primary-600">
            <ButtonText>Click Me</ButtonText>
          </Button>
        </VStack>
      </Box>
    </View>
  );
}
```

### Web App (Next.js)

```tsx
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="max-w-2xl space-y-8">
        <h1 className="text-6xl font-bold text-primary-600">
          Hello Tailwind!
        </h1>
        
        <div className="bg-primary-50 p-8 rounded-2xl shadow-lg">
          <p className="text-gray-600">Using Tailwind CSS</p>
        </div>
        
        <button className="bg-primary-600 text-white py-3 px-6 rounded-lg">
          Click Me
        </button>
      </div>
    </main>
  );
}
```

## 🎯 Key Benefits

### 1. **Unified Styling Approach**
- Use similar syntax for mobile and web
- Tailwind utilities everywhere
- Easy to learn and maintain

### 2. **Better Developer Experience**
- IntelliSense for Tailwind classes
- Consistent component APIs
- Hot reload works perfectly

### 3. **Production Ready**
- Accessible components out of the box
- Performance optimized
- Well-tested libraries

### 4. **Easy to Customize**
- Extend Tailwind config
- Override Gluestack theme
- Create custom components

## 🔄 Migration Notes

If you had existing apps, here's what changed:

### StyleSheet → NativeWind

**Before:**
```tsx
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
<View style={styles.container} />
```

**After:**
```tsx
<View className="flex-1 p-4" />
```

### Inline Styles → Tailwind

**Before:**
```tsx
<div style={{ display: 'flex', padding: '2rem' }}>
```

**After:**
```tsx
<div className="flex p-8">
```

## 📚 Documentation

- **[GLUESTACK-NATIVEWIND-GUIDE.md](./GLUESTACK-NATIVEWIND-GUIDE.md)** - Complete usage guide
- **[QUICKSTART.md](./QUICKSTART.md)** - Get started in 5 minutes
- **[README.md](./README.md)** - Full project overview

## 🐛 Troubleshooting

### Metro bundler issues

```bash
cd apps/mermaid/expo
yarn start --clear
```

### Tailwind classes not working

1. Check `metro.config.js` includes NativeWind plugin
2. Verify `global.css` is imported in `_layout.tsx`
3. Clear Metro cache

### TypeScript errors

Make sure `nativewind-env.d.ts` is included in `tsconfig.json`:
```json
{
  "include": ["nativewind-env.d.ts"]
}
```

## 🎉 What's Next

Now that you have Gluestack UI and NativeWind set up:

1. **Explore Components**: Check out all [Gluestack UI components](https://gluestack.io/)
2. **Customize Theme**: Edit `tailwind.config.js` for custom colors
3. **Build UI**: Create beautiful, consistent UIs across platforms
4. **Share Components**: Add reusable components to `packages/ui-components/`
5. **Go to Production**: Deploy to EAS and Vercel (see [DEPLOYMENT.md](./DEPLOYMENT.md))

## 📊 Before & After

### Before
- ❌ Different styling approaches (StyleSheet vs CSS)
- ❌ Inconsistent UI across platforms
- ❌ Verbose styling code
- ❌ Hard to maintain design system

### After
- ✅ Unified styling with Tailwind utilities
- ✅ Consistent Gluestack UI components
- ✅ Concise, readable code
- ✅ Easy-to-maintain design system
- ✅ Production-ready components
- ✅ Excellent DX with IntelliSense

---

**Ready to build amazing cross-platform apps?** Start with `GLUESTACK-NATIVEWIND-GUIDE.md`! 🚀

