const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = 3000;

// MongoDB connection
mongoose.connect("mongodb://mongo:27017/studentdb")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Schema
const studentSchema = new mongoose.Schema({
  name: String,
  course: String
});

const Student = mongoose.model("Student", studentSchema);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Home page
app.get("/", async (req, res) => {
  const students = await Student.find();
  let html = `
    <html>
    <head>
      <title>Student App</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <div class="container">
        <h1>Student Management</h1>

        <form action="/add" method="POST">
          <input type="text" name="name" placeholder="Enter Name" required><br><br>
          <input type="text" name="course" placeholder="Enter Course" required><br><br>
          <button type="submit">Add Student</button>
        </form>

        <h2>Students List</h2>
        <ul>
  `;

  students.forEach((student) => {
    html += `<li>${student.name} - ${student.course}</li>`;
  });

  html += `
        </ul>
      </div>
    </body>
    </html>
  `;

  res.send(html);
});

// Add student
app.post("/add", async (req, res) => {
  const { name, course } = req.body;

  if (name && course) {
    await Student.create({ name, course });
  }

  res.redirect("/");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
