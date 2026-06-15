import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ocean">
          Page not found
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-ink">
          This route has moved.
        </h1>
        <p className="mt-4 text-slate-600">
          Start from the homepage or explore visa services.
        </p>
        <Link
          className="mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
          href="/"
        >
          Go home
        </Link>
      </div>
    </section>
  );
}
