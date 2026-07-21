import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-800">
          Café de origen · Nayarit
        </p>

        <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight text-stone-900 sm:text-7xl">
          Brisa del Pacífico
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
          Café preparado con calma, sabor y carácter. Ordena desde tu celular y
          recoge cuando esté listo.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/menu"
            className="rounded-2xl bg-amber-800 px-7 py-4 text-center text-lg font-semibold text-white transition hover:bg-amber-900"
          >
            Ordenar ahora
          </Link>

          <a
            href="#como-funciona"
            className="rounded-2xl border border-stone-300 bg-white px-7 py-4 text-center text-lg font-semibold text-stone-800 transition hover:bg-stone-50"
          >
            Cómo funciona
          </a>
        </div>

        <div
          id="como-funciona"
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-amber-800">01</p>
            <h2 className="mt-2 text-xl font-semibold text-stone-900">
              Elige tu café
            </h2>
            <p className="mt-2 text-stone-600">
              Revisa el menú y selecciona tu bebida.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-amber-800">02</p>
            <h2 className="mt-2 text-xl font-semibold text-stone-900">
              Personaliza
            </h2>
            <p className="mt-2 text-stone-600">
              Escoge tamaño, tipo de leche y extras.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-amber-800">03</p>
            <h2 className="mt-2 text-xl font-semibold text-stone-900">
              Recoge
            </h2>
            <p className="mt-2 text-stone-600">
              Recibe tu número de pedido y espera a que esté listo.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}