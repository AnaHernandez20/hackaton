"use client"

import { useState } from "react";

export default function Formulario() {

    //creamos estados
    const [username, setUsername] = useState("");
    const [fullName, setFullName] = useState("");
    const [age, setAge] = useState("");

    const [errorUsername, setErrorUsername] = useState("");
    const [errorFullName, setErrorFullName] = useState("");
    const [errorAge, setErrorAge] = useState("");

    const validarUsername = (value: string) => {
        setUsername(value);
        if (value.length < 3) {
            setErrorUsername("El nombre de usuario debe tener al menos 3 caracteres.");
        } else {
            setErrorUsername("");
        }
    }

    const validarFullName = (value: string) => {
        setFullName(value);
        if (value.length < 3) {
            setErrorFullName("El nombre completo debe tener al menos 3 caracteres.");
        } else {
            setErrorFullName("");
        }
    } 

    const validarAge = (value: string) => {
        setAge(value);
        const ageNumber = parseInt(value);
        
        if (isNaN(ageNumber)) {
            setErrorAge("La edad debe ser un número válido.");
        } else if (ageNumber < 0) {
            setErrorAge("La edad no puede ser negativa.");
        } else {
            setErrorAge("");
        }
    }


    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => validarUsername(e.target.value)}
                    />
                    {errorUsername && <p style={{ color: "red" }}>{errorUsername}</p>}
                </div>
                
                <div>
                    <label htmlFor="fullName">Nombre completo:</label>
                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => validarFullName(e.target.value)}
                    />
                    {errorFullName && <p style={{ color: "red" }}>{errorFullName}</p>}
                </div>
                
                <div>
                    <label htmlFor="age">Edad:</label>
                    <input
                        type="text"
                        id="age"
                        value={age}
                        onChange={(e) => validarAge(e.target.value)}
                    />
                    {errorAge && <p style={{ color: "red" }}>{errorAge}</p>}
                </div>
                
                <button type="submit">Enviar</button>
            </form>

            <div>
                <h2>Datos ingresados:</h2>
                <p>Nombre de usuario: {username}</p>
                <p>Nombre completo: {fullName}</p>
                <p>Edad: {age}</p>
            </div>
        </>
    );
}