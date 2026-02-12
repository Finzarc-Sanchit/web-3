export function Navigation() {
  return (
    <nav className="fixed left-50 top-5 z-[100] w-full bg-transparent px-0 py-5 transition-all duration-300">
      <div className="relative z-[1] mx-auto flex max-w-[1400px] items-center justify-between px-12 md:px-6 sm:px-4">
        <div className="flex cursor-pointer items-baseline gap-0.5 text-[1.75rem] font-extrabold tracking-[-0.5px] transition-transform duration-300 hover:scale-105 md:text-2xl sm:text-xl">
          <span className="text-white">Finzarc</span>
        </div>
        <ul className="flex list-none gap-10 p-0 m-0 md:gap-6 sm:gap-4">
          <li>
            <a
              href="#home"
              className="relative px-0 py-2 text-[0.95rem] font-medium tracking-[0.3px] text-white/90 no-underline transition-all duration-300 hover:text-white before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-indigo-400 before:transition-[width] before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)] hover:before:w-full md:text-sm sm:text-[0.85rem]"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="relative px-0 py-2 text-[0.95rem] font-medium tracking-[0.3px] text-white/90 no-underline transition-all duration-300 hover:text-white before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-indigo-400 before:transition-[width] before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)] hover:before:w-full md:text-sm sm:text-[0.85rem]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="relative px-0 py-2 text-[0.95rem] font-medium tracking-[0.3px] text-white/90 no-underline transition-all duration-300 hover:text-white before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-indigo-400 before:transition-[width] before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)] hover:before:w-full md:text-sm sm:text-[0.85rem]"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative px-0 py-2 text-[0.95rem] font-medium tracking-[0.3px] text-white/90 no-underline transition-all duration-300 hover:text-white before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-indigo-400 before:transition-[width] before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)] hover:before:w-full md:text-sm sm:text-[0.85rem]"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

