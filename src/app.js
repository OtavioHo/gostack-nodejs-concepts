const express = require("express");
const { uuid } = require("uuidv4"); 
const cors = require("cors");

// const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

function repoExists(request, response, next) {
  const { id } = request.params;
  const index = repositories.findIndex(el => el.id == id);

  if (index < 0) return response.status(400).json({error: "Repository not found."});

  return next();
}

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories)
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;
  repository = { id: uuid(), title, url, techs, likes: 0 };

  repositories.push(repository);

  return response.json(repository);
});

app.put("/repositories/:id", repoExists, (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;
  const index = repositories.findIndex(el => el.id == id);

  if (title) repositories[index].title = title;
  if (url) repositories[index].url = url;
  if (techs) repositories[index].techs = techs;

  return response.json(repositories[index]);
});

app.delete("/repositories/:id", repoExists, (request, response) => {
  const { id } = request.params;
  const index = repositories.findIndex(el => el.id == id);

  repositories.splice(index, 1);

  return response.status(204)
});

app.post("/repositories/:id/like", repoExists, (request, response) => {
  const { id } = request.params;
  const index = repositories.findIndex(el => el.id == id);
  repositories[index].likes++;

  return response.json(repositories[index]);
});

module.exports = app;
