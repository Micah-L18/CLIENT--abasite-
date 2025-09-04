# Nurture Nest Pediatric Therapy Website

A complete React-based website for Nurture Nest Pediatric Therapy, featuring a warm, boho-inspired design that reflects the organization's nature-focused approach to pediatric therapy services.

## 🌿 Overview

This website serves as the digital presence for Nurture Nest Pediatric Therapy, providing comprehensive information about their services, team, and approach to pediatric therapy. The design emphasizes natural, earthy colors and a welcoming atmosphere that aligns with their mission of "nurturing each child's growth through compassionate, evidence-based pediatric therapy."

## ✨ Features

### Complete Website Structure
- **6 Fully Functional Pages**: Home, Services, Students, Career, About, Contact Us
- **Responsive Design**: Mobile-friendly layout that works across all devices
- **Modern Navigation**: Sticky header with active state highlighting
- **Professional Footer**: Contact info and quick links

### Design System
- **Boho Color Palette**: Earthy tones including terracotta (#C65D00), sage green (#9CAF88), mustard yellow (#D2B55B), and soft cream (#F7F3E9)
- **Nature-Inspired Elements**: Leaf icons, organic shapes, natural imagery
- **Typography**: Georgia serif for headings, Arial sans-serif for body text
- **Consistent Styling**: CSS variables for maintainable theming

### Page Content

#### 🏠 Home
- Hero section with mission statement
- Services overview with cards
- Call-to-action buttons
- Professional layout with gradients

#### 🏥 Services
- Detailed descriptions of 6 therapy services:
  - ABA Therapy
  - Speech Language Pathology
  - Speech Therapy
  - Occupational Therapy
  - Early On
  - Telehealth
- Benefits lists for each service
- Contact call-to-action

#### 🎓 Students
- 4 student opportunity programs
- Application process steps
- Requirements and duration for each program
- Professional application flow

#### 💼 Career
- 4 open job positions with full descriptions
- Benefits package information
- Application instructions
- Team-focused messaging

#### ℹ️ About
- Company story and founding vision
- 6 core values with descriptions
- Team member profiles (4 staff)
- Clinic gallery placeholders
- Professional yet personal tone

#### 📞 Contact
- Functional contact form with validation
- Office and in-home hours
- Contact information
- "Why Choose Us" section
- Responsive grid layout

## 🛠 Technologies Used

- **React.js 18** - Frontend framework
- **React Router 6** - Client-side routing
- **Vite** - Build tool (faster than Create React App)
- **CSS3** - Styling with custom properties and responsive design
- **JavaScript ES6+** - Modern JavaScript features

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the app directory:
   ```bash
   cd app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 📁 Project Structure

```
app/
├── public/
│   └── logo.png                 # Organization logo
├── src/
│   ├── components/              # Reusable components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/                   # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Students.jsx
│   │   ├── Career.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── services/               # API service layer
│   │   └── api.js
│   ├── styles/                 # Global styles
│   │   ├── variables.css       # CSS custom properties
│   │   └── global.css          # Global styles
│   └── App.jsx                 # Main application component
├── package.json
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: Sage green (#9CAF88), Forest green (#355E3B)
- **Accent**: Terracotta (#C65D00), Mustard yellow (#D2B55B)
- **Neutral**: Cream (#F7F3E9), Dusty blue (#6B8CAE), Peach (#F5B895)

### Components
- **Cards**: Elevated with shadows and hover effects
- **Buttons**: Primary (sage) and secondary (terracotta) variants
- **Forms**: Styled inputs with focus states
- **Navigation**: Clean, accessible menu with active states

## 🔌 Backend Integration Ready

The application includes a complete API service layer in `src/services/api.js` with functions for:

- Contact form submissions
- Job applications
- Student applications
- Content management
- Newsletter subscriptions

To connect to a backend:
1. Set the `VITE_API_BASE_URL` environment variable
2. Implement corresponding API endpoints
3. The frontend will automatically connect

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

Key responsive features:
- Flexible grid layouts
- Collapsible navigation on mobile
- Optimized form layouts
- Scalable typography

## 🚀 Deployment

The application can be deployed to any static hosting service:

### Build Commands
```bash
npm run build    # Creates production build
npm run preview  # Preview production build locally
```

### Recommended Hosting
- **Netlify**: Automatic deploys from Git
- **Vercel**: Optimized for React applications
- **AWS S3 + CloudFront**: Scalable static hosting
- **GitHub Pages**: Free hosting for public repos

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

### Code Style
- Component-based architecture
- Inline styles for component-specific styling
- CSS variables for global theming
- Semantic HTML structure
- Accessible navigation and forms

## 📋 Features Roadmap

### Immediate Additions (Backend Required)
- [ ] Contact form backend integration
- [ ] Job application system
- [ ] Student application portal
- [ ] Content management system

### Future Enhancements
- [ ] Blog/news section
- [ ] Client testimonials
- [ ] Online appointment booking
- [ ] Photo gallery with real clinic images
- [ ] SEO optimization
- [ ] Analytics integration

## 🤝 Contributing

When making changes:
1. Follow the established component structure
2. Use CSS variables from `styles/variables.css`
3. Maintain responsive design principles
4. Test across different screen sizes
5. Keep accessibility in mind

## 📄 License

This project is proprietary to Nurture Nest Pediatric Therapy.

---

**Built with ❤️ for Nurture Nest Pediatric Therapy**

The website is now complete and ready for use! All pages are fully functional with professional content, consistent styling, and responsive design. The application is ready for backend integration and deployment.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
