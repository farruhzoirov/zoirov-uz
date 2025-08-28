import {
  ArrowRight,
  Github,
  Mail,
  Send,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Profile Image */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
            <Image
              src="/avatar.png?height=400&width=400"
              alt="Farruh Zoirov"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Salom, ismim <span className="gradient-text">Farruh</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Barqaror, xavfsiz va masshtablanadigan server tomon yechimlarini
              ishlab chiqishga ixtisoslashgan Backend dasturchiman.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
            <Button asChild className="gradient-bg">
              <Link href="/portfolio">
                Ishlarimni ko'ring <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Menga bog'laning</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            {/* Telegram (personal) */}
            <Link
              href="https://t.me/farruhzoir_blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Send className="h-5 w-5" />
                <span className="sr-only">Telegram Kanal</span>
              </Button>
            </Link>
            {/* Email */}
            <Link href="mailto:fzoirov29@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Elektron pochta</span>
              </Button>
            </Link>{" "}
            <Link
              href="https://github.com/farruhzoirov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://linkedin.com/in/farruh-zoirov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            {/* YouTube */}
            <Link
              href="https://youtube.com/@farruh_zoir"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </Link>
            {/* Instagram */}
            <Link
              href="https://instagram.com/farruh_zoir"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
