export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Rate Limiting va Reverse Proxy bilan Ishlashda E'tiborli Bo‘ling!",
    slug: 'rate-limiting-reverse-proxy',
    date: '28-avgust, 2025',
    image:
      'https://miro.medium.com/1*yc5cL47-5YRKFXl-UOP0LA.png?height=600&width=1200',
    excerpt:
      'Backend loyihalarda rate limiting va reverse proxy bilan ishlashda tez-tez uchraydigan muammolar va ularni to‘g‘ri hal qilish bo‘yicha maslahatlar.',
    content: `
    <p>Assalomu alaykum! Bugun backend loyihalarida <strong>rate limiting</strong> va 
    <strong>reverse proxy</strong> bilan ishlashda muhim jihatlarni muhokama qilamiz.
    Yuqori trafik yoki DDOS xujumlaridan himoyalanish uchun rate limiting joriy qilish zarur, 
    lekin IP manzil asosida cheklov qo‘yishda ayrim muhim narsalarga albatta e’tibor berish kerak.</p>

    <div>
      <h2 class="mb-1 text-xl font-bold">1. Nginx bilan Reverse Proxy Sozlamalari</h2>
      <p>Agar loyihangizda <strong>Nginx</strong> kabi reverse proxy ishlatayotgan bo‘lsangiz,
      foydalanuvchining haqiqiy IP manzilini to‘g‘ri olish uchun konfiguratsiyada quyidagi sozlamalarni qo‘shishingiz kerak:</p>
      <pre><code>
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
      </code></pre>
      <p>Ushbu header’lar foydalanuvchining real IP manzilini backend serveringizga uzatadi. 
      Aks holda server faqat proxy’ning lokal IP manzilini ko‘radi, bu esa rate limiting logikasini buzishi mumkin.</p>
    </div>

    <div>
      <h2 class="mb-1 text-xl font-bold">2. Backend’da Proxy’ga Ishonch (Trust Proxy)</h2>
      <p>Nginx sozlamalarini qilganingizdan keyin ham backend serveringiz 
      ularni standart holatda “ishonchli” deb qabul qilmaydi. Natijada, rate limiter bir nechta foydalanuvchini 
      bitta IP sifatida ko‘rib, ularning hammasini bloklab qo‘yishi mumkin.</p>

      <p>Buni hal qilish uchun, agar siz <strong>Node.js (Express.js yoki Nest.js)</strong> dan foydalanayotgan bo‘lsangiz, quyidagi sozlamani qo‘shishni unutmang:</p>
      <pre><code>app.set('trust proxy', true);</code></pre>

      <p><strong>app.set('trust proxy', true)</strong> quyidagi narsalarni to‘g‘ri ishlashini ta’minlaydi:</p>
      <ul class="pl-3">
        <li>- <code>req.ip</code>: foydalanuvchining haqiqiy IP manzili olinadi</li>
        <li>- <code>req.protocol</code>: so‘rov http yoki https ekanligi aniqlanadi</li>
        <li>- <code>req.secure</code>: HTTPS so‘rov bo‘lsa, uni to‘g‘ri belgilaydi</li>
      </ul>

      <p>Agar <code>app.set('trust proxy', false)</code> bo‘lsa (default), 
      Express X-Forwarded-* header’larini e’tiborsiz qoldiradi va faqatgina proxy IP manzilini qaytaradi.</p>
    </div>

    <div>
      <h2 class="mb-1 text-xl font-bold">Xulosa</h2>
      <p>Rate limitingni to‘g‘ri joriy qilish uchun reverse proxy va backend server o‘rtasida to‘liq sinxronizatsiya zarur. 
      Nginx’da header’larni to‘g‘ri sozlab, Node.js’da esa <code>trust proxy</code> opsiyasini yoqsangiz, 
      foydalanuvchilarning haqiqiy IP manzillarini to‘g‘ri aniqlash va xavfsiz rate limiting qilish imkoniyatiga ega bo‘lasiz.</p>
    </div>

    <div>
      <h2 class="mb-1 text-xl font-bold">Shaxsiy Tajriba</h2>
      <p>Maslahatim: agar biznes logika IP manzilni aniq talab qilmasa, 
      uni rate limitingda ishlatmaslik ham mumkin. Yoki yuqoridagi sozlamalarni doim yodda tuting.
      Aynan mana shu narsaga e’tibor bermaganim sababli yaqinda bitta serviceni qulatib qo‘yganman 🙂</p>
    </div>

    <p class="mt-4">#Backend #NodeJS #Nginx #RateLimiting #ReverseProxy #Experience #WebDevelopment</p>
  `,
  },
];
