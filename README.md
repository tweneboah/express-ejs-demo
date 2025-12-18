# Express.js with EJS

A simple Express.js application using EJS as the template engine.

## Installation

Install dependencies:
```bash
npm install
```

## Running the Application

Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Deployment

This project includes a GitHub Actions workflow that automatically deploys to Render when code is pushed to the `main` branch.

### Setup Render Deployment

1. Create a web service on [Render](https://render.com)
2. Connect your GitHub repository
3. Get your Render webhook URL from the service settings
4. Add the webhook URL as a GitHub secret:
   - Go to your repository settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `RENDER_WEBHOOK_URL`
   - Value: Your Render webhook URL

The workflow will:
- Install dependencies
- Verify the app starts correctly
- Trigger deployment on Render

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment workflow
├── app.js              # Main Express application file
├── views/              # EJS templates
│   └── welcome.ejs     # Welcome page template
├── package.json        # Project dependencies
└── README.md           # This file
```

