import ProductCard from "@/components/ProductCard";
import { productos } from "@/data/productos";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-amber-900">
          Menú
        </h1>

        <p className="mt-2 text-stone-600">
          Elige tu café.
        </p>

        <div className="mt-8 grid gap-4">
          {productos.map((producto) => (
            <ProductCard
              key={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
            />
          ))}
        </div>
      </div>
    </main>
  );
}