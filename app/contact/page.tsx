"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Mail, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    tgOrPhone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let response = await fetch(`${process.env.API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    response = await response.json();
    setIsSubmitting(false);

    if ((response as any).success) {
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            Bog'lanish <span className="gradient-text">uchun</span>
          </h1>
          <p className="text-muted-foreground max-w-[700px] md:text-lg">
            Loyiha yoki hamkorlik bo'yicha taklifingiz bormi? Sizni eshitishdan
            xursandman!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Menga xabar yuboring</CardTitle>
              <CardDescription>
                Quyidagi formani to'ldiring va men imkon qadar tez sizga aloqaga
                chiqaman.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-md mb-4">
                  Xabaringiz menga kelib tushdi! Tez orada sizga aloqaga
                  chiqaman!.
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ism *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Ismingiz"
                    required
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tgOrPhone">
                    Telegram yoki telefon raqam *
                  </Label>
                  <Input
                    id="tgOrPhone"
                    name="tgOrPhone"
                    placeholder="Telegram foydalanuvchi nomingiz yoki telefon raqamingiz"
                    required
                    value={formState.tgOrPhone}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Elektron pochta (ixtiyoriy)</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Elektron pochta manzilingiz"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Xabar (ixtiyoriy)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Xabaringiz"
                    rows={5}
                    maxLength={500}
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-bg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Yuborilmoqda..." : "Xabarni yuborish"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Bog'lanish ma'lumotlari</CardTitle>
                <CardDescription>
                  Quyidagi bog'lanish ma'lumotlari orqali ham menga aloqaga
                  chiqishingiz mumkin.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Telefon</h3>
                    <a
                      href="tel:+998975450409"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +99897-545-04-09
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Send className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Telegram</h3>
                    <a
                      href="https://t.me/farruh_zoir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @farruh_zoir
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Elektron pochta</h3>
                    <a
                      href="mailto:fzoirov29@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      fzoirov29@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Github className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <a
                      href="https://github.com/farruhzoirov"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      farruhzoirov
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hamkorlik qilamizmi?</CardTitle>
                <CardDescription>
                  Men har doim yangi loyihalar, ijodiy g'oyalar yoki
                  loyihangizni rivojlantirish imkoniyatlarini muhokama qilishga
                  tayyorman.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Yangi backend yechimga muhtoj biznes vakili, loyiha uchun
                  hamkorlikka qiziqqan dasturchi yoki shunchaki salom aytmoqchi
                  bo‘lsangiz, men sizni eshitishdan xursandman!
                </p>
                <p className="text-muted-foreground">
                  Xabaringizga 1-2 soat ichida javob beraman.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
