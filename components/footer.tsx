import Link from "next/link";
import { Frame, Github, Mail, Phone } from "lucide-react";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-6 py-8 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Frame className="h-6 w-6" />
              <span className="font-bold">Farruh Zoirov</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Backend developer specializing in Node.js, Express, and database
              optimization.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="mr-2"
                >
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                  <path d="m21.854 2.147-10.94 10.939"></path>
                </svg>
                <a
                  className="h-4 w-4"
                  target="_blank"
                  href="https://t.me/farruh_zoir"
                >
                  farruh_zoir
                </a>
              </div>
              <div className="flex items-center  text-sm text-muted-foreground">
                <Phone className="mr-2 h-4 w-4" />
                +998-97-545-04-09
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="mr-2 h-4 w-4" />
                fzoirov29@gmail.com
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Github className="mr-2 h-4 w-4" />
                farruhzoirov
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Farruh Zoirov. All rights
            reserved.
          </p>

          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link
              href="https://t.me/farruh_zoir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mr-2"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                <path d="m21.854 2.147-10.94 10.939"></path>
              </svg>
              <span className="sr-only">Telegram</span>
            </Link>
            <Link
              href="https://github.com/farruhzoirov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:fzoirov29@gmail.com"
              className="text-muted-foreground hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
