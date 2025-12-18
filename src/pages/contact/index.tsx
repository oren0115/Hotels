import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { Icon } from "@iconify/react";
import { CONTACT_INFO, CONTACT_SUBJECTS } from "@/data";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Nama wajib diisi";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Silakan masukkan alamat email yang valid";
    }

    if (!formData.subject) {
      newErrors.subject = "Subjek wajib diisi";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Pesan wajib diisi";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulasi panggilan API
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Formulir terkirim:", formData);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Kesalahan saat mengirim formulir:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    // Hapus error saat pengguna mulai mengetik
    if (errors[key as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [key]: "" }));
    }
  };

  return (
    <main className="pt-[100px] pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Punya pertanyaan? Kami senang mendengar dari Anda. Kirimkan pesan
            dan kami akan merespons secepatnya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {CONTACT_INFO.map((info, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-full bg-gold/10 mb-4">
                    <Icon icon={info.icon} className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <a
                    href={info.link}
                    className="text-gray-500 hover:text-gold transition-colors">
                    {info.content}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            {isSuccess ? (
                <div className="text-center py-8">
                  <div className="p-3 rounded-full bg-emerald-500/10 mb-4 inline-block">
                    <Icon icon="lucide:check" className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pesan Terkirim!</h3>
                <p className="text-gray-500 mb-4">
                  Terima kasih telah menghubungi kami. Kami akan segera
                  menghubungi Anda kembali.
                </p>
                <Button onClick={() => setIsSuccess(false)}>
                  Kirim Pesan Lagi
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Nama</label>
                  <Input
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="Masukkan email Anda"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium">Subjek</label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) => handleChange("subject", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih subjek" />
                    </SelectTrigger>
                    <SelectContent>
                      {CONTACT_SUBJECTS.map((subject) => (
                        <SelectItem key={subject.key} value={subject.key}>
                          {subject.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.subject && (
                    <p className="text-xs text-red-500">{errors.subject}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium">Pesan</label>
                  <Textarea
                    placeholder="Masukkan pesan Anda"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={4}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting && <Spinner size="sm" />}
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Contact;
