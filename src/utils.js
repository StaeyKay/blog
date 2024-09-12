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
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGI4Y2VlOGJiM2M3NzA3OTRkMmM4YiIsImlhdCI6MTcyNjE3NzUxOSwiZXhwIjoxNzI2MTg4MzE5fQ.l4PC8Iv9WVQoYXwwGPoDN1AcA6oIIH-RWJtDIoP7n94";

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

export async function saveArticle(article) {
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
