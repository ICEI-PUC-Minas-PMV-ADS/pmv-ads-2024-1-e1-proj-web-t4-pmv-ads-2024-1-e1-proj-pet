const databaseTest = JSON.parse(localStorage.getItem("database"));

if (databaseTest === null) {
    fetchData();
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