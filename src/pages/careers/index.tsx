import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { JOB_OPENINGS } from "@/data";

export function Careers() {
  return (
    <div className="container mx-auto py-16 m-5">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Karier</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Bergabunglah dengan tim kami dan jadilah bagian dari sesuatu yang luar
          biasa
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold mb-4">
                Mengapa Bekerja Bersama Kami
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p className="text-gray-600">
                    Gaji dan paket tunjangan yang kompetitif
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p className="text-gray-600">
                    Peluang pengembangan profesional
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p className="text-gray-600">
                    Lingkungan kerja yang kolaboratif dan inklusif
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p className="text-gray-600">
                    Inisiatif keseimbangan kerja dan kehidupan
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Budaya Kami</h2>
              <p className="text-gray-600 mb-4">
                Kami menumbuhkan budaya inovasi, rasa hormat, dan pembelajaran
                berkelanjutan. Anggota tim kami adalah aset terbesar kami, dan
                kami berinvestasi dalam pertumbuhan serta pengembangan mereka.
              </p>
              <p className="text-gray-600">
                Bergabunglah bersama kami untuk menciptakan pengalaman luar
                biasa bagi para tamu sambil membangun karier yang memuaskan di
                bidang perhotelan.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Lowongan Saat Ini</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {JOB_OPENINGS.map((job, index) => (
              <div key={index}>
                <Card>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-xl font-medium mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-2">
                      Departemen: {job.department}
                    </p>
                    <p className="text-gray-600 mb-2">Lokasi: {job.location}</p>
                    <p className="text-gray-600 mb-4">Tipe: {job.type}</p>
                    <Button>Lamar Sekarang</Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
