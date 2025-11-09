# Run this script to start Expo Web with full output

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Starting Expo Web for Mermaid App" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Navigate to the app directory
Set-Location C:\dev\cross-platform\apps\mermaid\expo

Write-Host "📍 Current directory: $PWD" -ForegroundColor Yellow
Write-Host ""

Write-Host "🚀 Starting Expo web server..." -ForegroundColor Green
Write-Host "   This may take 30-60 seconds for first build" -ForegroundColor Gray
Write-Host ""

# Start Expo
npx expo start --web --port 8081


