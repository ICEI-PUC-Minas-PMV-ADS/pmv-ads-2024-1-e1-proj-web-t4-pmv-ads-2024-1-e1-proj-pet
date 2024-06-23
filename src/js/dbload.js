const database = JSON.parse(localStorage.getItem("database")) || [];
const authentication = JSON.parse(localStorage.getItem("authentication")) || [];
const authenticatedSession = JSON.parse(sessionStorage.getItem("authSession")) || [];

document.addEventListener("DOMContentLoaded", function () {
  if (database !== null && database.length === 0) {
    fetchData(database);
  }

  if (authenticatedSession !== null && authenticatedSession.length === 0) {
    sessionStorage.setItem("authSession", JSON.stringify(authenticatedSession));
  }
});

async function fetchData(database) {
  try {
    const response = await fetch("db/database.json");
    if (!response.ok) {
      throw new Error("Could not fetch resource.");
    }
    let data = await response.json();
    for (let index = 0; index < data.length; index++) {
      database.push(data[index]);
    }
    localStorage.setItem("database", JSON.stringify(database));
    await createAuthetication(database);
  } catch (error) {
    console.error(error);
  }
}

async function createAuthetication(database) {
  try {
    return await new Promise (() => {
      for (let index = 0; index < database.length; index++) {
        const authenticationHash = {
          id: index + 1,
          hash: md5(
            database[index].id + database[index].email + database[index].senhaHash
          ),
        };
        authentication.push(authenticationHash);
      }
      localStorage.setItem("authentication", JSON.stringify(authentication));
    });
  } catch (error) {
    console.error(error);
  }
}
