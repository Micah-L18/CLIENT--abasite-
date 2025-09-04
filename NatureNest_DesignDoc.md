# Nature Nest Pediatric Therapy – Design Document

## 1. Brand Overview
- **Name:** Nature Nest Pediatric Therapy
- **Mission:** Nurturing each child’s growth through compassionate, evidence-based pediatric therapy in a warm, nature-inspired environment.
- **Logo:** Use `REF/logo.png` as the primary brand mark.

## 2. Visual Identity

### Color Palette (Boho Vibe)
- Earthy tones: Terracotta, sage green, mustard yellow, muted peach, soft cream, dusty blue.
- Accent colors: Deep forest green, clay brown, blush pink.

### Typography
- Headings: Handwritten or soft serif font (boho, friendly, approachable).
- Body: Clean sans-serif for readability.

### Imagery
- Nature motifs: Leaves, branches, flowers, birds, nests.
- Soft, organic shapes and backgrounds.
- Avoid harsh lines and bright/neon colors.

## 3. Website Structure

### Tabs & Sections

#### Home
*Description:*
includes pretty much all the things that are in the website

include this paragraph near the top
    Empowering children and families through individualized, evidence based therapy in a nuturing enviroment 

include 

our services 

visit our clinic

trusted resources

#### Services
*Description:*

- ABA Therapy
- Speech Language pathology
- Speech Therapy
- Occupational Therapy
- Early on
- Telehealth

#### Students
*Description:*

student opprotunities to gain experiience with each service, they can apply for

#### Career
*Description:*

Join our team page

#### About
*Description:*

About Nurure Nest
- our story
- our values
- clinic Gallery

#### Contact Us
*Description:*
standard contact us page 
- send us a message
- get in touch (contact info)
- office hours
- in home hours
- why choose us?

## 4. User Experience
- Warm, welcoming, and calming feel.
- Easy navigation, clear calls to action.
- Mobile-friendly design.

## 5. Accessibility
- High contrast for text.
- Alt text for all images (including logo).
- Simple language.

## 6. Technical Notes
- Use `REF/logo.png` for all branding.
- Do not use other images from the `REF` folder.
- Reference Roots Children's Center for layout and tone, but maintain unique boho/nature aesthetic.


## 7. Technologies
- **Frontend:** React.js with React Router for navigation
- **Styling:** CSS with custom properties (CSS variables) for consistent theming
- **Build Tool:** Create React App
- **Future Backend:** API-ready architecture with service layer
- **Deployment Ready:** Structured for easy hosting and CI/CD integration

## 8. Project Structure
```
app/
├── public/
│   └── assets/
│       └── logo.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx & Home.css
│   │   ├── Services.jsx & Services.css
│   │   ├── Students.jsx & Students.css
│   │   ├── Career.jsx & Career.css
│   │   ├── About.jsx & About.css
│   │   └── Contact.jsx & Contact.css
│   ├── services/
│   │   └── api.js (ready for backend integration)
│   ├── styles/
│   │   ├── variables.css
│   │   └── global.css
│   └── App.js
``` React
- Tailwind