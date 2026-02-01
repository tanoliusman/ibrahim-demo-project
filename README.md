# 🚀 React Project Kickstart: The Digital Resume Project

Welcome, Ibrahim! You are about to build your first React application. [cite_start]To make this project meaningful, we are building a digital version of the professional resume for **Usman Ali**, a Principal Software Engineer[cite: 1, 2]. 

[cite_start]This project will teach you how to translate 10+ years of high-level development experience into a modern web interface[cite: 4].

---

## 🛠 Step 1: The Environment Setup
Before we code, we need to prepare your machine.

1.  **Install Node.js**: Download the **LTS version** from [nodejs.org](https://nodejs.org/).
2.  **Install VS Code**: Your IDE for this project [code.visualstudio.com](https://code.visualstudio.com/).
3.  **Install Git**: Ensure Git is installed on your machine from [git-scm.com](https://git-scm.com/).

---

## 🏗 Step 2: Create & Connect to GitHub
Follow these steps to create your project locally and link it to your specific GitHub repository.

1.  **Open the Terminal** in VS Code (`Ctrl + ` `).
2.  **Generate Project**: 
    ```bash
    npm create vite@latest ibrahim-demo-project -- --template react
    ```
3.  **Enter the Folder**: 
    ```bash
    cd ibrahim-demo-project
    ```
4.  **Initialize Git & Link Repository**:
    Run these commands one by one to connect your local code to the GitHub repository:
    ```bash
    git init
    git remote add origin [https://github.com/tanoliusman/ibrahim-demo-project](https://github.com/tanoliusman/ibrahim-demo-project)
    git add .
    git commit -m "Initial React setup with Vite"
    git branch -M main
    git push -u origin main
    ```

---

## 🏃 Step 3: Launch the App
1.  **Install Libraries**:
    ```bash
    npm install
    ```
2.  **Start Development Mode**:
    ```bash
    npm run dev
    ```
3.  **View it**: Open the link provided in the terminal (usually `http://localhost:5173`).

---

## 🎯 The Assignment: "The Usman Ali Resume"
Your goal is to replace the default Vite code with the professional details found in the resume:

### Key Data to Include:
* **Header**: Usman Ali | [cite_start]Principal Software Engineer[cite: 1, 2].
* [cite_start]**Contact**: Riyadh, Saudi Arabia | tanoliusmanali@email.com[cite: 13, 14].
* [cite_start]**Core Skills**: Java 17, Spring Boot, Microservices, and Docker[cite: 10].
* **Work History**: 
    * [cite_start]**Senior Software Engineer at Seera**: Built security systems for 3 million users using Spring OAuth 2.1[cite: 16, 17, 19].
    * [cite_start]**Principal Software Engineer at Matas A/S**: Designed microservices on Azure[cite: 23, 24, 26].
* [cite_start]**Education**: Masters in Computer Science from Fast University Karachi[cite: 48].

### Professional Guidance:
* [cite_start]**Maintainable Code**: Usman is known for delivering "maintainable code"[cite: 8]. Keep your React components small, clean, and well-organized.
* [cite_start]**Results-Oriented**: Focus on the achievements, like "moving PHP projects to Spring Boot" to improve quality[cite: 21, 33].
* **Deployment**: Once finished, run `git add .`, `git commit -m "Completed Resume"`, and `git push` to save your work to GitHub.

---

## ✅ Final Checklist
* [ ] Git initialized and linked to the **ibrahim-demo-project** repository.
* [ ] `npm install` completed without errors.
* [ ] Local server running and displaying the resume.
* [ ] Code successfully pushed to GitHub.
