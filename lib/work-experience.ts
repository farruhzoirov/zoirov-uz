export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies?: string[];
}

export const workExperience: WorkExperience[] = [
  {
    title: `Backend Dasturchisi`,
    company: `OOO "Dynamics Engineering"`,
    location: `Toshkent, O'zbekiston`,
    startDate: `1-fevral, 2025`,
    description: [
      `Katta ko‘lamdagi elektron tijorat platformalari uchun backend tizimlarini ishlab chiqish va qo‘llab-quvvatlashda ishtirok etdim, minglab foydalanuvchilarni qo‘llab-quvvatlay oladigan arxitekturalar yaratdim`,
      `Global qidiruv, ko‘p tilli qo‘llab-quvvatlash va ierarxik kategoriya boshqaruvini tizimga integratsiya qildim`,
      `Sanoat avtomatlashtirish tizimlari (Siemens, Rockwell) va AMOcrm bilan integratsiyalarni amalga oshirib, CRM ma’lumotlarini muammosiz sinxronlashtirishni ta’minladim`,
      `Docker va CI/CD jarayonlariga e’tibor qaratib, samaradorlikni oshirish va ishlab chiqish/deploy jarayonlarini avtomatlashtirdim`,
      `Tizim ishlash tezligi, barqarorlik va toza API dizayni ustida ishladim`,
    ],

    technologies: [
      'JavaScript',
      'Node.js',
      'TypeScript',
      'Express.js',
      'Nest.js',
      'Grammy.js',
      'Redis',
      'MongoDB',
      'Docker',
      'CI/CD',
      'NGINX',
    ],
  },
  {
    title: `Backend Dasturchisi`,
    company: `UMFT`,
    location: `Toshkent, O'zbekiston`,
    startDate: `1-oktabr, 2024`,
    endDate: `1-fevral, 2025`,
    description: [
      `Universitetning yangi versiya veb-sayti uchun backend API larni ishlab chiqdim`,
      `Universitetning HEMIS API si bilan integratsiya qilib, akademik va talabalar ma’lumotlarini sinxronlashtirdim`,
      `Landing page va admin panel funksionallarini qo‘llab-quvvatlash uchun API lar yaratdim`,
      `Bir nechta hududlarda foydalanuvchilarga xizmat ko‘rsatish uchun ko‘p tilli qo‘llab-quvvatlashni joriy qildim`,
    ],

    technologies: [
      'JavaScript',
      'Node.js',
      'TypeScript',
      'Express.js',
      'MongoDB',
      'NGINX',
    ],
  },
  {
    title: `Fullstack Dasturchisi`,
    company: `Fulfil Education`,
    location: `Toshkent, O'zbekiston`,
    startDate: `1-noyabr, 2023`,
    endDate: `1-yanvar, 2025`,
    description: [
      `50,000+ ro‘yxatdan o‘tgan foydalanuvchilarga ega webinar veb-saytlarini ishlab chiqdim`,
      `Hosting va avtomatlashtirilgan CI/CD jarayonlari uchun Netlify va Firebase’dan foydalandim`,
      `Moslashuvchan dizayn, foydalanuvchilar uchun qulay interfeys va samarali ma’lumotlar bilan ishlashga e’tibor qaratdim`,
      `Katta foydalanuvchi oqimini qo‘llab-quvvatlash uchun yuqori samaradorlik va masshtablanishni ta’minladim`,
    ],

    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
    ],
  },
];
