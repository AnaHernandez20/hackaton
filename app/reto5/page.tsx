"use client";

import { useState } from "react";

export default function Contraseña() {
    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(10);
    const [useSpecialChars, setUseSpecialChars] = useState(false);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useLowerCase, setUseLowerCase] = useState(true);
    const [useUpperCase, setUseUpperCase] = useState(true);
    const [successMessage, setSuccessMessage] = useState("");

    const generatePassword = () => {
        let charset = "";
        let newPassword = "";

        if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (useNumbers) charset += "0123456789";
        if (useSpecialChars) charset += "!@#$%^&*()";

        if (charset === "") return;

        for (let i = 0; i < passwordLength; i++) {
            newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
        }

        setPassword(newPassword);
        setSuccessMessage("Copiar");
    };

    const copyToClipboard = () => {
        if (!password) return;
        navigator.clipboard.writeText(password);
        setSuccessMessage("Copiado en el portapapeles");
    };

    return (
        <div className="flex justify-center items-center p-4">
            <div className="w-full max-w-md">
                
                <h1 className="text-xl font-bold text-center uppercase mb-4 text-black">Generador de Contraseñas</h1>

                <div className="flex items-center gap-2 mb-2">
                    <div className="flex-1 flex items-center border border-gray-300 px-3 py-1">
                        <input
                            type="text"
                            value={password}
                            readOnly
                            className="w-full outline-none bg-transparent text-black font-medium"
                        />
                        <button onClick={generatePassword} className="text-black text-xl ml-2 hover:opacity-70">
                            ↻
                        </button>
                    </div>
                    
                    <button
                        onClick={copyToClipboard}
                        className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-1.5 font-bold flex items-center gap-1 border border-gray-300"
                    >
                        {successMessage || "Copy"}
                    </button>
                </div>
                
                <p className="text-black text-sm font-semibold mb-6">Medio</p>

                <div className="mb-6">
                    <label className="block mb-2 font-medium text-black">
                        Longitud de la contraseña: {passwordLength}
                    </label>
                    <input
                        type="range"
                        min="6"
                        max="32"
                        value={passwordLength}
                        onChange={(e) => setPasswordLength(Number(e.target.value))}
                        className="w-full cursor-pointer"
                    />
                </div>

                <div className="space-y-4 text-black font-medium">
                    <label className="flex justify-between items-center cursor-pointer">
                        Mayúsculas
                        <input type="checkbox" checked={useUpperCase} onChange={(e) => setUseUpperCase(e.target.checked)} className="w-4 h-4 cursor-pointer" />
                    </label>
                    <label className="flex justify-between items-center cursor-pointer">
                        Minúsculas
                        <input type="checkbox" checked={useLowerCase} onChange={(e) => setUseLowerCase(e.target.checked)} className="w-4 h-4 cursor-pointer" />
                    </label>
                    <label className="flex justify-between items-center cursor-pointer">
                        Números
                        <input type="checkbox" checked={useNumbers} onChange={(e) => setUseNumbers(e.target.checked)} className="w-4 h-4 cursor-pointer" />
                    </label>
                    <label className="flex justify-between items-center cursor-pointer">
                        Caracteres Especiales
                        <input type="checkbox" checked={useSpecialChars} onChange={(e) => setUseSpecialChars(e.target.checked)} className="w-4 h-4 cursor-pointer" />
                    </label>
                </div>
            </div>
        </div>
    );
};
