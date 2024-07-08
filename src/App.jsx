import "./App.css";
import ListaUsers from "./components/ListaUsers";
import Formulario from "./components/Formulario";
import { useState, useEffect } from "react";

function App() {
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );
    async function getUsersApi() {
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            if (!res.ok) throw new Error("Error al solicitar usuarios");
            const datos = await res.json();
            setUsers(datos);
        } catch (error) {
            console.error(error);
        }
    }
    function postUser(newUser) {
        setUsers([...users, newUser]);
    }
    useEffect(() => {
        if (users.length < 1) {
            getUsersApi();
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);
    return (
        <>
            <h1 className="titulo">
                Prueba para frontend bootcamp for globant
            </h1>
            <ListaUsers users={users} setUsers={setUsers} />
            <Formulario postUser={postUser} />
        </>
    );
}

export default App;
