# SSV BD Assistant - Deployment Guide

## Overview

This is the internal Business Development tool for Sherrod Sports Visas with an embedded AI chatbot powered by Claude. The chatbot can:

- Assess visa eligibility (P-1, O-1, EB-1A)
- Provide accurate pricing
- Generate payment/engagement links
- Draft professional emails
- Answer process questions
- Switch between brand contexts (SSV, IGTA, Aventus)

## Folder Structure

```
ssv-bd-chatbot/
├── index.html          # Main application with embedded chatbot
├── rag/                # RAG knowledge files
│   ├── pricing.md      # Pricing reference
│   ├── visa-eligibility.md  # Eligibility criteria
│   ├── links.md        # All payment/engagement links
│   ├── templates.md    # Email templates
│   ├── brands.md       # Brand guide
│   ├── process.md      # Visa process guide
│   └── system-prompt.md # Master system prompt
└── README.md           # This file
```

## Deployment to Netlify

### Option 1: Drag & Drop
1. Go to [netlify.com](https://netlify.com) and log in
2. Drag the entire `ssv-bd-chatbot` folder to the deploy area
3. Done! Your site is live.

### Option 2: Git Deployment
1. Push this folder to a GitHub repository
2. Connect the repo to Netlify
3. Netlify will auto-deploy on every push

### Option 3: Netlify CLI
```bash
npm install -g netlify-cli
cd ssv-bd-chatbot
netlify deploy --prod
```

## Configuration

### 1. Update Lead Sheet Link
In `index.html`, find this line and replace with your actual Google Sheet URL:
```html
<a href="https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit" target="_blank" ...>
```

### 2. API Key
The chatbot requires an Anthropic API key. Users enter this on first use, and it's stored locally in their browser (never sent to your server).

To get an API key:
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create an account or log in
3. Generate an API key
4. Enter it in the app

## How the RAG Works

The knowledge is embedded directly in the JavaScript as the `RAG_KNOWLEDGE` object. This keeps everything self-contained for simple Netlify deployment.

If you want to update the knowledge:

1. Edit the relevant `.md` file in the `rag/` folder
2. Copy the updated content into the corresponding section of `RAG_KNOWLEDGE` in `index.html`
3. Redeploy

### RAG Sections:
- `pricing` - All pricing information
- `links` - Payment and engagement links
- `eligibility` - Visa requirements and criteria
- `process` - How the visa process works
- `brands` - Brand-specific information
- `templates` - Email templates

## Features

### Brand Selector
Click SSV, IGTA, or Aventus to switch contexts. The chatbot will adjust its responses accordingly.

### Quick Actions
Pre-built prompts for common tasks:
- P-1 Eligibility check
- O-1 Eligibility check
- Generate pricing links
- Draft follow-up email
- FRM special pricing info
- P-1 vs O-1 comparison

### Quick Pricing Cards
Click any pricing card to copy the complete link block to clipboard:
- P-1 Standard ($6,000)
- P-1 FRM ($4,000)
- O-1 Standard ($8,000)
- O-1 + Petitioner ($10,000)
- EB-1A ($8,000)
- Petitioner Only ($2,000)

### Key Resources
Quick links to:
- Intake Form
- Consultation Booking
- Knowledge Hub
- SSV Website
- IGTA Website

## Customization

### Change the System Prompt
Edit the `SYSTEM_PROMPT` constant in the JavaScript to modify the chatbot's behavior.

### Add New Quick Actions
Add more buttons in the `.quick-actions` div:
```html
<button class="quick-action-btn" onclick="quickAction('Your prompt here')">
    <i class="fas fa-icon"></i> Button Label
</button>
```

### Change Styling
All CSS is inline in the `<style>` tag. Key color variables:
- Primary: `#00d4ff` (cyan)
- Success: `#28a745` (green)
- Background: `#1a1a2e` to `#16213e` gradient

## Security Notes

1. **API Key Storage**: Stored in browser's localStorage only. Never transmitted to your server.
2. **Internal Use Only**: This tool is designed for your BD team, not public-facing.
3. **No Backend**: Everything runs client-side for simplicity.

## Troubleshooting

### "API Error" Messages
- Check that the API key is correct
- Ensure you have credits in your Anthropic account
- Check browser console for detailed errors

### Chatbot Not Responding
- Verify API key is saved
- Check internet connection
- Try refreshing the page

### Links Not Copying
- Ensure you're clicking the pricing cards
- Check browser clipboard permissions

## Support

For questions about:
- **The visa process**: Ask the chatbot!
- **Technical issues**: Check browser console for errors
- **Deployment**: See Netlify documentation

---

Built for Sherrod Sports Visas BD Team
"We solve problems for the best athletes, coaches, and organizations in the world"
