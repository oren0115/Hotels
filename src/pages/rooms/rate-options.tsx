import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { RATE_CATEGORIES } from "@/data";
import { formatCurrency } from "@/utils";
import { ROUTES } from "@/constants";

export const RateOptions = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Pilihan Tarif</h2>
        <p className="text-center text-gray-500 mb-8">
          Sesuaikan pengalaman menginap Anda dengan memilih paket tarif yang paling cocok.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RATE_CATEGORIES.map((rate) => (
            <Card key={rate.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold mb-2">{rate.name}</h3>
                <p className="text-2xl font-bold text-gold mb-4">
                  {formatCurrency(rate.price)}
                </p>
                <p className="text-gray-600 mb-4">{rate.description}</p>
                <ul className="space-y-2 mb-6">
                  {rate.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="text-gold mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  onClick={() => navigate(ROUTES.ROOM_BOOK(id || "", rate.id))}>
                  Pilih Tarif
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RateOptions;
