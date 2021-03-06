const fetch = require("node-fetch");

const getPosts = async () => {
  const response = await fetch("http://localhost:4200/post", { method: "GET" });
  const data = await response.json();
  return data;
};

const getPostById = async (id) => {
  const response = await fetch(`http://localhost:4200/post/${id}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

const createPost = async (newData) => {
  const response = await fetch("http://localhost:4200/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });

  const data = await response.json();
  return data;
};

const updatePost = async (id, newData) => {
  const response = await fetch(`http://localhost:4200/post/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });

  const data = await response.json();
  return data;
};

const deletePost = async (id) => {
  const response = await fetch(`http://localhost:4200/post/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  return data;
};

module.exports = {
  getPostById,
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
