# Nurture Nest Pediatric Therapy Website - Instructions

## Getting Started

### Prerequisites
- **Node.js** version 20.19+ or 22.12+ (currently using 20.18.0 which may show warnings)
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)

### Initial Setup

1. **Navigate to the app directory:**
   ```bash
   cd path to project/abasite/app
   ```

2. **Install all dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   - The website will be available at `http://localhost:5173` (or next available port)
   - The server will automatically reload when you make changes

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## Website Structure

```
app/src/
├── App.jsx                 # Main app component with routing
├── main.jsx               # Entry point
├── index.css              # Base Vite styles
├── components/
│   ├── Header.jsx         # Site navigation header
│   ├── Footer.jsx         # Site footer with contact info
│   └── ScrollToTop.jsx    # Auto-scroll to top on page change
├── pages/
│   ├── Home.jsx           # Homepage
│   ├── About.jsx          # About page
│   ├── Services.jsx       # Services page
│   ├── Students.jsx       # Students opportunities page
│   ├── Career.jsx         # Career/jobs page
│   └── Contact.jsx        # Contact form and info page
└── styles/
    ├── global.css         # Global styles and button classes
    └── variables.css      # CSS color variables and constants
```

---

## How to Update Content

### 🏠 **Homepage Content** (`src/pages/Home.jsx`)

**Hero Section:**
- **Headline:** Line ~64: `"Welcome to Nurture Nest Pediatric Therapy"`
- **Subtitle:** Line ~70: `"Nurturing each child's growth through..."`
- **Buttons:** Lines 80-95: Hero call-to-action buttons

**Stats Section:**
- **Numbers & Labels:** Lines 100-130: Update statistics (years, families, etc.)

**Services Grid:**
- **Services:** Lines 140-180: Add/edit service cards with icons, titles, descriptions

**Why Choose Us:**
- **Reasons:** Lines 230-260: Update bullet points and descriptions

### 📋 **Services Page** (`src/pages/Services.jsx`)

**Service Cards:**
- **Services Array:** Lines 10-60: Edit service objects with title, description, features, price
- **Add New Service:** Add new object to the services array following the same structure

### 👥 **About Page** (`src/pages/About.jsx`)

**Team Members:**
- **Team Array:** Lines 28-55: Update team member info (name, role, bio, specialties)
- **Company Values:** Lines 5-25: Update core values with title, description, icon

**Story Section:**
- **About Text:** Line 124: Update company founding story and mission

### 🎓 **Students Page** (`src/pages/Students.jsx`)

**Opportunities:**
- **Opportunities Array:** Lines 10-50: Update student placement opportunities
- **Application Steps:** Lines 170-230: Modify the 3-step application process

### 💼 **Career Page** (`src/pages/Career.jsx`)

**Job Listings:**
- **Open Positions:** Lines 5-30: Update job postings with title, type, location, requirements
- **Benefits:** Lines 32-40: Update employee benefits list

### 📞 **Contact Information**

**Contact Details** (`src/pages/Contact.jsx`):
- **Contact Info Array:** Lines 34-55: Update phone, email, address, hours
- **Office Hours:** Lines 545-560: Update office operating hours
- **In-Home Hours:** Lines 580-595: Update in-home service hours

**Footer Contact** (`src/components/Footer.jsx`):
- **Contact Info:** Lines 45-48: Update phone, email, address in footer

---

## Design Customization

### 🎨 **Colors** (`src/styles/variables.css`)

Current color palette:
```css
--color-sage: #9CAF88;           /* Primary green */
--color-forest-green: #355E3B;   /* Dark green for text */
--color-terracotta: #C65D31;     /* Orange accent */
--color-cream: #F7F3E9;          /* Light background */
--color-dusty-blue: #7A9BB8;     /* Blue accent */
--color-peach: #F5B895;          /* Light orange */
--color-clay-brown: #A0522D;     /* Dark orange */
--color-mustard: #E6B800;        /* Yellow accent */
```

**To Change Colors:**
1. Update color values in `src/styles/variables.css`
2. Colors automatically apply throughout the site via CSS variables

### 🔲 **Button Styles** (`src/styles/global.css`)

**Button Classes:**
- `.btn-primary` (lines 52-58): Sage background, white text
- `.btn-secondary` (lines 62-68): Terracotta background, white text
- `.btn:hover` (lines 51-53): Universal white text on hover

**To Customize Buttons:**
- Edit background colors, padding, border radius in global.css
- Hover states automatically apply white text color

### 📱 **Layout & Spacing**

**Container Widths:**
- **Full Width Sections:** `width: '100%'` - spans entire browser width
- **Content Container:** `.container-content` - max-width: 1400px, centered

**Responsive Design:**
- Uses CSS Grid with `repeat(auto-fit, minmax(300px, 1fr))` for automatic responsive columns
- Mobile-friendly breakpoints built into grid system

---

## Navigation & Routing

### 🔗 **Adding New Pages**

1. **Create Page Component:**
   ```jsx
   // src/pages/NewPage.jsx
   function NewPage() {
     return (
       <div className="new-page" style={{ width: '100%' }}>
         {/* Page content */}
       </div>
     );
   }
   export default NewPage;
   ```

2. **Add Route in App.jsx:**
   ```jsx
   // Import the component
   import NewPage from './pages/NewPage';
   
   // Add route in the Routes section
   <Route path="/newpage" element={<NewPage />} />
   ```

3. **Add Navigation Link:**
   - **Header:** Add link to `src/components/Header.jsx` navigation
   - **Footer:** Add link to `src/components/Footer.jsx` quick links

### 🔄 **Page Navigation Features**

**Scroll to Top:**
- Automatically scrolls to top when navigating between pages
- Powered by `ScrollToTop.jsx` component
- Smooth scrolling enabled globally in CSS

---

## Content Management

### 📝 **Text Content**

**To Update Any Text:**
1. Find the relevant page component in `src/pages/`
2. Look for JSX elements with the text you want to change
3. Update the text directly in the component
4. Save the file - changes appear immediately in development

**Common Text Locations:**
- **Page Titles:** Usually in `<h1>` tags near the top of each page
- **Section Headings:** Look for `<h2>` or `<h3>` tags
- **Descriptions:** In `<p>` tags or array objects
- **Button Text:** Between button/Link tags

### 🖼️ **Images & Assets**

**Logo Updates:**
- **Favicon:** Replace `app/public/logo.png` with new logo
- **Header Logo:** Update image source in `src/components/Header.jsx`
- **Footer Logo:** Update image source in `src/components/Footer.jsx`

**Adding New Images:**
1. Place images in `app/public/` folder
2. Reference in components as `/imagename.jpg`
3. Or place in `app/src/assets/` and import in components

---

## Email & Contact Management

### 📧 **Email Addresses**

**Current Email Format:** `info@nurturenestpc.com`, `careers@nurturenestpc.com`

**To Change Email Domain:**
1. Update in Contact page contact info array
2. Update in Footer contact info
3. Update career page email button
4. Search project for old domain to ensure all instances are updated

### 📱 **Phone Numbers**

**Current Format:** `+1 (234) 567-8900`

**Update Locations:**
- Contact page contact info array
- Footer contact section
- Any "Call Now" buttons throughout site

### 🏢 **Address & Hours**

**Current Address:** 22005 Outer Drive, Dearborn, MI 48124

**Hours Types:**
- **Office Hours:** Mon-Fri: 8:00 AM - 4:30 PM, Weekends: Closed
- **In-Home Hours:** Mon-Fri: 8:00 AM - 8:00 PM, Sat: 8:00 AM - 4:00 PM, Sun: Closed

**Update in Contact.jsx in both the contact cards and detailed hours sections**

---

## Development Tips

### 🔧 **Common Commands**

**View Running Processes:**
```bash
# See what's running on ports
lsof -i :5173
lsof -i :5174
```

**Restart Development Server:**
- Press `Ctrl + C` to stop
- Run `npm run dev` to restart

**Clear Cache Issues:**
```bash
rm -rf node_modules
npm install
npm run dev
```

### 🐛 **Troubleshooting**

**Server Won't Start:**
- Check if port is in use (common ports: 5173, 5174, 5175)
- Ensure you're in the `app/` directory
- Run `npm install` if dependencies are missing

**Changes Not Appearing:**
- Hard refresh browser (`Ctrl + Shift + R` or `Cmd + Shift + R`)
- Check browser console for errors (F12)
- Restart development server

**Styling Issues:**
- Check CSS specificity in browser dev tools
- Ensure CSS variables are defined in `variables.css`
- Check for typos in class names or CSS properties

### 📁 **File Organization**

**Keep Organized:**
- Put all page components in `src/pages/`
- Put reusable components in `src/components/`
- Put styling in `src/styles/`
- Put static assets in `public/`

**Naming Conventions:**
- Components: `PascalCase.jsx` (e.g., `ContactForm.jsx`)
- CSS files: `lowercase.css` (e.g., `global.css`)
- Variables: `kebab-case` in CSS (`--color-sage`)

---

## Backup & Version Control

### 💾 **Before Making Changes**

**Always backup before major updates:**
1. Copy important files to a backup folder
2. Test changes in development before going live
3. Keep notes of what you changed

### 🔄 **Git Commands** (if using version control)

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Updated contact information"

# Push to remote
git push origin main
```

---

## Deployment

### 🚀 **Building for Production**

1. **Create production build:**
   ```bash
   npm run build
   ```

2. **Test production build locally:**
   ```bash
   npm run preview
   ```

3. **Deploy files:**
   - Upload contents of `dist/` folder to your web server
   - Ensure server is configured for single-page applications (SPA)

### 🌐 **Server Configuration**

**For SPA routing to work:**
- Configure server to serve `index.html` for all routes
- Ensure all assets are served from the root domain
- Set up proper MIME types for CSS and JS files

---

## Support & Maintenance

### 📞 **Getting Help**

**Common Issues:**
- Check this document first
- Look at browser console for error messages
- Search online for specific error messages
- Check React Router and Vite documentation

**Code Editor Tips:**
- Use VS Code with React and ES6 extensions
- Enable auto-formatting for consistent code style
- Use built-in terminal for running commands

### 🔄 **Regular Maintenance**

**Monthly Tasks:**
- Update contact information if changed
- Review and update service offerings
- Check that all links and emails work
- Update team member information

**Quarterly Tasks:**
- Review and update content for accuracy
- Check for any broken functionality
- Consider design improvements based on user feedback
- Update dependencies if needed (`npm update`)

---

*This documentation covers the essential aspects of managing the Nurture Nest website. Keep this file updated as you make changes to ensure future reference accuracy.*
