export function getDatabase() {
  const database = window.localStorage.getItem("DATABASE");
  if (!database) {
    return [];
  }
  return JSON.parse(database);
}

export function saveData(blogposts) {
  const blogpostString = JSON.stringify(blogposts);
  window.localStorage.setItem("DATABASE", blogpostString);
}

const BASE_URL = "http://localhost:7000/api/v1";

export async function saveUser(user) {
  const createUserResponse = await fetch(`${BASE_URL}/users/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Ensure JSON format
    },
    body: JSON.stringify(user), // Convert user object to JSON
  });

  const response = await createUserResponse.json();
  return response;
}

export async function signinUser(user) {
  const signinResponse = await fetch(`${BASE_URL}/users/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const response = await signinResponse.json();

  return response;
}

export async function getLoggedInUser() {
  const token = window.localStorage.getItem("token");
  const loggedInUserResponse = await fetch(
    `${BASE_URL}/users/auth/loggedInUser`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }
  );

  const response = await loggedInUserResponse.json();

  return response;
}

export async function saveArticle(article) {
  const token = window.localStorage.getItem("token");
  const createArticleResponse = await fetch(`${BASE_URL}/users/articles`, {
    method: "POST",
    body: article,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const response = await createArticleResponse.json();
  return response;
}

export async function getArticles() {
  const token = window.localStorage.getItem("token");
  const articlesResponse = await fetch(`${BASE_URL}/users/articles`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const response = await articlesResponse.json();
  return response;
}

export async function updateArticle() {
  const updateAarticleResponse = await fetch(`${BASE_URL}`);
}
