//Creo el componente Navbar
export default function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-gray-800 text-white p-4">

            {/*Pongo el nombre del navbar*/}
            <h1 className="font-bold text-xl">Navbar</h1>

            {/*Creo los enlaces de navegacion pero como ahorita no tengo datos para mostrar, dejo /*/}
            <div className="flex gap-5">
                <a href="/">Home</a>
                <a href="/">Features</a>
                <a href="/">Pricing</a>
                <a href="/">About</a>
            </div>

            {/*Creo la cajita de busqueda*/}
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-white text-black p-2 rounded"
                />

                <button className="border border-cyan-500 text-cyan-400 px-3 rounded">
                    Search
                </button>
            </div>

        </nav>
    );
}
