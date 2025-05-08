# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a personal portfolio website for Matt Mejia, an Electrical Engineering student. The website has a minimalist design with a home page and a portfolio page.

## Project Structure
- `index.html` - The main homepage
- `portfolio.html` - The portfolio page (currently minimal)
- `style.css` - Styles for the homepage
- `portfolio_style.css` - Styles for the portfolio page
- `script.js` - JavaScript file (currently empty)
- `images/` - Directory containing background images and social media icons
- `videos/` - Directory containing video content

## Development

### Serving the Website Locally
Since this is a static HTML/CSS website, you can serve it locally using any simple HTTP server:

```bash
# Using Python (if installed)
python -m http.server

# Or using Node.js (if installed)
npx serve
```

### Deployment
This website appears to be deployed via GitHub Pages as indicated by the presence of a CNAME file.

## Design Notes
- The website uses the Poppins font family from Google Fonts
- Responsive design is implemented with media queries for screens smaller than 1000px
- The main page features a fixed background image with social media links
- Navigation between pages is done through buttons in the header