const databaseTest = JSON.parse(localStorage.getItem("database"));
const authenticationTest = JSON.parse(localStorage.getItem("authentication"));
const authenticatedSessionTest = JSON.parse(sessionStorage.getItem("authSession"));

if (databaseTest === null) {
    fetchData();
}

if (authenticationTest === null) {
    const authentication = JSON.parse(localStorage.getItem("authentication")) || [];
    const database = JSON.parse(localStorage.getItem("database"));
    for (let index = 0; index < database.length; index++) {
        const authenticationHash = {
            id: index + 1,
            hash: md5(database[index].id + database[index].email + database[index].senha)
        }
        console.log(authenticationHash.id);
        console.log(authenticationHash.hash);
        authentication.push(authenticationHash);
    }
    localStorage.setItem("authentication", JSON.stringify(authentication));
}

if (authenticatedSessionTest === null) {
    const authSession = JSON.parse(sessionStorage.getItem("authSession")) || [];
    sessionStorage.setItem("authSession", JSON.stringify(authSession));
}

async function fetchData() {
    try {
        const response = await fetch("db/database.json");
        if(!response.ok) {
            throw new Error ("Could not fetch resource.")
        }
        data = await response.json();
        const database = JSON.parse(localStorage.getItem("database")) || [];
        for (let index = 0; index < data.length; index++) {
            database.push(data[index]);     
        }
        localStorage.setItem("database", JSON.stringify(database));
    } catch (error) {
        console.error(error);
    }
}