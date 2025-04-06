# 🎓 Capstone Project Template

A responsive, dynamic educational website built using HTML, Css and JavaScript. It loads data from JSON files, features category filtering, interactive statistics, a course slider, and modern UI components.

---

## 📁 Project Structure

```
capstone-project-template/
├── css/                    # CSS styles
├── data/                   # JSON data files (courses, stats, partners)
├── images/                 # Project assets/images
├── js/                     # JavaScript modules
├── scss/                   # Source SCSS files (structure only)
├── index.html              # Main HTML page
├── .eslintrc.json          # ESLint configuration
├── .stylelintrc.json       # Stylelint configuration
├── package.json            # Project metadata and scripts
```

---

## ⚙️ Requirements

Make sure you have the following installed globally:

- **Node.js** v18+
- **npm** v9+

Optional (recommended):
- **Visual Studio Code**
- VS Code Extensions:
  - ESLint
  - Stylelint
  - Live Server

---

## 🚀 Getting Started

### 1. Clone or Download the Repository

Using Git:
```bash
git clone <REPO_URL>
cd capstone-project-template
```

Or unzip the `.zip` file into a folder and open it in VS Code.

---

### 2. Install Dependencies

Run this command to install all required packages:
```bash
npm install
```

---

### 3. Run the Project

Open `index.html` in your browser, or use Live Server:

- In VS Code: right-click `index.html` → **Open with Live Server**

---

## 🧼 Code Linting

### JavaScript - ESLint

To check all `.js` files:
```bash
npm run lint
```

To automatically fix issues:
```bash
npx eslint js/*.js --fix
```

---

### SCSS - Stylelint

To check your SCSS files:
```bash
npx stylelint "scss/**/*.scss"
```

To automatically fix SCSS issues:
```bash
npx stylelint "scss/**/*.scss" --fix
```

---

## 📦 Data Files (in `/data` folder)

| File               | Description                  |
|--------------------|------------------------------|
| `stats.json`       | Statistical values and icons |
| `courses.json`     | Popular courses              |
| `main-courses.json`| All courses (for filtering)  |
| `partners.json`    | Partner logos                |

These files are loaded dynamically via JavaScript and rendered on the page.

---

## General overview

Many html elements were rendered by js using DOM. I focused mostly on UI and clean html code. I wanted to create whole overview of every each of the course 
but i didnt have enough time. I've tried to use as much as i can the knowledge from front-end epam course. I also used swiper library for slider element.
I would also add in the future adding courses to cart and option for creating an account and for instance e-mail notification about course discounts.

---

## 🖼️ Images Files (in `/images` folder)

All images are from websites as: https://www.freepik.com, https://www.svgrepo.com

---

---

## 📌 NPM Scripts

Defined in `package.json`:
```json
"scripts": {
  "compile": "sass scss/main.scss css/style.css --no-source-map",
  "lint": "eslint . && stylelint \"scss/**/*.scss\""
}
```

---

## 📝 License

This project is for educational purposes only.

---