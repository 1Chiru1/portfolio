# 🚀 Quick Start Guide

## New Developer Setup (5 minutes)

### 1. Clone & Install

```bash
git clone https://github.com/1Chiru1/portfolio.git
cd portfolio
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

### 3. Start Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## Common Tasks

### Make Changes

1. Edit files in `src/`
2. See live updates in browser
3. Format code: `npm run format`
4. Check for issues: `npm run lint`

### Update Content

#### Personal Info

Edit `src/constants/heroData.js`:

```javascript
export const heroContent = {
  name: "Your Name",
  title: "Your Title",
  // ...
};
```

#### Skills

Edit `src/constants/skillsData.js`:

```javascript
export const skills = [
  { name: "Skill", icon: "icon-class" },
  // ...
];
```

#### Social Links

Edit `src/constants/heroData.js`:

```javascript
export const socialLinks = [
  { icon: "fab fa-linkedin", href: "your-url", label: "LinkedIn" },
  // ...
];
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## Project Structure

```
portfolio/
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx     # Navigation
│   │   ├── Hero.jsx       # Landing section
│   │   ├── About.jsx      # Skills & info
│   │   ├── Experience.jsx # Work history
│   │   ├── Hobbies.jsx    # Personal interests
│   │   ├── Contact.jsx    # Contact form
│   │   └── ErrorBoundary.jsx # Error handling
│   │
│   ├── constants/         # Data & config
│   │   ├── heroData.js    # Hero section data
│   │   ├── skillsData.js  # Skills & technologies
│   │   └── appConstants.js # App-wide constants
│   │
│   ├── hooks/             # Custom React hooks
│   │   └── useObserver.js # Intersection observer
│   │
│   ├── App.jsx            # Main app component
│   ├── App.css            # Global styles
│   └── main.jsx           # Entry point
│
├── public/                # Static files
│   ├── image/            # Images & assets
│   └── index.html        # HTML template
│
├── docs/                  # Documentation
│   ├── DEPLOYMENT.md     # Deployment guide
│   └── PERFORMANCE.md    # Optimization tips
│
└── build/                 # Production build (generated)
```

---

## Essential Commands

| Command                  | Description              |
| ------------------------ | ------------------------ |
| `npm start`              | Start development server |
| `npm test`               | Run tests                |
| `npm run build`          | Build for production     |
| `npm run deploy`         | Deploy to GitHub Pages   |
| `npm run lint`           | Check code quality       |
| `npm run lint:fix`       | Auto-fix lint issues     |
| `npm run format`         | Format code              |
| `npm run audit:security` | Check vulnerabilities    |

---

## Making Your First Change

### Example: Update Your Name

1. **Open the file**:

   ```
   src/constants/heroData.js
   ```

2. **Change the name**:

   ```javascript
   export const heroContent = {
     name: "John Doe", // Change this
     // ...
   };
   ```

3. **Save & see changes**:
   - Browser will auto-reload
   - Changes appear instantly

4. **Format & lint**:

   ```bash
   npm run format
   npm run lint:fix
   ```

5. **Commit**:
   ```bash
   git add .
   git commit -m "Update name in hero section"
   git push
   ```

---

## Customization Checklist

- [ ] Update personal info in `heroData.js`
- [ ] Update skills in `skillsData.js`
- [ ] Replace images in `public/image/`
- [ ] Update social links in `heroData.js`
- [ ] Update experience in `Experience.jsx`
- [ ] Update hobbies in `Hobbies.jsx`
- [ ] Update contact info in `Contact.jsx`
- [ ] Update meta tags in `public/index.html`
- [ ] Add your resume PDF to `public/Resume.pdf`
- [ ] Update favicon in `public/favicon.ico`

---

## Troubleshooting

### Port already in use

```bash
# Kill process on port 3000
npx kill-port 3000
# Then restart
npm start
```

### Dependencies error

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Build fails

```bash
npm run lint:fix
npm run format
npm run build
```

### Changes not showing

- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Check browser console for errors

---

## Need Help?

1. **Check Documentation**:
   - [README.md](README.md) - Project overview
   - [DEPLOYMENT.md](docs/DEPLOYMENT.md) - Deployment guide
   - [PERFORMANCE.md](docs/PERFORMANCE.md) - Optimization tips
   - [CONTRIBUTING.md](CONTRIBUTING.md) - Contributing guide

2. **Check Issues**: Look at existing GitHub issues

3. **Ask for Help**: Open a new issue or email chiranjeevikashyap@gmail.com

---

## Quick Tips

💡 **Development**: Run `npm start` and edit files - changes appear instantly

💡 **Data Changes**: Edit files in `src/constants/` - no component changes needed

💡 **Styling**: Edit `App.css` or create component-specific CSS files

💡 **Testing**: Always run `npm run build` before deploying

💡 **Code Quality**: Run `npm run format && npm run lint:fix` before committing

---

Happy coding! 🎉
