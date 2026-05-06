export function Footer() {
  return (
    <footer className="relative z-10 border-t border-accent/10 mx-3 sm:mx-5 px-2 sm:px-4 md:px-6 lg:px-8 py-8 mt-16 md:mt-24">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <span className="font-display font-black tracking-[0.2em] uppercase text-dim text-brand">
          CALIBRESOUTH
        </span>
        <span className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-dim">
          © 2026 CalibreSouth · All rights reserved
        </span>
        <span className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-dim sm:text-right">
          Kozhikode, Kerala
        </span>
      </div>
    </footer>
  )
}
