export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  features: string[];
  type:
    | `Internet do'kon`
    | 'Telegram bot'
    | 'Forma sayt'
    | 'Npm package'
    | 'Vebinar sayt'
    | 'Landing sayt'
    | 'Hujjat aylanish tizimi';
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Dynamics Market',
    slug: 'dynamics-market-uz',
    description: `
      <strong>Dynamics Market</strong> — bu avtomatlashtirish, asbobsozlik, energetika va elektrotexnika sohalarida yechimlar taklif qiluvchi taniqli kompaniya uchun yaratilgan e-commerce platforma. <br>
      Saytga kompaniya o'z tovarlarini joylaydi. Saytga kirgan mijozlar tovar haqida to'liq ma'lumot olishlari mumkin. Tovarni
      savatiga qo'shadi va keyin savatdagi barcha tovarlarni buyurtma qiladi. <br>
      Saytni Angular'da ko'tarilgan. Sababi bu loyihani kelgusida rivojlantirish va qo'llab-quvvatlashni reja qilyapmiz. Katta masshtabli loyihalar
      uchun esa Angular taqdim etadigan arxitektura zo'r instrument.
      Backend qismini  esa men  Nest.js, Docker, MongoDB, ElasticSearch, Redis asosida ishlab chiqqanman, bu loyiha  quyidagi imkoniyatlarni taqdim etadi:
    `,
    image: '/portfolio/dynamics-market-uz.jpg',
    technologies: [
      'Angular 13',
      'Tailwind CSS',
      'Boostrap',
      'SCSS',
      'NgBootstrap',
      'Nest.js',
      'TypeScript',
      'MongoDB',
      'ElasticSearch',
      'Redis',
    ],
    demoUrl: 'https://dynamics-market.uz',
    features: [
      "Tovarlarni ko'rish va tanlash",
      "Tovarlarni savatga qo'shish",
      'Buyurtma berish imkoniyati',
      "Tovarlar haqida to'liq ma'lumot",
      'Maxsulot qidirish tizimi',
      'Tovarlar filtrlash',
      'Savatdagi tovarlarni boshqarish',
      'ElasticSearch yordamida tezkor qidiruv va filtrlash',
      'AMOcrm bilan integratsiya orqali mijozlar va buyurtmalarni sinxronlashtirish',
      'Telegram bot orqali buyurtmalar haqida xabarnoma olish',
      'Docker orqali barqaror va ishlab chiqarishga tayyor muhit',
    ],
    type: "Internet do'kon",
  },
  {
    id: 2,
    title: 'Dynamics Kirim/Chiqim Bot ',
    slug: 'dynamics-finance-bot',
    description: `
      <strong>Dynamics Kirim/Chiqim Bot </strong> — Ishxonam uchun Kirim-chiqimni avtomatlashtiruvchi Telegram bot yaratib berdim
      <br>
    📌 <strong>Bot imkoniyatlari</strong> <br>
    1.<b>Ikki tilli qo‘llab-quvvatlash</b> — foydalanuvchi o‘ziga qulay tilni tanlay oladi. (ru, uz) <br>
    2.<b>3 xil rol tizimi </b> — Direktor, Kassir va Menejer uchun alohida funksiyalar. <br>
    3.<b>Google Sheets integratsiyasi </b>— har bir tranzaksiyaga oid barcha ma’lumotlar avtomatik ravishda Google Sheet’ga yoziladi (bu shartnoma bo‘lishi ham, kirim yoki chiqim turi bo‘lishi ham mumkin). <br> <br>

    <strong>⚙️ Ish jarayonidagi qiyinchiliklar va yechimlar</strong> <br>
    1. Tranzaksiyani tasdiqlash jarayoni:
    Menejer yangi tranzaksiya kiritmoqchi bo‘lsa, avval Direktor, so‘ng Kassir tasdiqlashi shart.Bu qism menda eng katta challenge bo'ldi, lekin muvaffaqiyatli yechim topdim va tizim barqaror ishlayapti.  <br>
    2. Valyuta kursini olish Bot Kapitalbank’dagi (USD → UZS) sotish va sotib olish kurslarini ko‘rsatishi kerak edi.
    Afsuski, Kapitalbank API taqdim etmaydi, shuning uchun kapitalbank.uz saytini kod orqali crawling qilishga to‘g‘ri keldi..
    `,
    image: '/portfolio/dynamics-finance-bot.png',
    technologies: ['Node.js', 'Typescript', 'Grammy.js', 'MongoDB'],
    demoUrl: 'https://t.me/dynamics_market_finance_bot',
    features: [
      'Ikki tilli qo‘llab-quvvatlash (uz/ru)',
      '3 xil rol tizimi (Direktor, Kassir, Menejer)',
      'Tranzaksiyalarni bosqichma-bosqich tasdiqlash jarayoni',
      'Google Sheets bilan to‘liq integratsiya',
      'Kapitalbank kurslarini avtomatik olish (web scraping orqali)',
      'Kirim va chiqimlarni real vaqt monitoringi',
      'Tranzaksiyalar bo‘yicha tarix va izlash imkoniyati',
    ],
    type: 'Telegram bot',
  },
  {
    id: 3,
    title: 'Fast-nginx npm package',
    slug: 'fast-nginx-npm-package',
    description: `
      <strong>FastNginx</strong>  — Nginx serverlarini tez va oson sozlash uchun ishlab chiqilgan CLI vosita. Birgina buyruq orqali domenni ishga tushirish, SSL sertifikatlarini avtomatik o‘rnatish, xavfsizlik sozlamalari va tayyor shablonlardan foydalanish imkonini beradi.
    `,
    image: '/portfolio/fast-nginx.png',
    technologies: ['Javascript', 'Node.js', 'Node.js core', 'Linux'],
    demoUrl: 'https://www.npmjs.com/package/fast-nginx',
    features: [
      'Bir buyruq orqali domenlarni tezkor sozlash',
      "Let's Encrypt yordamida avtomatik SSL va yangilanish",
      'Tayyor shablonlar: Basic, API, SPA',
      'Xavfsizlik sarlavhalari bilan himoyalangan konfiguratsiya',
    ],
    type: 'Npm package',
  },
  {
    id: 4,
    title: `Lingua Barno kursiga to'lov`,
    slug: 'lingua-barno-payment',
    description: `
      LinguaBarnoning "Upgrade 4.0" kursi taqdimotining oxirida to'lov ochilgandan keyin, kursda qatnashmoqchi bo'lganlar joy band qilish uchun to'lov qilib, to'lovni tasdiqlovchi skrinshotlarni yuklaydigan forma sayt.
      <br>
      Frontend qismini formani boshqarish osonroq bo'lishi uchun Angularda <a target='__blank' style="color: blue" href="https://sultonbayev.uz">Og'abek Sultonbayev</a> ko'tardi. Men rasmlarni yuklash uchun NodeJS yordamida thread pool sizeni oshirgan holda service backend ko'tardim. Katta yuklamada ham qotmasdan yaxshi ishlab berdi.
    `,
    image: '/portfolio/linguabarno-payment.jpg',
    technologies: ['Angular', 'Tailwind CSS', 'NodeJS', 'NestJS'],
    demoUrl: 'https://linguabarno-payments.netlify.app',
    features: [
      `Kursga yozilish uchun forma`,
      `To'lov skrinshotini yuklash`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`,
    ],
    type: 'Forma sayt',
  },
  {
    id: 5,
    title: 'Azizbek Xabibullayev',
    slug: 'frontt-fulfiledu-uz',
    description: `
      Xalqaro kompaniyada Senior Frontend dasturchi Azizbek Khabibullayevning kurs vebinari uchun sayt. Sayt stilistikasi sodda va foydalanuvchiga qulay ko'rinishda ishlab chiqilgan.
    `,
    image: '/portfolio/frontt-fulfiledu-uz.jpg',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    demoUrl: 'https://frontt.fulfiledu.uz',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`,
    ],
    type: 'Vebinar sayt',
  },
  {
    id: 6,
    title: 'Kamola Baxtiyarovna',
    slug: 'masterkomo-uz',
    description: `
      San'atkorlar orasida mashhur bo'lgan, ko'p yillik tajribaga ega dizayner-texnolog Kamola Baxtiyarovnaning
      kurs reklamasi uchun qilingan sayt. Shu saytni tez qilib berishga to'g'ri kelib qolgan.
      U paytlarda saytlarning performensini oshirish haqida ko'p ham qayg'urmas edim. Chunki kurs tashkilotchilari
      bu masalaga uncha e'tibor berishmagan oldin. Lekin 94-95% atrofida ko'rsatgan target yoqilgan vaqtda.
      Hozir 93% ko'rsatyapti ekan. Ma'lumot uchun: bu statistika vaqt o'tishi bilan o'zgarib turadi.
      Performens ko'p faktorlarga bog'liq.
    `,
    image: '/portfolio/masterkomo-uz.jpg',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    demoUrl: 'https://masterkomo.uz',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`,
    ],
    type: 'Vebinar sayt',
  },
  {
    id: 7,
    title: 'Zarina Ismailovna',
    slug: 'russtilida-fulfiledu-uz',
    description: `Rus tili o'qituvchisi Zarina Ismailovna uchun qilib berilgan vebinar sayti. Sayt dizaynida qora rangdan to'g'ri foydalanilgan`,
    image: '/portfolio/russtilida.fulfiledu.uz.jpg',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    demoUrl: 'https://russtilida.fulfiledu.uz',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`,
    ],
    type: 'Vebinar sayt',
  },
  {
    id: 8,
    title: 'Farhod Ruzmatov',
    slug: 'uzumone-netlify-app',
    description: `
      Cosmos brendi asoschi, Uzum marketning rasmiy spikeri Farhod Ruzmatovning online darslari
      reklamasi uchun qilingan vebinar sayti. Saytda dizayner Uzum marketning stilistikasidan ajoyib ko'rinishda foydalangan.
    `,
    image: '/portfolio/uzumone-netlify-app.jpg',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    demoUrl: 'https://uzumone.netlify.app',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`,
    ],
    type: 'Vebinar sayt',
  },
  {
    id: 9,
    title: 'Komiljon Xamidjonov',
    slug: 'backend-fulfiledu-uz',
    description: `
      Xalqaro kompaniyada Senior Backend dasturchi Komiljon Xamidjonovning kurs vebinari uchun sayt. Sayt stilistikasi sodda va foydalanuvchiga qulay ko'rinishda ishlab chiqilgan.
    `,
    image: '/portfolio/backend.fulfiledu.uz.jpg',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    demoUrl: 'https://backend.fulfiledu.uz',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`,
    ],
    type: 'Vebinar sayt',
  },
];
