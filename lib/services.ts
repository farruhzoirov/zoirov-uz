import type { LucideIcon } from 'lucide-react';
import { Bot, Globe, ShoppingCart, Video, Server } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  price: {
    amount: number;
    startingFrom?: boolean;
    per?: string;
  };
  icon: LucideIcon;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Vebinar saytlar',
    description:
      'Vebinar va onlayn tadbirlar uchun maxsus saytlar yaratish. Interaktiv va foydalanuvchi uchun qulay dizayn.',
    price: {
      amount: 150,
      startingFrom: true,
    },
    icon: Video,
    features: [
      "Vebinar ro'yxatdan o'tish tizimi",
      'Video translyatsiya integratsiyasi',
      'Ishtirokchilar boshqaruvi',
      'Chat va Q&A funksiyalari',
      'Mobil qurilmalarga moslashtirilgan',
      'SEO optimizatsiya',
      "2 marta qayta ko'rib chiqish",
    ],
  },
  {
    id: 2,
    title: 'Landing saytlar',
    description:
      'Mahsulot yoki xizmatni taqdim etish uchun yuqori konversiyali landing sahifalar yaratish.',
    price: {
      amount: 300,
      startingFrom: true,
    },
    icon: Globe,
    features: [
      'Yuqori konversiyali dizayn',
      'CTA tugmalari optimizatsiyasi',
      'Forma integratsiyasi',
      'Tezkor yuklanish',
      'Mobil responsiv dizayn',
      'Analytics sozlash',
      'A/B test imkoniyatlari',
    ],
  },
  {
    id: 3,
    title: "Internet do'kon saytlari",
    description:
      "To'liq funksional e-commerce saytlar yaratish. Mahsulot katalogi va to'lov tizimlari bilan.",
    price: {
      amount: 3000,
      startingFrom: true,
    },
    icon: ShoppingCart,
    features: [
      'Mahsulot katalogi boshqaruvi',
      'Savatcha va buyurtma tizimi',
      "To'lov tizimlarini ulash",
      'Foydalanuvchi kabineti',
      'Inventar boshqaruvi',
      'Admin panel',
      "3 oy texnik qo'llab-quvvatlash",
    ],
  },
  {
    id: 4,
    title: 'Telegram bot',
    description:
      'Biznes jarayonlarini avtomatlashtirish uchun maxsus Telegram botlar yaratish.',
    price: {
      amount: 500,
      startingFrom: true,
    },
    icon: Bot,
    features: [
      'Maxsus komandalar yaratish',
      "Ma'lumotlar bazasi integratsiyasi",
      "To'lov tizimlari ulash",
      'Admin panel',
      'Foydalanuvchilar statistikasi',
      'Avtomatik xabarlar',
      "1 oy bepul qo'llab-quvvatlash",
    ],
  },
  {
    id: 4,
    title: 'DevOps xizmatlari',
    description:
      'Loyihalaringizni barqaror va tezkor ishlashi uchun to‘liq DevOps yechimlari. CI/CD jarayonlarini avtomatlashtirish, serverlarni sozlash va monitoring orqali tizimni nazorat qilish imkoniyati.',
    price: {
      amount: 500,
      startingFrom: true,
    },
    icon: Server,
    features: [
      'CI/CD pipeline (GitHub Actions, GitLab CI)',
      'Server konfiguratsiyasi (Nginx, Docker, PM2)',
    ],
  },
];
