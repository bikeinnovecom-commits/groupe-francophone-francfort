# Showcase Website   5 Pages

## Overview
A French-language showcase website with 5 static pages featuring modern design and responsive layout with a religious-appropriate visual theme. The application supports full editing mode for all frontend `.tsx` files.

## Pages Structure
- **Qui sommes-nous ?** (About Us) - Main landing page
- **Notre vision** (Our Vision) - Company vision page with prominent group Bible study image
- **Notre mission** (Our Mission) - Company mission page with street prayer image in hero section
- **Nos projets** (Our Projects) - Projects showcase page with office setup image
- **Guide** (Guide) - Visual tutorial page explaining how to modify the website

## Design Requirements
- Ultra-light, subtle yellow background across all pages for an airy, serene ambiance (even softer than the current very pale yellow)
- Simple, clean, and uniform background suitable for a religious site
- Dark blue transparent buttons for navigation and calls to action with hover effects for greater visibility
- Clean and modern responsive layout
- Consistent header with navigation menu linking all pages
- Consistent footer across all pages
- All text and components (headers, cards, and buttons) must maintain proper contrast and legibility on the ultra-light yellow background

## Navigation
- Header navigation menu with links to all 5 pages (including new Guide page)
- Active page highlighting in navigation
- Mobile-responsive navigation (hamburger menu for small screens)

## Content
- All content in French language
- Static content for each page (placeholder text can be used initially)
- Professional and modern presentation

## Page-Specific Image Integration
- **Notre mission page**: Display the street prayer image in the hero or main section
- **Notre vision page**: Show the group Bible study image prominently near the central message
- **Nos projets page**: Include the office setup image (`projects-showcase.dim_1024x768.jpg`) aligned with project description content
- **Qui sommes-nous page or community sections**: Add the team photo (`team-photo.dim_800x600.jpg`) to provide sense of community and fellowship
- **Guide page**: Include tutorial screenshots and icons for visual explanations

## Guide Page Requirements
- Clear, step-by-step visual tutorial in French explaining:
  1. **Remplacer une photo**: Show example with `MissionPage.tsx` and `street-prayer.jpg` image replacement
  2. **Modifier un texte**: Display code excerpt showing how to modify paragraph text
  3. **Changer une couleur**: Explain where to modify `background-color` property in `index.css`
- Each step must include:
  - Screenshot placeholder or relevant icon
  - Short explanatory text in French
  - "Conseil" box with optional tips
- "Retour à l'accueil" button at the bottom for navigation back to home page
- Same styling as other pages (light yellow background, dark blue transparent buttons)

## Full Editing Mode Requirements
- Enable complete editing capabilities for all frontend `.tsx` files
- Specifically support full editing mode for:
  - `AboutPage.tsx` (Qui sommes-nous page)
  - `MissionPage.tsx` (Notre mission page)
  - `VisionPage.tsx` (Notre vision page)
  - `ProjectsPage.tsx` (Nos projets page)
- Preserve all existing structure, styles, and data
- Maintain all current images, colors, and text content
- Ensure editing mode does not break existing functionality or design

## Image Requirements
- All images must be well integrated with proper margins and spacing
- Responsive design ensuring images display appropriately on desktop, tablet, and mobile
- Images should complement the content and maintain the clean, professional aesthetic
- Ensure all requested photos are clearly visible and properly displayed on each designated page
- New images must harmoniously integrate with the softer color scheme

## Technical Requirements
- Responsive design that works on desktop, tablet, and mobile
- Fast loading and smooth navigation between pages
- Cross-browser compatibility
- Update background color in index.css to ultra-light, subtle yellow shade (softer than current very pale yellow)
- Full editing mode compatibility for all frontend components

## Backend Requirements
No backend functionality required - this is a static showcase website.
