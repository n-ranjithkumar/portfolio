# Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, projects, and contact information. Built with React and styled-components, featuring a clean UI with dark/light mode toggle.

## 🌐 Live Demo

Visit the live site: [https://n-ranjithkumar.github.io/portfolio](https://n-ranjithkumar.github.io/portfolio)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preference storage
- **Smooth Animations**: Interactive UI elements with smooth transitions and hover effects
- **Project Showcase**: Detailed project cards with technologies used and GitHub links
- **Experience Timeline**: Professional experience and internships with certificates
- **Skills Section**: Comprehensive display of technical skills organized by category
- **Contact Form**: Integrated contact form using EmailJS for direct communication
- **Optimized Performance**: Image preloading and optimized rendering for fast page loads

## 🛠️ Technologies Used

### Frontend
- **React** (v19.0.0) - UI library
- **Styled Components** - CSS-in-JS styling
- **Material-UI** - UI component library
- **React Router** - Navigation
- **Typewriter Effect** - Animated text effects
- **React Tilt** - 3D tilt effects
- **React Icons** - Icon library

### Build Tools
- **Create React App** - Build tooling
- **gh-pages** - GitHub Pages deployment

### Other
- **EmailJS** - Contact form integration

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/n-ranjithkumar/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

The site is deployed on GitHub Pages. To deploy:

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

3. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Select `gh-pages` branch as source
   - Save

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Contact/
│   │   ├── Education/
│   │   ├── Experience/
│   │   ├── Footer/
│   │   ├── HeroSection/
│   │   ├── Navbar/
│   │   ├── Projects/
│   │   ├── ProjectDetails/
│   │   ├── Skills/
│   │   └── shared/
│   ├── contexts/
│   │   └── ThemeContext.js
│   ├── data/
│   │   └── constants.js
│   ├── images/
│   ├── utils/
│   │   └── themes.js
│   ├── App.js
│   └── index.js
└── package.json
```

## 🎨 Customization

To customize the portfolio with your information:

1. Update personal information in `src/data/constants.js`:
   - Bio details (name, roles, description)
   - Skills and technologies
   - Experience and education
   - Projects
   - Contact information

2. Replace images in `src/images/`:
   - Hero image: `src/images/HeroSection/HeroImg.jpg`
   - Project images: `src/images/Projects/`
   - Skill icons: `src/images/Skills/`
   - Experience logos: `src/images/Experience/`

3. Update theme colors in `src/utils/themes.js`

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run deploy` - Builds and deploys to GitHub Pages

## 🔧 Configuration

### EmailJS Setup

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Add your EmailJS credentials to `.env`:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

See `EMAIL_SETUP.md` for detailed instructions.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ranjithkumar N**

- GitHub: [@n-ranjithkumar](https://github.com/n-ranjithkumar)
- LinkedIn: [Ranjithkumar N](https://www.linkedin.com/in/ranjithkumar-n-420459317/)
- Email: nranjithkumar720@gmail.com

## 🙏 Acknowledgments

- Design inspiration from various portfolio websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- UI components from [Material-UI](https://mui.com/)

---

⭐ If you like this project, please give it a star!
