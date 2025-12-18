import { Link as RouteLink } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Icon } from "@iconify/react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/data";
import { APP_CONFIG } from "@/constants";

export const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Hotel Kami</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.hotel.map((link) => (
                <li key={link.name}>
                  <RouteLink
                    to={link.href}
                    className="text-gray-600 hover:text-gold transition-colors">
                    {link.name}
                  </RouteLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kamar</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.rooms.map((link) => (
                <li key={link.name}>
                  <RouteLink
                    to={link.href}
                    className="text-gray-600 hover:text-gold transition-colors">
                    {link.name}
                  </RouteLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Fasilitas</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.facilities.map((link) => (
                <li key={link.name}>
                  <RouteLink
                    to={link.href}
                    className="text-gray-600 hover:text-gold transition-colors">
                    {link.name}
                  </RouteLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Dukungan</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.name}>
                  <RouteLink
                    to={link.href}
                    className="text-gray-600 hover:text-gold transition-colors">
                    {link.name}
                  </RouteLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">{APP_CONFIG.copyright}</p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gold transition-colors"
                aria-label={link.label}>
                <Icon icon={link.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
