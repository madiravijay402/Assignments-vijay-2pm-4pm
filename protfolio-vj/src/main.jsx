import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

---

## **Key Points:**

### **App.jsx:**
- Sets up React Router
- Only one route (`/`) that renders Page1
- Page1 contains everything (Hero, Page2, Page3) in one scrolling page

### **main.jsx:**
- Entry point of your React app
- **Important:** Bootstrap CSS is imported here (needed for Page2 and Page3 styling)
- Renders the App component

---

## **Complete File Structure:**
```
// portfolio-vj/
// ├── src/
// │   ├── components/
// │   │   ├── Page1.jsx          ← Main page (Hero + About + Projects)
// │   │   ├── Page1.css          ← Styling for Page1
// │   │   ├── Page2.jsx          ← About section component
// │   │   ├── Page3.jsx          ← Projects section component
// │   │   ├── vjlogo.png.png     ← Your logo image
// │   │   ├── vjpf.jpg           ← Your profile photo
// │   │   ├── vj.pdf             ← Your resume
// │   │   └── smallgif.mp4       ← Hero video
// │   ├── App.jsx                ← Router setup
// │   └── main.jsx               ← App entry point