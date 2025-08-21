export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-10 flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2"><div className="h-[55px] w-[55px]">
              <img src="/c8698afd5793db87ff195789fb2f01f86d414ba3.png" className="h-full w=full" alt="Logo" />
            </div>
            <span className="font-semibold text-[28px] text-[#F25417]">GridSpace</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-center text-sm text-slate-600 md:text-left">
            <a href="#about" className="hover:text-slate-900">
              About
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
            <a href="#terms" className="hover:text-slate-900">
              Terms
            </a>
            <a href="#investors" className="hover:text-slate-900">
              Investors and Partners
            </a>
          </nav>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 md:text-left">
          <p>Copyright © 2025, GridSpace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
