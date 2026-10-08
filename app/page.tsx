import Link from "next/link";

const retos = [
  { numero: 1, ruta: "/reto1" },
  { numero: 2, ruta: "/reto2" },
  { numero: 3, ruta: "/reto3" },
  { numero: 4, ruta: "/reto4" },
  { numero: 5, ruta: "/reto5" },
];

export default function HomePage() {
  return (
    <div>
      <h1>Para visualizar cada reto, elija su enlace:</h1>
      <ol>
        <li><Link href="/reto1">Reto 1: /reto1</Link></li>
        <li><Link href="/reto2">Reto 2: /reto2</Link></li>
        <li><Link href="/reto3">Reto 3: /reto3</Link></li>
        <li><Link href="/reto4">Reto 4: /reto4</Link></li>
        <li><Link href="/reto5">Reto 5: /reto5</Link></li>
      </ol>
    </div>
  );
}
