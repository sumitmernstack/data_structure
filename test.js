async function fetchData() {
    console.log("Starting the DB call...");  // 1. Logs immediately

    const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'John Doe' });
        }, 2000);  // Simulates 2 seconds DB call
    });
console.log("test")
    console.log("DB call finished, data:", data);  // 3. Logs after 2 seconds, when DB call is done
}

fetchData();

console.log("This will run before the DB call finishes.");  // 2. Logs immediately after fetchData is called
