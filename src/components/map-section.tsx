import React from "react";
import { Card, CardContent } from "./ui/card";
import { Icon } from "@iconify/react/dist/iconify.js";

export const MapSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Lokasi</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lokasi kami berada di titik strategis kota, hanya beberapa menit
            dari pusat transportasi utama. Akses mudah dari bandara, stasiun
            kereta, dan halte bus menjadikan perjalanan Anda nyaman dan efisien.
          </p>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-[329px] bg-gray-100 rounded-lg overflow-hidden relative">
                <iframe
                  title="Lokasi Tangerang Hotels di Google Maps"
                  src="https://www.google.com/maps?q=Tangerang%20Hotel&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Cara ke Sini</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon
                      icon="lucide:plane"
                      className="w-5 h-5 text-gold mt-1"
                    />
                    <div>
                      <p className="font-medium">Dari Bandara</p>
                      <p className="text-gray-600">
                        20 menit dengan taksi (15 km)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon
                      icon="lucide:train"
                      className="w-5 h-5 text-gold mt-1"
                    />
                    <div>
                      <p className="font-medium">Dari Stasiun Kereta</p>
                      <p className="text-gray-600">
                        10 menit dengan taksi (3 km)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon
                      icon="lucide:bus"
                      className="w-5 h-5 text-gold mt-1"
                    />
                    <div>
                      <p className="font-medium">Transportasi Umum</p>
                      <p className="text-gray-600">
                        Halte bus dalam radius 100m
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Tempat Wisata Terdekat
                </h3>
            <ul className="space-y-2 text-gray-600">
                  <li>• Pusat Kota (5 menit jalan kaki)</li>
                  <li>• Pusat Perbelanjaan (10 menit jalan kaki)</li>
                  <li>• Pusat Konvensi (15 menit jalan kaki)</li>
                  <li>• Kawasan Bersejarah (20 menit jalan kaki)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
