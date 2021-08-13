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

module.exports = {
  getPostById,
  getPosts,
};
