#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Create dist directory if it doesn't exist
mkdir -p dist

# Copy assets to root directory for GitHub Pages
echo "Preparing files for GitHub Pages deployment..."
cp -r dist/public/* dist/

echo "Your project is now ready for GitHub Pages!"
echo "Make sure to push the following to your repository:"
echo "- index.html"
echo "- dist/ directory"
echo "- assets/ directory (if any)"

echo "Done!"