"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { productos } from "@/data/productos";

type ProductoCarrito = {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
};

export default function MenuPage() {
  const [carrito, setCarrito] = useState<ProductoCarrito[]>([]);

  function agregarAlCarrito(producto: {
    id: number;
    nombre: string;
    precio: number;
  }) {
    setCarrito((carritoActual) => {
      const productoExistente = carritoActual.find(
        (item) => item.id === producto.id
      );

      if (productoExistente) {
        return carritoActual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [
        ...carritoActual,
        {
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          cantidad: 1,
        },
      ];
    });
  }

  const cantidadTotal = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  return (
    <main className="min-h-screen bg-stone-100 px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 rounded-xl bg-amber-800 p-4 text-white">
          🛒 Carrito ({cantidadTotal})
        </div>

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
              onAgregar={() => agregarAlCarrito(producto)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}