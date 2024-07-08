import { useState } from "react";

function Formulario({ postUser }) {
    const initial = {
        id: generateRandomNumber(),
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    };
    const [info, setInfo] = useState(initial);
    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function handleChange(e) {
        setInfo({ ...info, [e.target.name]: e.target.value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        postUser(info);
        setInfo(initial);
    }
    return (
        <form onSubmit={handleSubmit} className="formulario">
            <input
                name="name"
                value={info.name}
                onChange={handleChange}
                type="text"
                placeholder="Nombre y apellido"
            />
            <input
                name="username"
                value={info.username}
                onChange={handleChange}
                type="text"
                placeholder="Username"
            />
            <input
                name="email"
                value={info.email}
                onChange={handleChange}
                type="email"
                placeholder="Correo"
            />
            <input
                name="phone"
                value={info.phone}
                onChange={handleChange}
                type="number"
                placeholder="Telefono"
            />
            <input
                name="website"
                value={info.website}
                onChange={handleChange}
                type="text"
                placeholder="Website"
            />
            <button>Agregar usuario</button>
        </form>
    );
}

export default Formulario;
