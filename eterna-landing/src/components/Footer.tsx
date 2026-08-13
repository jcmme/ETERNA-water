export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="text-sm font-extrabold tracking-[0.2em]">ETERNA WATER</p>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
          <a href="#contacto" className="hover:text-white">
            Contacto
          </a>
          <a href="#terminos" className="hover:text-white">
            Términos
          </a>
          <a href="#privacidad" className="hover:text-white">
            Privacidad
          </a>
        </nav>

        <p className="mt-10 text-xs text-white/40">
          © 2026 ETERNA WATER. Todos los derechos reservados.
        </p>

        <p className="mt-6 text-sm text-white/60">Pureza que inspira.</p>
      </div>
    </footer>
  );
}
