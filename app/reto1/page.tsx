//importo mi navbar
import Navbar from "@/components/navbar";

//Creo la pagina del reto 1
export default function Reto1Page() {{

    //al buscar:
    //si lo quiero voltear pa arriba uso rotate-180
    //si lo quiero voltear de lado uso scale-x-[-1] mt-5
}

    return (
        <div className="p-8">

            {/*Muestro el navbar normalito de toda la vida*/}
            <Navbar />

            {/*Muestro el navbar pero volteado de lado*/}
            <div className="scale-x-[-1] mt-5">
                <Navbar />
            </div>

        </div>
    );
}