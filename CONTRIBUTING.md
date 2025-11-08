# Contributing Guide

## 🏗️ Project Structure

This is a Turborepo monorepo with Yarn 4 workspaces.

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd cross-platform
```

2. **Install dependencies**
```bash
corepack enable
yarn install
```

3. **Start development**
```bash
# All apps
yarn dev

# Specific app
yarn workspace @cross-platform/mermaid-web dev
```

## 📝 Development Workflow

### Adding Features

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Test locally: `yarn test`
4. Lint: `yarn lint`
5. Type check: `yarn type-check`
6. Commit and push
7. Create a Pull Request

### Adding Dependencies

```bash
# To root (monorepo-wide dev dependencies)
yarn add -D package-name

# To specific workspace
yarn workspace @cross-platform/mermaid-web add package-name

# To multiple workspaces (shared packages)
# Add manually to each package.json then run:
yarn install
```

### Creating Shared Packages

1. Create directory in `packages/`:
```bash
mkdir -p packages/my-package/src
```

2. Add `package.json`:
```json
{
  "name": "@cross-platform/my-package",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "private": true
}
```

3. Add to workspace automatically (already configured)

4. Use in apps:
```json
{
  "dependencies": {
    "@cross-platform/my-package": "workspace:*"
  }
}
```

## 🧪 Testing

### Unit Tests
```bash
# All tests
yarn test

# Specific package
yarn workspace @cross-platform/shared-utils test

# Watch mode
yarn workspace @cross-platform/shared-utils test --watch
```

### Mobile Testing
```bash
cd apps/mermaid/expo
yarn ios  # iOS Simulator
yarn android  # Android Emulator
```

## 📐 Code Standards

### TypeScript
- Use strict mode
- Define types explicitly for function parameters and returns
- Avoid `any` type

### React/React Native
- Use functional components with hooks
- Keep components small and focused
- Use TypeScript for props

### File Naming
- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Tests: `*.test.ts` or `*.spec.ts`

### Styling
- Run Prettier: `yarn prettier --write .`
- Configuration in `.prettierrc`

## 🏛️ Architecture Decisions

### When to Create a Package
Create a shared package when:
- Code is used by 2+ apps
- Logic is independent and reusable
- You want to version/test it separately

### Expo vs Web Code Sharing
- **Shared**: Business logic, utils, API clients
- **Separate**: UI components, navigation, platform-specific APIs

### Turbo Pipeline
- `build`: Builds the app/package
- `dev`: Starts development server
- `test`: Runs tests
- `lint`: Lints code
- `type-check`: TypeScript validation

## 🐛 Debugging

### Turborepo Cache Issues
```bash
# Clear Turbo cache
rm -rf .turbo
yarn build --force
```

### Yarn Issues
```bash
# Clear yarn cache
yarn cache clean

# Reinstall
rm -rf node_modules
yarn install
```

### Expo Issues
```bash
# Clear Expo cache
cd apps/mermaid/expo
yarn start --clear
```

### Next.js Issues
```bash
# Clear Next.js cache
cd apps/mermaid/web
rm -rf .next
yarn dev
```

## 📦 Building for Production

### All Apps
```bash
yarn build
```

### Specific App
```bash
yarn workspace @cross-platform/mermaid-web build
```

### Check Build Output
```bash
# Web bundle analysis
cd apps/mermaid/web
yarn build
# Check .next/build-manifest.json
```

## 🔄 Git Workflow

1. **main**: Production-ready code
2. **develop**: Integration branch
3. **feature/**: Feature branches
4. **fix/**: Bug fix branches

### Commit Messages
Follow conventional commits:
- `feat: add new feature`
- `fix: resolve bug`
- `docs: update README`
- `chore: update dependencies`
- `refactor: improve code structure`

## 📚 Additional Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Expo Documentation](https://docs.expo.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [Yarn 4 Documentation](https://yarnpkg.com)

