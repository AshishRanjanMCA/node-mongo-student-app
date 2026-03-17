# 🚀 Node.js + MongoDB Student Management App (Dockerized)

## 📌 Project Overview

This is a full-stack web application built using **Node.js, Express, and MongoDB**.
The application allows users to add and view student records through a simple web interface.

The project is fully containerized using **Docker and Docker Compose**, making it easy to run multiple services together.

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* HTML / CSS
* Docker
* Docker Compose

---

## 📂 Project Structure

```text
node-mongo-student-app/
├── app.js
├── package.json
├── Dockerfile
├── docker-compose.yml
├── public/
│   └── style.css
└── views/
    └── index.html
```

---

## 🚀 Features

* Add student details (name & course)
* View student list
* Backend API using Express
* Database integration using MongoDB
* Fully containerized setup using Docker

---

## ⚙️ Setup & Run (Docker)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/node-mongo-student-app.git
cd node-mongo-student-app
```

### 2️⃣ Build and start containers

```bash
docker compose up --build
```

### 3️⃣ Access the application

```text
http://localhost:3000
```

For EC2:

```text
http://<your-ec2-public-ip>:3000
```

---

## 🧪 How It Works

1. User opens the web application
2. Enters student name and course
3. Form sends data to Node.js backend
4. Backend stores data in MongoDB
5. Page reloads and displays student list

---

## 🐳 Docker Services

### Web (Node.js App)

* Built using Dockerfile
* Runs on port 3000

### MongoDB

* Official MongoDB image
* Stores application data
* Persistent storage using Docker volumes

---

## 🔐 Important Notes

* Ensure port **3000** is open in EC2 Security Group
* MongoDB port **27017** should not be exposed publicly
* Use Docker volumes for persistent database storage

---

## 💡 Learning Outcomes

* Building REST-based web applications using Node.js
* Working with MongoDB using Mongoose
* Understanding Dockerfile and containerization
* Running multi-container apps using Docker Compose
* Service-to-service communication in Docker network

---

## 📈 Future Enhancements

* Add Update and Delete (CRUD operations)
* Use EJS or React for frontend
* Add authentication (login system)
* Use environment variables (.env)
* Add Nginx reverse proxy
* CI/CD pipeline using Jenkins

---

## 👨‍💻 Author

Ashish Ranjan

---

## ⭐ Interview Explanation

> This project is a containerized full-stack application where I used Node.js and Express for backend, MongoDB for database, and Docker Compose to run both services together. It demonstrates my understanding of containerization, backend development, and database integration.
