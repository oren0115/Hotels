import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "./ui/button";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Hotel Kami", path: "/" },
    { name: "Jelajahi", path: "/explore" },
    { name: "Kamar & Tarif", path: "/rooms" },
    { name: "Fasilitas", path: "/facilities" },
    { name: "Hubungi Kami", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <button
          className="flex items-center gap-2"
          onClick={() => navigate("/")}
          aria-label="Go to home"
        >
          <AcmeLogo />
          <span className="font-bold text-lg">Tangerang Hotels</span>
        </button>

        <div className="hidden sm:flex items-center gap-6">
          {menuItems.map((item) => (
            <RouterLink
              key={item.path}
              to={item.path}
              className="font-medium text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.name}
            </RouterLink>
          ))}
        </div>

        <div className="sm:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span className="sr-only">
              {isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            </span>
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
            </div>
          </Button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-md border-t border-border">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-2">
            {menuItems.map((item) => (
              <RouterLink
                key={item.path}
                to={item.path}
                className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </RouterLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
