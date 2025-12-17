import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Icon } from "@iconify/react";

const footerLinks = {
  hotel: [
    { name: "Tentang Kami", href: "/about" },
    { name: "Karir", href: "/careers" },
  ],
  rooms: [
    { name: "Kamar Standard Twin", href: "/rooms" },
    { name: "Kamar Standard", href: "/rooms" },
    { name: "Kamar dengan Pemandangan Standard", href: "/rooms" },
    { name: "Kamar Deluxe", href: "/rooms" },
  ],
  facilities: [
    { name: "Kolam Renang", href: "/facilities" },
    { name: "Restoran", href: "/facilities" },
    { name: "Spa & Wellness", href: "/facilities" },
    { name: "Ruang Konferensi", href: "/facilities" },
  ],
  support: [
    { name: "Pusat Bantuan", href: "/help" },
    { name: "Syarat Layanan", href: "/terms" },
    { name: "Kebijakan Privasi", href: "/privacy" },
    { name: "Hubungi Kami", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: "lucide:facebook", href: "https://facebook.com" },
  { icon: "lucide:twitter", href: "https://twitter.com" },
  { icon: "lucide:instagram", href: "https://instagram.com" },
  { icon: "lucide:linkedin", href: "https://linkedin.com" },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Hotel Kami</h3>
            <ul className="space-y-2">
              {footerLinks.hotel.map((link) => (
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
              {footerLinks.rooms.map((link) => (
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
              {footerLinks.facilities.map((link) => (
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
              {footerLinks.support.map((link) => (
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
          <p className="text-gray-600">
            ©2025 Tangerang Hotels. Semua hak dilindungi.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gold transition-colors">
                <Icon icon={link.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
