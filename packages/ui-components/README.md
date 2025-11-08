# UI Components

Shared UI components built with Gluestack UI and NativeWind.

## Usage

```typescript
import { AppHeader, WelcomeCard, Button, ButtonText } from '@cross-platform/ui-components';

export default function MyScreen() {
  return (
    <>
      <AppHeader
        title="My App"
        badges={[
          { text: 'Beta', action: 'warning' },
          { text: 'New', action: 'success', variant: 'outline' }
        ]}
      />
      
      <WelcomeCard
        title="Welcome!"
        description="Get started with your app"
        className="bg-primary-50"
      />
      
      <Button>
        <ButtonText>Click Me</ButtonText>
      </Button>
    </>
  );
}
```

## Available Components

### From Gluestack UI (re-exported)
- Layout: `Box`, `VStack`, `HStack`
- Typography: `Heading`, `Text`
- Forms: `Button`, `Input`, `InputField`
- Data Display: `Card`, `Badge`, `Avatar`, `Divider`, `Spinner`

### Custom Components
- `AppHeader` - Reusable app header with badges
- `WelcomeCard` - Welcome/info card component

## Adding New Components

1. Create component in `src/components/`
2. Export from `src/index.ts`
3. Use in your apps!

