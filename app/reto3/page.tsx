"use client"

import { useState } from "react";

export default function Formulario() {

    
    const [username, setUsername] = useState("");
    const [nombreCompleto, setFullName] = useState("");
    const [edad, setEdad] = useState("");

    const [errorUsername, setErrorUsername] = useState("");
    const [errorFullName, setErrorFullName] = useState("");
    const [errorAge, setErrorAge] = useState("");

    //Valido el nombre de usuario
    const validarUsername = (value: string) => {
        if (value.length < 3) {
            setErrorUsername("El nombre de usuario debe tener al menos 3 caracteres.");
            return false;
        } else {
            setErrorUsername("");
            return true;
        }
    }

    //Valido el nombre completo
    const validarFullName = (value: string) => {
        if (value.length < 3) {
            setErrorFullName("El nombre completo debe tener al menos 3 caracteres.");
            return false;
        }
        else if (/\d/.test(value)) {
            setErrorFullName("El nombre completo no puede contener números.");
            return false;
        }
        else {
            setErrorFullName("");
            return true;
        }
    }

    //Valido la edad
    const validarAge = (value: string) => {
        const ageNumber = Number(value);

        if (value.trim() === "" || !Number.isInteger(ageNumber)) {
            setErrorAge("La edad debe ser un número válido.");
            return false;
        }
        else if (ageNumber < 0) {
            setErrorAge("La edad no puede ser negativa.");
            return false;
        }
        else {
            setErrorAge("");
            return true;
        }
    }

    //Valido todos los campos cuando se envia el formulario
    const enviarFormulario = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validoUsername = validarUsername(username);
        const validoFullName = validarFullName(nombreCompleto);
        const validoAge = validarAge(edad);

        if (validoUsername && validoFullName && validoAge) {
            alert("Formulario enviado correctamente");
        }
    }

    return (
        <div className="form-container grid grid-cols-1 md:grid-cols-2 gap-8 p-6">

            <form
                onSubmit={enviarFormulario}
                className="grid grid-cols-1 gap-4"
            >
                <div>
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        className={`border ${errorUsername ? 'border-red-500' : 'border-[#e8e2de]'}`}
                        onChange={(e) => setUsername(e.target.value)}
                        onBlur={() => validarUsername(username)}
                    />
                    {errorUsername && <p className="text-red-500 text-xs mt-1">{errorUsername}</p>}
                </div>

                <div>
                    <label htmlFor="fullName">Nombre completo:</label>
                    <input
                        type="text"
                        id="fullName"
                        value={nombreCompleto}
                        className={`border ${errorFullName ? 'border-red-500' : 'border-[#e8e2de]'}`}
                        onChange={(e) => setFullName(e.target.value)}
                        onBlur={() => validarFullName(nombreCompleto)}
                    />
                    {errorFullName && <p className="text-red-500 text-xs mt-1">{errorFullName}</p>}
                </div>

                <div>
                    <label htmlFor="age">Edad:</label>
                    <input
                        type="text"
                        id="age"
                        value={edad}
                        className={`border ${errorAge ? 'border-red-500' : 'border-[#e8e2de]'}`}
                        onChange={(e) => setEdad(e.target.value)}
                        onBlur={() => validarAge(edad)}
                    />
                    {errorAge && <p className="text-red-500 text-xs mt-1">{errorAge}</p>}
                </div>

                <button type="submit" className="border hover:bg-[#e8e2de]">
                    Enviar
                </button>

            </form>

            <div className="submitted-data flex flex-col gap-2 p-4">
                <h1 className="text-lg font-bold">Datos ingresados:</h1>
                <p> - Nombre de usuario: {username}</p>
                <p> - Nombre completo: {nombreCompleto}</p>
                <p> - Edad: {edad}</p>
            </div>

        </div>
    );
}