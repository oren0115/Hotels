import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto py-16 m-5">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tentang Kami</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Temukan kisah kami dan komitmen terhadap keunggulan dalam perhotelan
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h2 className="text-2xl font-semibold mb-4">Kisah Kami</h2>
              <p className="text-gray-600">
                Didirikan dengan visi untuk mendefinisikan ulang kemewahan dalam
                perhotelan, hotel kami telah melayani tamu dengan perhatian dan
                pelayanan istimewa sejak awal berdirinya. Kami percaya dalam
                menciptakan pengalaman berkesan yang tak terlupakan.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h2 className="text-2xl font-semibold mb-4">Misi Kami</h2>
              <p className="text-gray-600">
                Memberikan pengalaman perhotelan yang tiada tanding melalui
                pelayanan yang dipersonalisasi, akomodasi mewah, dan komitmen
                terhadap keunggulan di setiap aspek operasional kami.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold mb-4">Nilai-Nilai Kami</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Keunggulan</h3>
                  <p className="text-gray-600">
                    Kami berupaya memberikan layanan terbaik dalam setiap hal
                    yang kami lakukan
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Integritas</h3>
                  <p className="text-gray-600">
                    Kami menjalankan bisnis dengan kejujuran dan keterbukaan
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Inovasi</h3>
                  <p className="text-gray-600">
                    Kami terus berinovasi dan meningkatkan layanan kami secara
                    berkelanjutan
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
