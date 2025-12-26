---
description: How to deploy the portfolio to Netlify
---

# Deploying your Portfolio to Netlify

Follow these steps to get your portfolio live on Netlify with continuous deployment.

## 1. Prepare your Repository
Netlify works best when your code is in a Git repository (GitHub, GitLab, or Bitbucket).

1.  **Initialize Git** (if not already done):
    ```bash
    git init
    git add .
    git commit -m "Initial commit for portfolio"
    ```
2.  **Create a new repository** on GitHub.
3.  **Push your code** to GitHub.

## 2. Connect to Netlify
1.  Log in to [Netlify](https://app.netlify.com/).
2.  Click **"Add new site"** > **"Import an existing project"**.
3.  Select **GitHub** and pick your repository.

## 3. Configure Build Settings
Netlify should automatically detect Next.js:
- **Build command**: `npm run build`
- **Publish directory**: `.next`

## 4. Set Environment Variables (IMPORTANT)
For your contact form to work, set these in **Site configuration** > **Environment variables**:
- `GMAIL_PASSKEY`: Your Gmail app password.
- `EMAIL_ADDRESS`: The email address receiving messages.

## 5. Deploy
Click **"Deploy site"**. Netlify will build and deploy your site!
