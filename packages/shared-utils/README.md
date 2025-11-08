# Shared Utils

Shared utility functions used across apps.

## Usage

```typescript
import { formatDate, capitalize } from '@cross-platform/shared-utils';

const today = formatDate(new Date());
const title = capitalize('hello world');
```

## Development

```bash
# Build
yarn build

# Watch mode
yarn dev

# Test
yarn test
```

## Adding to Apps

Already configured! Just import and use:

```json
{
  "dependencies": {
    "@cross-platform/shared-utils": "workspace:*"
  }
}
```

## Testing

Create test files alongside source files:

```
src/
  index.ts
  index.test.ts
```

Run tests:
```bash
yarn test
```

