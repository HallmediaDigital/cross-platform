# Gluestack UI + NativeWind Guide

This monorepo uses **Gluestack UI** for universal components and **NativeWind** for Tailwind CSS styling in React Native.

## 🎨 What's Included

### Gluestack UI
- Universal UI library that works on React Native and Web
- Pre-built accessible components
- Consistent design system
- Themeable and customizable

### NativeWind
- Tailwind CSS for React Native
- Use familiar Tailwind utility classes
- Consistent styling across platforms
- Works with Expo

## 📦 Packages

### `@cross-platform/ui-components`
Shared UI components built with Gluestack UI:

```typescript
import { AppHeader, WelcomeCard, Button } from '@cross-platform/ui-components';
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
yarn install
```

### 2. Run Expo Apps (Mobile)

```bash
# Mermaid
cd apps/mermaid/expo
yarn dev

# Prompt
cd apps/prompt/expo
yarn dev
```

### 3. Run Web Apps

```bash
# Mermaid Web (port 3000)
yarn workspace @cross-platform/mermaid-web dev

# Prompt Web (port 3001)
yarn workspace @cross-platform/prompt-web dev
```

## 💡 Usage Examples

### Expo Apps (React Native)

```tsx
// apps/mermaid/expo/app/index.tsx
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
            Welcome
          </Heading>
          
          <Card className="p-6 bg-primary-50">
            <Text className="text-gray-600">
              Using Gluestack UI + NativeWind
            </Text>
          </Card>
          
          <Button className="bg-primary-600">
            <ButtonText>Get Started</ButtonText>
          </Button>
        </VStack>
      </Box>
    </View>
  );
}
```

### Web Apps (Next.js + Tailwind)

```tsx
// apps/mermaid/web/app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="max-w-2xl space-y-8">
        <h1 className="text-6xl font-bold text-primary-600">
          Welcome
        </h1>
        
        <div className="bg-primary-50 p-8 rounded-2xl shadow-lg">
          <p className="text-gray-600">
            Using Next.js + Tailwind CSS
          </p>
        </div>
        
        <button className="bg-primary-600 text-white py-3 px-6 rounded-lg">
          Get Started
        </button>
      </div>
    </main>
  );
}
```

## 🎨 Styling Approaches

### Gluestack UI Components + NativeWind Classes

```tsx
<Button size="lg" className="bg-primary-600 mt-4">
  <ButtonText>Submit</ButtonText>
</Button>
```

- `size="lg"` - Gluestack UI prop
- `className="bg-primary-600 mt-4"` - Tailwind classes via NativeWind

### Available Gluestack UI Components

#### Layout
- `Box` - Basic container
- `VStack` - Vertical stack with spacing
- `HStack` - Horizontal stack with spacing
- `Center` - Center content

#### Typography
- `Heading` - Headings (size: xs, sm, md, lg, xl, 2xl, 3xl)
- `Text` - Text component

#### Buttons & Forms
- `Button` - Button component
- `ButtonText` - Text inside buttons
- `Input` - Input field
- `InputField` - Input field component
- `Textarea` - Multiline input

#### Data Display
- `Card` - Card container
- `Badge` - Badge/pill component
- `Avatar` - User avatar
- `Divider` - Horizontal line
- `Spinner` - Loading indicator

#### Feedback
- `Alert` - Alert messages
- `Toast` - Toast notifications
- `Modal` - Modal dialogs

## 🎨 Customizing Theme

### Tailwind Config (Both Expo and Web)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
      },
    },
  },
};
```

### Gluestack UI Config

```ts
// gluestack-ui.config.ts
import { config as defaultConfig } from '@gluestack-ui/config';

export default {
  ...defaultConfig,
  tokens: {
    colors: {
      primary: '#0ea5e9',
      // Add custom colors
    },
  },
};
```

## 📱 Platform-Specific Styling

### Conditional Styles

```tsx
import { Platform } from 'react-native';

<Box className={Platform.select({
  ios: 'pt-12',
  android: 'pt-8',
  web: 'pt-4',
})}>
```

### Using Platform Variants in Tailwind

```tsx
<View className="p-4 md:p-8 lg:p-12">
  {/* Responsive padding */}
</View>
```

## 🔧 Configuration Files

### Expo Apps Structure

```
apps/mermaid/expo/
├── app/
│   ├── _layout.tsx           # GluestackUIProvider here
│   └── index.tsx
├── tailwind.config.js        # Tailwind config
├── babel.config.js           # NativeWind babel plugin
├── gluestack-ui.config.ts    # Gluestack theme
├── global.css                # Tailwind directives
└── nativewind-env.d.ts       # TypeScript types
```

### Web Apps Structure

```
apps/mermaid/web/
├── app/
│   ├── layout.tsx            # Import globals.css
│   ├── page.tsx
│   └── globals.css           # Tailwind directives
├── tailwind.config.ts        # Tailwind config
└── postcss.config.js         # PostCSS config
```

## 🚨 Common Issues

### NativeWind classes not working in Expo

1. Clear Metro cache:
```bash
yarn start --clear
```

2. Verify `babel.config.js`:
```js
plugins: ['nativewind/babel']
```

3. Check `global.css` is imported in `_layout.tsx`

### Gluestack UI components not styled

1. Ensure `GluestackUIProvider` wraps your app:
```tsx
<GluestackUIProvider config={config}>
  <App />
</GluestackUIProvider>
```

2. Verify `gluestack-ui.config.ts` is present

### TypeScript errors with className

Add `nativewind-env.d.ts`:
```ts
/// <reference types="nativewind/types" />
```

## 📚 Resources

- [Gluestack UI Docs](https://gluestack.io/)
- [NativeWind Docs](https://www.nativewind.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Expo Router Docs](https://docs.expo.dev/router/introduction/)

## 🎯 Best Practices

### 1. Use Shared Components

Create reusable components in `packages/ui-components/`:

```tsx
// packages/ui-components/src/components/MyButton.tsx
export function MyButton({ children, ...props }) {
  return (
    <Button className="bg-primary-600" {...props}>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
}
```

### 2. Consistent Color Palette

Define colors in `tailwind.config.js` for both platforms:

```js
colors: {
  primary: { ... },
  secondary: { ... },
  accent: { ... },
}
```

### 3. Responsive Design

Use Tailwind breakpoints:

```tsx
<Box className="p-4 md:p-8 lg:p-12">
  <Heading size="2xl" className="md:text-4xl lg:text-5xl">
    Responsive Heading
  </Heading>
</Box>
```

### 4. Component Composition

Combine Gluestack components:

```tsx
<Card className="p-6">
  <VStack space="md">
    <HStack space="sm" className="items-center">
      <Avatar />
      <Heading>User Name</Heading>
    </HStack>
    <Divider />
    <Text>User bio...</Text>
  </VStack>
</Card>
```

## 🔄 Migration Tips

### From StyleSheet to NativeWind

Before:
```tsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

<View style={styles.container}>
```

After:
```tsx
<View className="flex-1 p-4 bg-white">
```

### From Inline Styles to Tailwind (Web)

Before:
```tsx
<div style={{ display: 'flex', padding: '2rem', fontSize: '1.5rem' }}>
```

After:
```tsx
<div className="flex p-8 text-2xl">
```

## 🎨 Example Gallery

See working examples in:
- `apps/mermaid/expo/app/index.tsx` - Gluestack UI + NativeWind
- `apps/prompt/expo/app/index.tsx` - Input form example
- `apps/mermaid/web/app/page.tsx` - Tailwind CSS web app
- `apps/prompt/web/app/page.tsx` - Form on web

Happy styling! 🎉

