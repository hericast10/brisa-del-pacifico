type ProductCardProps = {
  nombre: string;
  descripcion: string;
  precio: number;
};

export default function ProductCard({
  nombre,
  descripcion,
  precio,
}: ProductCardProps) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-stone-900">
            {nombre}
          </h2>

          <p className="mt-2 text-stone-600">
            {descripcion}
          </p>
        </div>

        <p className="font-semibold text-amber-800">
          ${precio}
        </p>
      </div>

      <button
        type="button"
        className="mt-5 rounded-xl bg-amber-800 px-5 py-3 font-medium text-white transition hover:bg-amber-900"
      >
        Agregar
      </button>
    </article>
  );
}