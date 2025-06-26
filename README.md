# 🚀 Portfolio Project: Modern Developer Portfolio

![Portfolio Screenshot](![image](https://github.com/user-attachments/assets/2c981770-6296-45c5-be27-e4fe264ea6fc)
) *Replace with actual screenshot*

Welcome to my modern developer portfolio! This responsive website showcases my skills, projects, and professional journey with a sleek design and smooth animations.

## 🌟 Features

- **Fully Responsive Design** - Looks great on all devices 📱💻🖥️
- **Project Showcase** - Beautiful gallery of my work with filter options 🔍
- **Skills Section** - Visual representation of my technical abilities 📊
- **Dark/Light Mode** - Automatic theme switching based on preferences 🌓
- **Contact Form** - Easy way to get in touch with me 📬
- **Smooth Animations** - Enhanced user experience with subtle animations ✨
- **Performance Optimized** - Fast loading times with optimized assets ⚡

## 🛠️ Technologies Used

| Category        | Technologies                                                                 |
|-----------------|------------------------------------------------------------------------------|
| **Frontend**    | ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) |
| **Styling**     | ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white) ![Framer Motion](https://img.shields.io/badge/-Framer_Motion-0055FF?logo=framer&logoColor=white) |
| **Tools**       | ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white) ![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white) |
| **Deployment**  | ![Netlify](https://img.shields.io/badge/-Netlify-00C7B7?logo=netlify&logoColor=white) |

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/alaharilakshyan/New-Portfolio.git
   cd New-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📂 Project Structure

```
New-Portfolio/
├── public/          # Static assets
├── src/             # Source files
│   ├── assets/      # Images, icons, fonts
│   ├── components/  # Reusable components
│   ├── sections/    # Page sections (Hero, About, Projects, etc.)
│   ├── styles/      # Global styles
│   ├── App.jsx      # Main application component
│   └── main.jsx     # Entry point
├── .gitignore       # Git ignore file
├── index.html       # Main HTML file
├── package.json     # Project dependencies
├── README.md        # You are here! 😊
└── vite.config.js   # Vite configuration
```

## 📝 Customization Guide

1. **Update personal information**  
   Edit `src/data/personal.js` with your details:
   ```javascript
   export const personalData = {
     name: "Your Name",
     title: "Your Title",
     description: "Your professional description...",
     // ...other data
   };
   ```

2. **Add your projects**  
   Update `src/data/projects.js` with your work:
   ```javascript
   export const projectsData = [
     {
       title: "Project 1",
       description: "Project description...",
       technologies: ["React", "Tailwind CSS"],
       // ...other fields
     },
     // ...add more projects
   ];
   ```

3. **Modify the theme**  
   Edit colors in `tailwind.config.js`:
   ```javascript
   theme: {
     extend: {
       colors: {
         primary: '#your-primary-color',
         secondary: '#your-secondary-color',
       }
     }
   }
   ```

## 🤝 Contributing

While this is my personal portfolio, I welcome suggestions and improvements!  
Feel free to open issues or submit pull requests for:

- Bug fixes 🐛
- Accessibility improvements ♿
- Performance optimizations ⚡
- Design enhancements 🎨

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---
