async function getMeteoFromApi() {
    try {
    const response = await fetch("")
    const data = await response.json
    console.log(data);
    
    } catch (error) {
        console.log(error);
        
    }
}

getMeteoFromApi()
console.log("Programme Principale!");
