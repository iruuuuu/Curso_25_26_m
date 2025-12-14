
const fetching = async (endpoint) => {
    //variables de entorno 
    const PORT =  import.meta.env.VITE_PORT || 1492;
    const URL= import.meta.env.VITE_URL||"http://localhost";
    const URL_PORT = `${URL}:${PORT}`;

    try {
        const response = await fetch(`${URL_PORT}/${endpoint}`);
        if (!response.ok) {
            throw new Error("No se ha podido cargar el json");
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.log("Error:" ,err)
        throw err;
    }
};

export async function getData(endpoint) {
    const URL = "http://localhost:3000"; // json-server --watch db.json --port 3000

    try {
        const res = await fetch(`${URL}/${endpoint}`);
        if (!res.ok) throw new Error("Error al traer datos");

        return await res.json();

    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
}

export { fetching };