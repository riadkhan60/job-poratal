require('dotenv').config();
const cors = require('cors');

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(cors());

const users = [];
const userjobs = [];

app.get('/users/all', (req, res) => {
  res.json(users);
});

app.get('/users', authenticateToken, (req, res) => {
  console.log(users);
  console.log(req.user);
  const user = users.find((user) => user.email === req.user.name.email);
  res.json({ user: user.name, email: user.email });
});

app.post('/users', async (req, res) => {
  try {
    const email = req.body.email;

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return res.status(400).send('Email already exists');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = {
      name: req.body.name,
      password: hashedPassword,
      email: req.body.email,
    };
    userjobs.push({
      email: req.body.email,
      jobs: [],
    });
    users.push(user);
    res.json('success');
    res.status(201).send();
  } catch {
    res.status(500).send();
    throw new Error();
  }
});

app.post('/users/login', async (req, res) => {
  const user = users.find((user) => user.email === req.body.email);
  if (user == null) {
    res.status(404).send('can not find account');
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(
        { name: user },
        process.env.ACCESS_TOKEN_SECRET,
      );
      res.json({ accessToken: accessToken });
    } else {
      res.send('not found');
    }
  } catch {
    res.status(500).send();
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(3000);

app.post('/jobs/add', authenticateToken, (req, res) => {
  try {
    const { jobTitle, imageLink, jobDescription, requiredSkills } = req.body;
    const userJobIndex = userjobs.findIndex(
      (job) => job.email === req.user.name.email,
    );

    const newJob = {
      id: userjobs[userJobIndex].jobs.length + 1, // You may want to generate a unique ID
      jobTitle,
      jobDescription,
      imageLink,
      requiredSkills,
    };

    userjobs[userJobIndex].jobs.push(newJob);
    res.status(201).json(newJob);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

app.get('/jobs/all', authenticateToken, function (req, res) {
  const userjob = userjobs.find((job) => job.email === req.user.name.email);
  res.json(userjob);
});

app.get('/jobs/:jobId', authenticateToken, (req, res) => {
  try {
    const jobId = parseInt(req.params.jobId);
    const userJob = userjobs.find((job) => job.email === req.user.name.email);

    // Find the job with the specified jobId
    const job = userJob.jobs.find((job) => job.id === jobId);

    if (!job) {
      return res.status(404).send('Job not found');
    }

    res.status(200).json(job);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

app.delete('/jobs/delete/:jobId', authenticateToken, (req, res) => {
  try {
    const jobId = parseInt(req.params.jobId);
    const userJobIndex = userjobs.findIndex(
      (job) => job.email === req.user.name.email,
    );

    // Find the index of the job with the specified jobId
    const jobIndex = userjobs[userJobIndex].jobs.findIndex(
      (job) => job.id === jobId,
    );

    if (jobIndex === -1) {
      return res.status(404).send('Job not found');
    }

    // Remove the job from the user's job list
    const deletedJob = userjobs[userJobIndex].jobs.splice(jobIndex, 1)[0];
    res.status(200).json(deletedJob);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});
