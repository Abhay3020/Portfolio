#!/bin/bash

# Portfolio Deployment Helper Script
# This script will guide you through deploying your portfolio

echo "🚀 Portfolio Deployment Helper"
echo "=============================="
echo ""

# Check if remote is set
if git remote | grep -q "origin"; then
    echo "✅ Git remote is configured"
    echo "   Remote URL: $(git remote get-url origin)"
    echo ""
    
    # Deploy to GitHub Pages
    echo "📦 Building and deploying to GitHub Pages..."
    npm run deploy
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Deployment successful!"
        REPO_URL=$(git remote get-url origin)
        USERNAME=$(echo $REPO_URL | sed -n 's/.*github.com[:/]\([^/]*\)\/.*/\1/p')
        echo "🌐 Your portfolio is live at: https://$USERNAME.github.io/portfolio-react/"
    else
        echo "❌ Deployment failed. Please check the errors above."
    fi
else
    echo "⚠️  Git remote not configured yet!"
    echo ""
    echo "To deploy, you need to:"
    echo "1. Create a GitHub repository named 'portfolio-react'"
    echo "2. Run these commands:"
    echo ""
    echo "   git remote add origin https://github.com/YOUR_USERNAME/portfolio-react.git"
    echo "   git push -u origin main"
    echo "   npm run deploy"
    echo ""
    echo "📖 See QUICK_START.md for detailed instructions"
fi

echo ""
echo "📚 Need help? Check:"
echo "   - QUICK_START.md (fastest setup)"
echo "   - DEPLOYMENT.md (detailed guide)"
echo "   - README.md (full documentation)"

