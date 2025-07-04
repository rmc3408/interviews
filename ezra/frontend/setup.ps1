# Setup Script for Tasks Frontend

Write-Host "🚀 Setting up Tasks Frontend..." -ForegroundColor Green

# Check if Node.js is installed
$nodeVersion = node --version 2>$null
if ($?) {
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "❌ Node.js is not installed. Please install Node.js 18+ first." -ForegroundColor Red
    exit 1
}

# Check if npm is installed
$npmVersion = npm --version 2>$null
if ($?) {
    Write-Host "✅ npm version: $npmVersion" -ForegroundColor Green
} else {
    Write-Host "❌ npm is not installed." -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dependencies installed successfully!" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to install dependencies." -ForegroundColor Red
    exit 1
}

# Create environment file if it doesn't exist
if (!(Test-Path ".env.local")) {
    Write-Host "📝 Creating .env.local file..." -ForegroundColor Yellow
    Copy-Item "env.example" ".env.local"
    Write-Host "✅ Created .env.local file. Please update it with your Firebase configuration." -ForegroundColor Green
    Write-Host "🔧 Edit .env.local with your Firebase config before running the app." -ForegroundColor Cyan
} else {
    Write-Host "✅ .env.local already exists." -ForegroundColor Green
}

Write-Host ""
Write-Host "🎉 Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Update .env.local with your Firebase configuration" -ForegroundColor White
Write-Host "2. Make sure your .NET API is running (https://localhost:7000)" -ForegroundColor White
Write-Host "3. Run 'npm run dev' to start the development server" -ForegroundColor White
Write-Host ""
Write-Host "🔥 Ready to code!" -ForegroundColor Green
