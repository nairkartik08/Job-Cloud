💼 Job Cloud – Full Stack Job Portal
🌐 Live Demo

Frontend (GitHub Pages): https://nairkartik08.github.io/Job-Cloud/

Backend (Render): https://jobcloud-backend.onrender.com

🧾 Overview

Job Cloud is a cloud-based job portal designed to connect job seekers and employers.
It allows users to sign up, log in, post jobs, apply for jobs, and manage their profiles — all through a seamless and modern web interface.

The project demonstrates a complete Full Stack Web Application setup using:

Frontend: HTML, CSS, JavaScript

Backend: Node.js with Express.js

Database: MySQL (hosted on Clever Cloud)

Hosting:

Frontend → GitHub Pages

Backend → Render

🚀 Features
👨‍💼 For Job Seekers:

User registration and login

Cloud-hosted user profiles

Autofilled job application form using profile data

Resume upload and management

Apply directly for available job posts

🏢 For Employers:

Post new jobs with role, description, and requirements

View all posted jobs

Manage job listings through database

⚙️ System Features:

Secure cloud database connection (Clever Cloud MySQL)

Real-time data fetching via RESTful APIs

LocalStorage-based session handling

Responsive design and easy navigation

🧠 Tech Stack
Layer	Technology
Frontend	HTML, CSS, JavaScript
Backend	Node.js, Express.js
Database	MySQL (Clever Cloud)
Deployment	Render (Backend), GitHub Pages (Frontend)
File Handling	Multer (for resume uploads)
Cross-Origin Handling	CORS
Environment Variables	dotenv

📡 API Endpoints
Function	Method	Endpoint
Signup	POST	/signup
Login	POST	/login
Get User Profile	GET	/user/:email
Submit Application	POST	/submit-application
Get All Jobs	GET	/jobs
Post a Job	POST	/add-job

🧩 Database Schema
users
Column	Type	Description
id	INT	Primary Key
fullname	VARCHAR(100)	User’s full name
email	VARCHAR(100)	Unique user email
password	VARCHAR(255)	User password
mobile	VARCHAR(15)	Phone number
gender	VARCHAR(10)	Gender
dob	DATE	Date of Birth
education	VARCHAR(150)	Qualification
skills	VARCHAR(255)	Skills
resume	VARCHAR(255)	Uploaded resume filename
jobs
Column	Type	Description
id	INT	Primary Key
title	VARCHAR(100)	Job title
company	VARCHAR(100)	Company name
location	VARCHAR(100)	Job location
description	TEXT	Job description
salary	VARCHAR(50)	Salary offered
experience	VARCHAR(50)	Required experience
skills	VARCHAR(255)	Required skills
posted_at	TIMESTAMP	Auto timestamp
applications
Column	Type	Description
id	INT	Primary Key
fullname	VARCHAR(100)	Applicant’s name
email	VARCHAR(100)	Applicant’s email
phone	VARCHAR(15)	Contact number
cover_letter	TEXT	Cover letter content
resume_path	VARCHAR(255)	Uploaded resume path
submitted_at	TIMESTAMP	Application timestamp

🧭 Project Workflow

User Signup → Details stored in users table.

Login → Email & password verified via backend.

Profile Auto-Fill → Application form prefilled using stored user data.

Post Job → Employers add job listings via /add-job route.

Apply for Job → Applications stored in applications table.

Database Hosted on Cloud (Clever Cloud) → Persistent and online storage.

🔒 Authentication

The project uses custom authentication via email & password verification from the MySQL database.
After login, user session is managed using localStorage on the frontend.

🧰 Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/nairkartik08/Job-Cloud.git
cd Job-Cloud

2️⃣ Install Backend Dependencies
cd JCB-backend
npm install

3️⃣ Create .env File
DB_HOST=your-hostname
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=your-dbname
DB_PORT=3306

4️⃣ Run the Server
node server.js

5️⃣ Open Frontend

Open index.html using Live Server or GitHub Pages.

🌩️ Cloud Integrations
Service	Purpose
Clever Cloud	Cloud MySQL database hosting
Render	Backend hosting for Node.js APIs
GitHub Pages	Static frontend hosting
📸 Screenshots (Optional for README)

Signup & Login

Profile Page

Job Posting Interface

Application Form

Job Listings

🧾 License

This project is for educational purposes under the guidance of the Full Stack Java course (FSJ) module.
Free to use and modify with attribution.

