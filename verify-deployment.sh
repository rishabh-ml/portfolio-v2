#!/bin/bash
# Deployment verification script

echo "🔍 Verifying deployment readiness..."

# Check if Next.js is installed
if npm list next > /dev/null 2>&1; then
    echo "✅ Next.js is properly installed"
else
    echo "❌ Next.js not found in dependencies"
    exit 1
fi

# Check if build works
echo "🏗️ Testing build..."
if npm run build > /dev/null 2>&1; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

# Check key files exist
if [ -f "package.json" ] && [ -f "next.config.ts" ] && [ -f "tsconfig.json" ]; then
    echo "✅ Required configuration files present"
else
    echo "❌ Missing required configuration files"
    exit 1
fi

echo "🚀 Project is ready for deployment!"
