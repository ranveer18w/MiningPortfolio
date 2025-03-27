# Deploying to GitHub Pages

This document explains how to deploy this portfolio website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Basic knowledge of Git commands

## Deployment Steps

1. Create a new GitHub repository (or use an existing one)

2. Build the application for production:
   ```
   npm run build
   ```

3. Run the deployment script to prepare files for GitHub Pages:
   ```
   bash deploy-github.sh
   ```

4. Initialize a Git repository (if you haven't already):
   ```
   git init
   ```

5. Add all the necessary files to Git:
   ```
   git add index.html
   git add dist/
   git add attached_assets/ # if you have any assets
   ```

6. Commit your changes:
   ```
   git commit -m "Initial GitHub Pages deployment"
   ```

7. Link your local repository to your GitHub repository:
   ```
   git remote add origin https://github.com/your-username/your-repository-name.git
   ```

8. Push your changes:
   ```
   git push -u origin main
   ```
   (Use `master` instead of `main` if your default branch is `master`)

9. Configure GitHub Pages:
   - Go to your GitHub repository
   - Click on "Settings"
   - Scroll down to the "GitHub Pages" section
   - Select the branch you just pushed (main or master) as the source
   - Click "Save"

10. Wait a few minutes for GitHub to build and deploy your site
    - Your site will be available at `https://your-username.github.io/your-repository-name/`

## Updating the Website

To update your website:

1. Make your changes to the code
2. Rebuild the application: `npm run build`
3. Run the deployment script: `bash deploy-github.sh`
4. Commit and push your changes
5. GitHub Pages will automatically update your site

## File Structure for GitHub Pages

The important files for GitHub Pages deployment are:

- `index.html` (in the root directory)
- `dist/` directory containing all built assets
- Any other assets referenced by the application

## Troubleshooting

If your site doesn't appear or styles are missing:

1. Check the browser console for errors
2. Make sure all paths in `index.html` are using relative paths (starting with `./`)
3. Verify that GitHub Pages is properly configured in your repository settings