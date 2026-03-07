# Aakif Khan - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS, featuring dark theme, smooth animations, and a professional contact form.

🌐 **Live Demo**: [[Vercel URL](https://portfolio-app-topaz-delta.vercel.app/)]  
📧 **Email**: aakifcse2022@gmail.com  
💼 **LinkedIn**: [linkedin.com/in/aakifkhan1299](https://linkedin.com/in/aakifkhan1299)  
👨‍💻 **GitHub**: [github.com/aakifkhan1299](https://github.com/aakifkhan1299)

---

## 🚀 Technologies Used

### Frontend Framework
- **Next.js 14.2.35** - React framework with App Router
- **React 18.3.0** - UI library
- **TypeScript 5.4.0** - Type safety

### Styling & UI
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Poppins Font** - Google Fonts integration
- **Custom CSS Animations** - Fade-in, slide-up, blob animations

### Additional Libraries
- **Framer Motion 11.0.0** - Animation library (installed, minimal usage)
- **EmailJS** - Email service integration (installed)
- **Web3Forms** - Contact form backend (active implementation)

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control
- **Vercel** - Deployment platform

---

## 📋 Features

### Core Features
✅ **Fully Responsive Design** - Mobile-first approach, works on all devices  
✅ **Dark Theme** - Black gradients with cyan/blue accents  
✅ **Smooth Animations** - Custom CSS and Framer Motion animations  
✅ **SEO Optimized** - Meta tags, semantic HTML  
✅ **Fast Performance** - Next.js optimization, lazy loading  
✅ **Contact Form** - Web3Forms integration with email notifications  
✅ **Professional Typography** - Poppins font family  

### Interactive Elements
- Smooth scroll navigation
- Hover effects on all interactive elements
- Animated background blobs in Hero section
- Expandable experience cards (hover to reveal details)
- Progress bars for skills
- Glowing border effects on profile image
- Mobile-friendly hamburger menu

---

## 📄 Section Breakdown

### 1. **Navbar** (`src/components/Navbar.tsx`)
**Technologies**: React, TypeScript, Smooth Scrolling  
**Features**:
- Fixed top navigation with blur effect on scroll
- Smooth scroll to sections
- Mobile hamburger menu with animations
- Clickable logo to return to hero section
- Responsive design (desktop menu + mobile menu)
- Gradient text for brand name
- Border animation on scroll

**Sections**: Home, About, Experience, Skills, Projects, Contact

---

### 2. **Hero Section** (`src/components/Hero.tsx`)
**Technologies**: React, TypeScript, Custom CSS Animations  
**Features**:
- Full-screen landing section
- Animated background with 3 moving blob gradients
- Gradient text for name (cyan to blue)
- Two CTA buttons:
  - "View My Work" - Scrolls to Projects
  - "Contact Me" - Scrolls to Contact form
- Centered layout with professional typography
- Custom blob animation (7s infinite loop)

**Animations**:
- Fade-in animation for heading
- Slide-up animation for text and buttons
- Moving blob background (cyan, blue, purple)

---

### 3. **About Section** (`src/components/About.tsx`)
**Technologies**: React, TypeScript, Next.js Image Component  
**Features**:
- Profile picture with animated glowing border
- Two-column layout (image + content)
- Professional bio text
- Three key statistics:
  - 3.5+ Years Experience
  - 30% Performance Boost
  - 10K+ Daily Users
- Gradient card background
- Pulsing glow effect on profile image

**Profile Image**:
- Location: `public/profile.jpg`
- Circular frame with border
- Cyan-to-blue animated glow
- Hover effect increases glow intensity
- Next.js Image component for optimization

---

### 4. **Experience Section** (`src/components/Experience.tsx`)
**Technologies**: React, TypeScript, Framer Motion (minimal), CSS Transitions  
**Features**:
- Two-column grid layout (responsive to single column on mobile)
- Expandable cards on hover
- Each card shows:
  - **Initial State**: Role, Company, Duration, Limited skills (first 5)
  - **Hover State**: Full responsibilities list, All skills
- Smooth height and opacity transitions
- Border color change on hover (gray to cyan)
- Scale effect on hover (1.02x)
- "Hover to see details" indicator

**Data Structure** (`src/lib/data.ts`):
```typescript
{
  title: string
  company: string
  duration: string
  responsibilities: string[]
  technologies: string[]
}
```

**Experience Cards**:
1. **Software Developer** - Cognizant (Oct 2022 - Present)
2. **Software Engineer Intern** - Cognizant (Mar 2022 - Sep 2022)

---

### 5. **Skills Section** (`src/components/Skills.tsx`)
**Technologies**: React, TypeScript, CSS Grid  
**Features**:
- Three categories: Frontend, Backend, Tools
- Animated progress bars showing proficiency levels
- 18 skills total:
  - **Frontend**: JavaScript (95%), TypeScript (92%), React.js (95%), Angular (90%), HTML5 (98%), CSS3 (95%), Context API (90%), React Hooks (93%)
  - **Backend**: Java (85%), Spring Boot (83%), Microservices (80%), REST APIs (90%), MySQL (82%), Oracle (78%)
  - **Tools**: Git (88%), Agile/SDLC (90%), AWS Basics (70%), CI/CD (75%)
- Gradient backgrounds for each category
- Smooth animation on scroll into view

**Progress Bar Animation**:
- Fills from left to right based on skill level
- Cyan-to-blue gradient fill
- Percentage displayed on right side

---

### 6. **Projects Section** (`src/components/Projects.tsx`)
**Technologies**: React, TypeScript, Next.js Image Component  
**Features**:
- Grid layout (3 columns on desktop, responsive)
- 6 featured projects with:
  - Project image (Unsplash placeholders)
  - Title and description
  - Technology tags
  - External links (GitHub, Live Demo)
- Hover effects:
  - Scale transform
  - Border color change (gray to cyan)
  - Shadow glow increase
- Card-based design with gradients

**Projects Listed**:
1. Enterprise Airline Reservation System
2. Enterprise React Dashboard
3. Angular Component Library
4. Microservices Integration Platform
5. Performance Optimization Suite
6. Responsive E-Commerce Platform

---

### 7. **Contact Section** (`src/components/Contact.tsx`)
**Technologies**: React, TypeScript, Web3Forms API  
**Features**:
- Professional contact form with 3 fields:
  - Name (required)
  - Email (required, email validation)
  - Message (required, textarea)
- Form validation
- Loading state during submission
- Success/Error messages
- Web3Forms integration (unlimited free submissions)
- Gradient button with hover effects
- Glass-morphism card design

**Web3Forms Configuration**:
- Access Key: `6ef92cff-a83c-43fa-833b-9b387ba60caf`
- Email destination: aakifcse2022@gmail.com
- API endpoint: `https://api.web3forms.com/submit`

**Form States**:
- Idle (ready to submit)
- Loading (animated "Sending...")
- Success (green notification)
- Error (red notification)

---

### 8. **Footer** (`src/components/Footer.tsx`)
**Technologies**: React, TypeScript, SVG Icons  
**Features**:
- Three-column layout:
  - **Column 1**: Brand name, tagline, location
  - **Column 2**: Quick links to sections
  - **Column 3**: Social media icons
- Real SVG logos for:
  - GitHub
  - LinkedIn
  - Gmail
  - Phone
- Hover effects on icons (gray to cyan)
- Copyright notice with current year
- Built with technology mention
- Dark background with gradient

**Social Links**:
- GitHub: [github.com/aakifkhan1299](https://github.com/aakifkhan1299)
- LinkedIn: [linkedin.com/in/aakifkhan1299](https://linkedin.com/in/aakifkhan1299)
- Email: aakifcse2022@gmail.com
- Phone: +91 9596 318 292

---

## 🎨 Design System

### Color Palette
- **Primary**: Cyan (#06B6D4)
- **Secondary**: Blue (#3B82F6)
- **Accent**: Purple (#9333EA)
- **Background**: Black (#000000) to Gray (#1A1A1A) gradients
- **Text**: White (#FFFFFF), Gray (#E5E5E5), Gray-300 (#D1D5DB)
- **Borders**: Gray-700 (#374151), Gray-800 (#1F2937)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold), 800 (Extra-Bold)
- **Headings**: Bold with gradient text effect
- **Body**: Regular weight, gray color

### Spacing
- **Section Padding**: `py-10` (reduced from py-20)
- **Container**: Max-width 7xl (1280px)
- **Grid Gaps**: 4-6 units (1rem - 1.5rem)

### Animations
```css
/* Fade In */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slide-up {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Blob Movement */
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
```

---

## 📦 Project Structure

```
portfolio-app/
├── public/
│   ├── profile.jpg              # Your profile picture
│   └── assets/                  # Other static assets
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles, Tailwind, Poppins font
│   │   ├── layout.tsx          # Root layout, metadata
│   │   └── page.tsx            # Main page, imports all components
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation with smooth scroll
│   │   ├── Hero.tsx            # Landing section with animated blobs
│   │   ├── About.tsx           # Bio with profile picture
│   │   ├── Experience.tsx      # Work history with expandable cards
│   │   ├── Skills.tsx          # Tech skills with progress bars
│   │   ├── Projects.tsx        # Portfolio projects grid
│   │   ├── Contact.tsx         # Contact form with Web3Forms
│   │   └── Footer.tsx          # Footer with social links
│   ├── lib/
│   │   └── data.ts             # All portfolio data (projects, skills, experience)
│   ├── styles/
│   │   └── components.css      # Component-specific styles
│   └── types/
│       └── index.ts            # TypeScript type definitions
├── .gitignore                  # Git ignore file (includes node_modules)
├── LICENSE                     # MIT License
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

---

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/aakif123/portfolio-app.git
cd portfolio-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Add your profile picture**
- Place your photo as `profile.jpg` in the `public/` folder
- Recommended size: 800x800px (square)
- Format: JPG or PNG

4. **Run development server**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin master
```

2. **Deploy on Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Vercel auto-detects Next.js settings
- Click "Deploy"

3. **Automatic Updates**
- Every push to master triggers auto-deployment
- Preview deployments for pull requests

### Environment Variables
No environment variables needed for current setup. Web3Forms access key is embedded in code.

---

## 📧 Contact Form Setup

### Current Setup: Web3Forms (Active)
- **Access Key**: `6ef92cff-a83c-43fa-833b-9b387ba60caf`
- **Email**: aakifcse2022@gmail.com
- **Features**: Unlimited submissions, no signup required
- **API**: `https://api.web3forms.com/submit`

### Alternative: EmailJS (Installed but not active)
To switch to EmailJS:
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Get Service ID, Template ID, Public Key
3. Uncomment EmailJS code in `Contact.tsx`
4. Replace placeholder IDs with your actual IDs

---

## 🎯 Performance Optimizations

- ✅ Next.js App Router for optimal performance
- ✅ Next.js Image component for automatic image optimization
- ✅ Lazy loading for images
- ✅ Minimal JavaScript bundle
- ✅ Tailwind CSS purging unused styles
- ✅ Fast Font loading (Google Fonts)
- ✅ Smooth scrolling instead of page navigation

---

## 📝 Customization Guide

### Update Personal Information
Edit `src/lib/data.ts`:
- Projects array
- Skills array
- Experiences array

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#06B6D4',  // Cyan
  accent: '#9333EA',   // Purple
}
```

### Modify Sections
Each section is a standalone component in `src/components/`
- Import/export from `src/app/page.tsx`

### Update Contact Email
Change in two places:
1. `src/components/Contact.tsx` - Web3Forms setup
2. `src/components/Footer.tsx` - Email link

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

Copyright (c) 2026 Aakif Khan

---

## 🤝 Contact & Support

**Aakif Khan**
- 📧 Email: aakifcse2022@gmail.com
- 💼 LinkedIn: [linkedin.com/in/aakifkhan1299](https://linkedin.com/in/aakifkhan1299)
- 👨‍💻 GitHub: [github.com/aakifkhan1299](https://github.com/aakifkhan1299)
- 📱 Phone: +91 9596 318 292
- 📍 Location: Bengaluru, Karnataka, India

---

## 🙏 Acknowledgments

- Next.js Team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Web3Forms for the contact form service
- Unsplash for project placeholder images
- Google Fonts for Poppins typography

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
