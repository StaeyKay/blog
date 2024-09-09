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

export async function saveArticle(article) {
  const createArticleResponse = await fetch(`${BASE_URL}/users/articles`, {
    method: "POST",
    body: article,
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGI4Y2VlOGJiM2M3NzA3OTRkMmM4YiIsImlhdCI6MTcyNTg5MjYxNiwiZXhwIjoxNzI1OTAzNDE2fQ.ogUvBYB3K1jJZ7QTFeXm0onFUqccBzUSWKuihk9oWcY",
    },
  });

  const response = await createArticleResponse.json();
  return response;
}

export async function getArticles(article) {}
