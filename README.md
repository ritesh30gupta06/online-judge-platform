#  Online Judge Platform

A full-stack coding platform where users can register, solve programming problems, submit solutions, and track their submission history.

##  Live Demo

**Frontend:**
https://online-judge-platform-65qgyk9th-ritesh-gupta.vercel.app/

**Backend:**
https://online-judge-platform-production.up.railway.app/

**GitHub Repository:**
https://github.com/ritesh30gupta06/online-judge-platform

---

#  Features

* Secure User Registration & Login
* JWT Authentication
* Protected Routes
* Problem Management System
* 50 Coding Problems
* Search Functionality
* Difficulty Levels (Easy, Medium, Hard)
* Tag-Based Categorization
* Code Submission Tracking
* User-Specific Submission History
* Responsive User Interface
* Cloud Deployment

---

#  Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* CSS

## Backend

* Node.js
* Express.js
* JWT Authentication
* REST APIs

## Database

* MySQL

## Deployment

* Vercel
* Railway

---

#  Screenshots

## Login Page

![Login](screenshots/login.png)

---

## Register Page

![Register](screenshots/register.png)

---

## Problems Dashboard

![Problems](screenshots/problems.png)

---

## Problem Details

![Problem Details](screenshots/problem-details.png)

---

## Submit Solution

![Submit Solution](screenshots/submit-solution.png)

---

## Submission History

![Submissions](screenshots/submissions.png)

---

#  Key Functionalities

### Authentication

* User Registration
* User Login
* JWT Token Generation
* Protected API Routes

### Problem Management

* View Coding Problems
* Difficulty Classification
* Tag-Based Organization
* Search Problems

### Submission System

* Submit Solutions
* Verdict Generation
* User-Specific Submission History

### Deployment

* Frontend Hosted on Vercel
* Backend Hosted on Railway
* MySQL Database Hosted on Railway

---

#  Database Schema

## Users

* id
* name
* email
* password

## Problems

* id
* title
* difficulty
* description
* sample_input
* sample_output
* tag

## Submissions

* id
* user_id
* problem_id
* language
* code
* verdict
* submitted_at

---

#  Installation

## Clone Repository

```bash
git clone https://github.com/ritesh30gupta06/online-judge-platform.git
```

```bash
cd online-judge-platform
```

---

## Backend Setup

```bash
cd backend
npm install
npm start
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

#  Project Structure

```text
onlinejudge
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── routes
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   ├── services
│   │   └── App.jsx
│
├── screenshots
│
└── README.md
```

---

#  Future Improvements

* Real Code Execution Engine
* Docker Sandbox Execution
* Test Case Evaluation
* Admin Dashboard
* Contest System
* Leaderboard
* User Profiles

---

#  Resume Highlights

* Developed a full-stack Online Judge platform using React, Node.js, Express, and MySQL.
* Implemented JWT-based authentication and protected API routes.
* Built RESTful APIs for coding problems and submission management.
* Designed a user-specific submission tracking system.
* Deployed frontend on Vercel and backend/database on Railway cloud infrastructure.
* Integrated 50 coding challenges with search, difficulty classification, and tag-based organization.

---

#  Author

**Ritesh Gupta**

GitHub: https://github.com/ritesh30gupta06

---

 If you found this project useful, consider giving it a star on GitHub.
