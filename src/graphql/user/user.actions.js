const fetch = require("node-fetch");

const getUsers = async () => {
  const response = await fetch("http://localhost:4200/user", {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

const getUserById = async (id) => {
  const response = await fetch(`http://localhost:4200/user/${id}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

const createUser = async (newData) => {
  const response = await fetch("http://localhost:4200/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });

  const data = await response.json();
  return data;
};

module.exports = {
  getUserById,
  getUsers,
  createUser,
};
