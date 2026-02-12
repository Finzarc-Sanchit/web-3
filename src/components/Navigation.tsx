import React from 'react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { MenuToggle } from '@/components/ui/menu-toggle';

export function Navigation() {
  const [open, setOpen] = React.useState(false);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  // Prevent body scroll when menu is open on mobile
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav className="fixed left-2 lg:left-[200px] top-5 z-[100] w-full bg-transparent px-0 py-5 transition-all duration-300">
      <div className="relative z-[1] mx-auto flex max-w-[1400px] items-center justify-between px-12 md:px-6 sm:px-1.5">
        <div className="flex cursor-pointer items-baseline gap-0.5 text-[1.75rem] font-extrabold tracking-[-0.5px] transition-transform duration-300 hover:scale-105 md:text-2xl sm:text-xl">
          <span className="text-white">Finzarc</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex list-none gap-10 p-0 m-0">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-0 py-2 text-[0.95rem] font-medium tracking-[0.3px] text-white/90 no-underline transition-all duration-300 hover:text-white before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-indigo-400 before:transition-[width] before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)] hover:before:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <Sheet open={open} onOpenChange={setOpen}>
          <button
            type="button"
            className="lg:hidden bg-white/5 border border-white/15 text-white/90 hover:text-white hover:bg-white/10 hover:border-white/25 rounded-md p-2 transition-all duration-300 flex items-center justify-center min-w-[40px] -ml-4 sm:-ml-2"
            onClick={() => setOpen(true)}
            aria-label="Toggle menu"
          >
            <MenuToggle
              strokeWidth={2.5}
              open={open}
              onOpenChange={() => { }} // Controlled by Sheet
              className="size-6 pointer-events-none"
              stroke="currentColor"
            />
          </button>
          <SheetContent
            className="bg-gradient-to-br from-[#1a102b] via-[#241047] to-[#361a5f] gap-0 backdrop-blur-xl border-white/10 w-[280px]"
            showClose={false}
            side="right"
          >
            <div className="grid gap-y-5 overflow-y-auto px-6 pt-32 pb-10 mx-4 place-items-center text-center">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="relative px-0 py-3 text-base font-medium tracking-[0.3px] text-white/90 no-underline transition-all duration-300 hover:text-white before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-indigo-400 before:transition-[width] before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)] hover:before:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

