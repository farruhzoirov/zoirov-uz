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
    title: 'Veb-saytning performansi va yuklanish tezligini qanday oshirish mumkin?',
    slug: 'website-performance-optimization',
    date: '3-iyun, 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?height=600&width=1200',
    excerpt: 'Veb-saytingizning yuklanish tezligini oshirish va foydalanuvchi tajribasini yaxshilash uchun amaliy maslahatlar va usullar.',
    content: `
      <p>Bugungi raqamli dunyoda veb-saytning tez yuklanishi foydalanuvchilar uchun eng muhim omillardan biridir.
        Tadqiqotlar shuni ko'rsatadiki, agar sayt 3 soniyadan ko'proq yuklanayotgan bo'lsa, foydalanuvchilarning 40% dan ortig'i uni
        tark etadi. Bu maqolada veb-sayt performansini oshirishning eng samarali usullarini ko'rib chiqamiz.</p>

      <div>
        <h2 class="mb-1 text-xl font-bold">Performansning ahamiyati</h2>
        <p>Veb-sayt tezligi nafaqat foydalanuvchi tajribasiga ta'sir qiladi, balki qidiruv tizimlarida
        reytingga ham bevosita bog'liq. Google va boshqa qidiruv tizimlari tez yuklanadigan saytlarni
        yuqori o'rinlarga qo'yadi. Shuningdek, mobil qurilmalarda internetga ulanish tezligi har doim ham yuqori
        bo'lmasligi sababli, sayt optimizatsiyasi yanada muhim ahamiyat kasb etadi.</p>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">1. Rasmlarni optimizatsiya qilish</h2>
        <p>Rasmlar ko'pincha veb-sahifaning eng katta qismini tashkil etadi.
        Ularni to'g'ri optimizatsiya qilish performansni sezilarli darajada oshiradi.</p>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">Formatni to'g'ri tanlash</h3>
        <ul>
          <li><strong class="font-semibold">- JPEG:</strong> Fotografiyalar va murakkab rasmlar uchun</li>
          <li><strong class="font-semibold">- PNG:</strong> Shaffof fon va oddiy grafikalar uchun</li>
          <li><strong class="font-semibold">- WebP:</strong> Zamonaviy format, JPEG va PNG dan 25-30% kichik</li>
          <li><strong class="font-semibold">- SVG:</strong> Vektor grafikalar uchun</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-lg font-bold">Praktik tavsiyalar</h2>
        <ul class="pl-3">
          <li>- Rasmlarni siqish (compression) dan foydalaning</li>
          <li>- Zamonaviy formatlarni qo'llang (WebP, AVIF)</li>
          <li>- Lazy loading texnikasini ishlatib, faqat ko'rinadigan rasmlarni yuklang</li>
          <li>- Responsive images bilan turli ekran o'lchamlari uchun mos rasmlar taqdim eting</li>
        </ul>
      </div>

      <div>
  <h2 class="mb-1 text-xl font-bold">2. CSS va JavaScript optimizatsiyasi</h2>
  <p>CSS va JavaScript fayllari veb-saytning yuklanish tezligiga katta ta'sir ko'rsatadi.
  Bu fayllarni optimizatsiya qilish orqali sahifa yuklanish vaqtini sezilarli darajada
  qisqartirish mumkin.</p>
</div>

<div>
  <h3 class="mb-1 text-lg font-bold">CSS optimizatsiyasi</h3>
  <ul class="pl-3">
    <li>- <strong class="font-semibold">Minification:</strong> Keraksiz bo'sh joylar, sharhlar va satr o'tishlarni olib tashlash</li>
    <li>- <strong class="font-semibold">CSS-ni birlashtirish:</strong> Bir nechta CSS faylini bitta faylga jamlash</li>
    <li>- <strong class="font-semibold">Critical CSS:</strong> Sahifaning yuqori qismida ko'rinadigan elementlar uchun CSS-ni inline qilish</li>
    <li>- <strong class="font-semibold">Foydalanilmagan CSS-ni olib tashlash:</strong> PurgeCSS yoki shunga o'xshash vositalardan foydalanish</li>
  </ul>
</div>

<div>
  <h3 class="mb-1 text-lg font-bold">JavaScript optimizatsiyasi</h3>
  <ul class="pl-3">
    <li>- <strong class="font-semibold">Code splitting:</strong> Katta JavaScript fayllarini kichik qismlarga bo'lish</li>
    <li>- <strong class="font-semibold">Lazy loading:</strong> JavaScript modullarini kerak bo'lganda yuklash</li>
    <li>- <strong class="font-semibold">Tree shaking:</strong> Foydalanilmagan kodni avtomatik olib tashlash</li>
    <li>- <strong class="font-semibold">Minification va compression:</strong> Uglify yoki Terser kabi vositalardan foydalanish</li>
  </ul>
</div>

<div>
  <h3 class="mb-1 text-lg font-bold">Yuklash strategiyalari</h3>
  <ul class="pl-3">
    <li>- <strong class="font-semibold">defer va async:</strong> JavaScript fayllarini to'g'ri yuklash uchun bu atributlardan foydalaning</li>
    <li>- <strong class="font-semibold">Preload va prefetch:</strong> Muhim resurslarni oldindan yuklash</li>
    <li>- <strong class="font-semibold">Resource hints:</strong> Brauzerga keyingi sahifalar uchun tayyorgarlik ko'rish</li>
    <li>- <strong class="font-semibold">Service Workers:</strong> Offline ishlash va kesh boshqaruvi uchun</li>
  </ul>
</div>

<div>
  <h3 class="mb-1 text-lg font-bold">Amaliy maslahatlar</h3>
  <ul class="pl-3">
    <li>- Webpack, Rollup yoki Vite kabi bundlerlardan foydalaning</li>
    <li>- CSS va JS fayllarini CDN orqali tarqating</li>
    <li>- Gzip yoki Brotli siqishdan foydalaning</li>
    <li>- Performance budget belgilang va uni nazorat qiling</li>
  </ul>
</div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Xulosa</h2>
        <p>Veb-sayt performansini oshirish murakkab jarayon bo'lib, bir nechta yo'nalishda
        ishlab borish talab etadi. Rasmlarni optimizatsiya qilish, keshdan to'g'ri foydalanish,
         server sozlamalarini yaxshilash va muntazam monitoring orqali foydalanuvchilar
         uchun tez va qulay veb-sayt yaratish mumkin.</p>
         <p>Eng muhimi, bu optimizatsiya ishlarini bosqichma-bosqich amalga oshirish va har bir o'zgarishdan keyin natijalarni o'lchashdir. Shunday qilib, qaysi usullar sizning saytingiz uchun eng samarali ekanligini aniqlash mumkin.</p>
         <p>Esda tutingki, performans - bu bir martalik ish emas, balki doimiy jarayondir. Texnologiyalar rivojlanishi va foydalanuvchi ehtiyojlari o'zgarishi bilan saytingizni ham yangilab borishingiz kerak.</p>
      </div>
    `
  },
  {
    id: 2,
    title: 'Angular\'da sayt yaratishning afzalikklari va kamchiliklari',
    slug: 'angular-advantages-disadvantages',
    date: '3-iyun, 2025',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?height=600&width=1200',
    excerpt: 'Angular framework\'ining kuchli va zaif tomonlarini batafsil ko\'rib chiqing va loyihangiz uchun to\'g\'ri tanlov qiling.',
    content: `
      <p>Angular - Google tomonidan ishlab chiqilgan va qo'llab-quvvatlanadigan mashhur frontend framework.
      Katta korporativ loyihalardan tortib kichik startaplargacha ko'plab dasturchilar Angular dan foydalanadi.
      Bu maqolada Angular ning asosiy afzalliklari va kamchiliklarini batafsil ko'rib chiqamiz.</p>

      <div>
        <h2 class="mb-1 text-xl font-bold">Angular nima?</h2>
        <p>Angular - bu TypeScript asosida qurilgan to'liq funksional SPA (Single Page Application)
        yaratish uchun mo'ljallangan platform va framework. U komponentga asoslangan arxitektura,
        kuchli CLI vositalari va keng imkoniyatlar to'plamini taklif etadi.</p>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Angular ning afzalliklari</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">1. TypeScript qo'llab-quvvatlashi</h3>
        <ul class="pl-3">
          <li>- Statik tip tekshiruvi orqali xatolarni erta aniqlash</li>
          <li>- Katta loyihalarda kodning ishonchliligini oshirish</li>
          <li>- IDE da yaxshi IntelliSense va avtomatik to'ldirish</li>
          <li>- OOP kontseptsiyalarini to'liq qo'llab-quvvatlash</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">2. To'liq ekosistema</h3>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Angular CLI:</strong> Loyihani yaratish, build qilish va deploy qilish uchun</li>
          <li>- <strong class="font-semibold">Angular Material:</strong> Tayyor UI komponentlar to'plami</li>
          <li>- <strong class="font-semibold">Angular Router:</strong> Kuchli marshrutlash tizimi</li>
          <li>- <strong class="font-semibold">HttpClient:</strong> HTTP so'rovlar uchun qulay API</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">3. Korporativ darajadagi arxitektura</h3>
        <ul class="pl-3">
          <li>- Dependency Injection (DI) tizimi</li>
          <li>- Modullar orqali kodni tashkil etish</li>
          <li>- RxJS bilan reactive programming</li>
          <li>- Testlash uchun built-in yechimlar</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">4. Performance va optimizatsiya</h3>
        <ul class="pl-3">
          <li>- Ahead-of-Time (AOT) compilation</li>
          <li>- Tree shaking va code splitting</li>
          <li>- Lazy loading modullar</li>
          <li>- OnPush change detection strategiyasi</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Angular ning kamchiliklari</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">1. Yuqori o'rganish darajasi</h3>
        <ul class="pl-3">
          <li>- TypeScript bilishi talab etiladi</li>
          <li>- Ko'p kontseptsiyalar: services, decorators, modules</li>
          <li>- RxJS va reactive programming paradigmasi</li>
          <li>- Katta va murakkab dokumentatsiya</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">2. Bundle hajmi va performance</h3>
        <ul class="pl-3">
          <li>- Boshlang'ich bundle hajmi katta</li>
          <li>- Kichik loyihalar uchun "overkill" bo'lishi mumkin</li>
          <li>- Sekin development build vaqti</li>
          <li>- Ko'p abstraksiya darajalari</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">3. Tez-tez yangilanishlar</h3>
        <ul class="pl-3">
          <li>- Har 6 oyda major versiya chiqadi</li>
          <li>- Migration qilish murakkab bo'lishi mumkin</li>
          <li>- Breaking changes bo'lishi mumkin</li>
          <li>- Uchinchi tomon kutubxonalar mos kelmasligi</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Angular qachon tanlash kerak?</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">Angular mos keladi:</h3>
        <ul class="pl-3">
          <li>- Katta korporativ loyihalar uchun</li>
          <li>- Uzoq muddatli loyihalar</li>
          <li>- TypeScript ishlatmoqchi bo'lganlar uchun</li>
          <li>- Jamoa bo'lib ishlashda</li>
          <li>- Murakkab business logic bilan</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">Angular mos kelmaydi:</h3>
        <ul class="pl-3">
          <li>- Kichik va oddiy loyihalar uchun</li>
          <li>- Tez prototip yaratish uchun</li>
          <li>- Yangi boshlovchilar uchun</li>
          <li>- SEO muhim bo'lgan static saytlar uchun</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Xulosa</h2>
        <p>Angular kuchli va professional framework bo'lib, katta loyihalar uchun juda mos keladi.
        Uning TypeScript qo'llab-quvvatlashi, to'liq ekosistema va korporativ darajadagi arxitekturasi
        uni jiddiy loyihalar uchun ajoyib tanlov qiladi.</p>

        <p>Biroq, Angular ning yuqori o'rganish darajasi va murakkabligi uni kichik loyihalar yoki
        yangi boshlovchilar uchun qiyin qilishi mumkin. Loyiha talablarini diqqat bilan o'rganib,
        to'g'ri framework tanlash muhimdir.</p>

        <p>Agar sizda katta jamoa, murakkab business logic va uzoq muddatli loyiha bo'lsa,
        Angular eng yaxshi tanlov bo'lishi mumkin. Aksincha, oddiy va tez loyihalar uchun
        React yoki Vue.js kabi boshqa variantlarni ko'rib chiqish maqsadga muvofiqdir.</p>
      </div>
    `
  },
  {
    id: 3,
    title: 'Katta loyihalar uchun nimaga Angular tanlanadi?',
    slug: 'why-angular-for-large-projects',
    date: '3-iyun, 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?height=600&width=1200',
    excerpt: 'Katta korporativ loyihalarda Angular framework\'ini tanlashning asosiy sabablari va texnik afzalliklarini ko\'rib chiqamiz.',
    content: `
      <p>Katta loyihalar yaratishda to'g'ri framework tanlash muvaffaqiyatning kalit omilidir.
      Angular ko'plab yirik kompaniyalar tomonidan afzal ko'riladi va buning yaxshi sabablari bor.
      Bu maqolada Angular ning katta loyihalar uchun nima uchun eng yaxshi tanlov ekanligini ko'rib chiqamiz.</p>

      <div>
        <h2 class="mb-1 text-xl font-bold">Katta loyihalar deganda nimani tushunish kerak?</h2>
        <p>Katta loyihalar deganda odatda quyidagi xususiyatlarga ega bo'lgan dasturlarni nazarda tutamiz:</p>
        <ul class="pl-3">
          <li>- 50+ developer bilan ishlayotgan jamoa</li>
          <li>- 100,000+ qator kod</li>
          <li>- Murakkab business logic va integratsiyalar</li>
          <li>- Uzoq muddatli rivojlantirish (5+ yil)</li>
          <li>- Yuqori performance va xavfsizlik talablari</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Angular ning katta loyihalar uchun afzalliklari</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">1. Qat'iy arxitektura va standartlar</h3>
        <p>Angular boshidanoq qat'iy arxitektura tamoyillarini joriy etadi, bu katta jamoalar uchun juda muhim.</p>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Folder struktura:</strong> Aniq belgilangan papka tuzilmasi</li>
          <li>- <strong class="font-semibold">Naming conventions:</strong> Standart nomlash qoidalari</li>
          <li>- <strong class="font-semibold">Code organization:</strong> Modullar, servislar va komponentlar</li>
          <li>- <strong class="font-semibold">Best practices:</strong> O'rnatilgan eng yaxshi amaliyotlar</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">2. TypeScript ning afzalliklari</h3>
        <p>Katta loyihalarda TypeScript juda katta rol o'ynaydi:</p>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Type safety:</strong> Compile vaqtida xatolarni aniqlash</li>
          <li>- <strong class="font-semibold">IntelliSense:</strong> IDE da mukammal qo'llab-quvvatlash</li>
          <li>- <strong class="font-semibold">Refactoring:</strong> Xavfsiz kod o'zgartirish</li>
          <li>- <strong class="font-semibold">Documentation:</strong> Kodning o'zi dokumentatsiya vazifasini bajaradi</li>
          <li>- <strong class="font-semibold">Team collaboration:</strong> Jamoa ishlashini osonlashtiradi</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">3. Dependency Injection va modullarlik</h3>
        <p>Angular ning DI tizimi katta loyihalar uchun ajoyib imkoniyatlar yaratadi:</p>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Loosely coupled code:</strong> Komponentlar orasidagi bog'lanish kamaytiradi</li>
          <li>- <strong class="font-semibold">Testability:</strong> Unit testlar yozishni osonlashtiradi</li>
          <li>- <strong class="font-semibold">Scalability:</strong> Yangi xususiyatlar qo'shishni osonlashtiradi</li>
          <li>- <strong class="font-semibold">Maintenance:</strong> Kodga xizmat ko'rsatishni osonlashtiradi</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">4. CLI va development toolchain</h3>
        <p>Angular CLI katta loyihalarda ishlab chiqish jarayonini sezilarli tezlashtiradi:</p>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Code generation:</strong> Komponent, servis va modullar avtomatik yaratish</li>
          <li>- <strong class="font-semibold">Build optimization:</strong> Production uchun optimizatsiya</li>
          <li>- <strong class="font-semibold">Testing tools:</strong> Unit va e2e testlar uchun sozlamalar</li>
          <li>- <strong class="font-semibold">Linting va formatting:</strong> Kod sifatini nazorat qilish</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">5. Kuchli ekosistema</h3>
        <p>Angular atrofida shakllangan ekosistema katta loyihalar uchun barcha kerakli vositalarni taqdim etadi:</p>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Angular Material:</strong> Professional UI komponentlar</li>
          <li>- <strong class="font-semibold">NgRx:</strong> State management uchun</li>
          <li>- <strong class="font-semibold">Angular Universal:</strong> Server-side rendering</li>
          <li>- <strong class="font-semibold">Angular Elements:</strong> Custom elements yaratish</li>
          <li>- <strong class="font-semibold">Nx:</strong> Monorepo boshqaruvi</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Real-world misollar</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">Angular dan foydalanadigan mashhur kompaniyalar:</h3>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Google:</strong> Gmail, Google Cloud Console</li>
          <li>- <strong class="font-semibold">Microsoft:</strong> Xbox, Office 365</li>
          <li>- <strong class="font-semibold">Samsung:</strong> SmartThings platform</li>
          <li>- <strong class="font-semibold">Deutsche Bank:</strong> Banking applications</li>
          <li>- <strong class="font-semibold">BMW:</strong> Car configuration tools</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Performance va scale qilish</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">Katta loyihalarda performance:</h3>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Lazy loading:</strong> Kerak bo'lganda modullarni yuklash</li>
          <li>- <strong class="font-semibold">OnPush strategy:</strong> Change detection optimizatsiyasi</li>
          <li>- <strong class="font-semibold">Tree shaking:</strong> Foydalanilmagan kodni olib tashlash</li>
          <li>- <strong class="font-semibold">AOT compilation:</strong> Compile vaqtida optimizatsiya</li>
          <li>- <strong class="font-semibold">Service Workers:</strong> PWA va caching</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Jamoa ishlashi va maintainability</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">Katta jamoalar uchun afzalliklar:</h3>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Consistent codebase:</strong> Barcha developerlar bir xil standartlarda ishlaydi</li>
          <li>- <strong class="font-semibold">Easy onboarding:</strong> Yangi jamoa a'zolarini tez adaptatsiya qilish</li>
          <li>- <strong class="font-semibold">Code review:</strong> TypeScript orqali xatolarni erta aniqlash</li>
          <li>- <strong class="font-semibold">Documentation:</strong> Avtomatik API documentation</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Long-term support va stability</h2>
        <p>Angular ning LTS (Long Term Support) versiyalari katta loyihalar uchun muhim:</p>
        <ul class="pl-3">
          <li>- 18 oy davomida qo'llab-quvvatlash</li>
          <li>- Security updates va bug fixes</li>
          <li>- Backward compatibility</li>
          <li>- Migration tools va documentation</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Xulosa</h2>
        <p>Angular katta loyihalar uchun ideal tanlov hisoblanadi, chunki u:</p>
        <ul class="pl-3 mb-4">
          <li>- Qat'iy arxitektura va standartlarni taqdim etadi</li>
          <li>- TypeScript orqali kod sifatini ta'minlaydi</li>
          <li>- Kuchli development tools bilan ta'minlangan</li>
          <li>- Katta jamoa ishlashi uchun optimallashtirilgan</li>
          <li>- Uzoq muddatli qo'llab-quvvatlash bor</li>
        </ul>

        <p>Agar sizning loyihangiz murakkab, katta jamoa bilan ishlanayotgan va uzoq muddatga mo'ljallangan bo'lsa,
        Angular eng mantiqiy tanlov bo'ladi. Bu framework sizga barqaror, scale qilinadigan va
        maintainable dastur yaratishga yordam beradi.</p>

        <p>Esda tutingki, Angular ni tanlashdan oldin loyihangizning talablarini, jamoa tajribasini
        va uzoq muddatli maqsadlarni hisobga olish muhimdir. Lekin katta loyihalar uchun Angular
        haqiqatan ham eng yaxshi variantlardan biri hisoblanadi.</p>
      </div>
    `
  },
  {
    id: 4,
    title: 'Next.js - qachon va nima uchun tanlash kerak?',
    slug: 'why-choose-nextjs',
    date: '3-iyun, 2025',
    image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?height=600&width=1200',
    excerpt: 'Next.js frameworkining asosiy afzalliklari, uni qachon ishlatish kerakligi va real loyihalardagi amaliy tajribalar.',
    content: `
        <p>Next.js - React asosidagi framework bo'lib, zamonaviy veb-ilovalar yaratish uchun
        eng mashhur yechimlardan biridir. Bu maqolada Next.js ning asosiy xususiyatlari va
        uni qaysi hollarda tanlash kerakligi haqida batafsil ma'lumot beramiz.</p>

        <div>
          <h2 class="mb-1 text-xl font-bold">Next.js nima va uning asosiy xususiyatlari</h2>
          <p>Next.js quyidagi muhim xususiyatlarni taqdim etadi:</p>
          <ul class="pl-3">
            <li>- Server-Side Rendering (SSR)</li>
            <li>- Static Site Generation (SSG)</li>
            <li>- Automatic code splitting</li>
            <li>- Built-in routing</li>
            <li>- API routes</li>
            <li>- Zero configuration</li>
            <li>- Hot Code Reloading</li>
            <li>- TypeScript support</li>
          </ul>
        </div>

        <div>
          <h2 class="mb-1 text-xl font-bold">Next.js ni qaysi hollarda tanlash kerak?</h2>
        </div>

        <div>
          <h3 class="mb-1 text-lg font-bold">1. SEO muhim bo'lgan loyihalar uchun</h3>
          <p>Next.js ning SSR va SSG imkoniyatlari qidiruv tizimlarida yaxshi natija beradi:</p>
          <ul class="pl-3">
            <li>- E-commerce saytlar</li>
            <li>- Blog platformalari</li>
            <li>- Marketing saytlari</li>
            <li>- Korporativ veb-saytlar</li>
          </ul>
        </div>

        <div>
          <h3 class="mb-1 text-lg font-bold">2. Yuqori performance kerak bo'lganda</h3>
          <ul class="pl-3">
            <li>- Automatic code splitting</li>
            <li>- Image optimization</li>
            <li>- Edge caching</li>
            <li>- Server-side rendering</li>
          </ul>
        </div>

        <div>
          <h3 class="mb-1 text-lg font-bold">3. Murakkab routing kerak bo'lganda</h3>
          <ul class="pl-3">
            <li>- File-system based routing</li>
            <li>- Dynamic routes</li>
            <li>- Nested routes</li>
            <li>- Middleware support</li>
          </ul>
        </div>

        <div>
          <h3 class="mb-1 text-lg font-bold">4. Tez development zarur bo'lganda</h3>
          <ul class="pl-3">
            <li>- Zero configuration</li>
            <li>- Built-in TypeScript support</li>
            <li>- Fast Refresh</li>
            <li>- API routes</li>
          </ul>
        </div>

        <div>
          <h2 class="mb-1 text-xl font-bold">Next.js ning kamchiliklari</h2>
          <ul class="pl-3">
            <li>- React ga bog'liqlik</li>
            <li>- Hosting talablari</li>
            <li>- Bundle size</li>
            <li>- O'rganish vaqti</li>
          </ul>
        </div>

        <div>
          <h2 class="mb-1 text-xl font-bold">Next.js alternatives</h2>
          <ul class="pl-3">
            <li>- Gatsby (static sites uchun)</li>
            <li>- Nuxt.js (Vue.js ekosistemasi uchun)</li>
            <li>- Remix (full stack framework)</li>
            <li>- Create React App (oddiy React apps uchun)</li>
          </ul>
        </div>

        <div>
          <h2 class="mb-1 text-xl font-bold">Next.js deployment</h2>
          <p>Next.js ilovalarini deploy qilish uchun eng yaxshi platformalar:</p>
          <ul class="pl-3">
            <li>- Vercel (Next.js yaratuvchilari)</li>
            <li>- Netlify</li>
            <li>- AWS Amplify</li>
            <li>- Digital Ocean</li>
            <li>- Railway</li>
          </ul>
        </div>

        <div>
          <h2 class="mb-1 text-xl font-bold">Next.js ning kelajagi</h2>
          <p>Next.js tez rivojlanayotgan framework bo'lib, har yangi versiyada muhim yangiliklar qo'shilmoqda:</p>
          <ul class="pl-3">
            <li>- Server Components</li>
            <li>- Edge Runtime</li>
            <li>- Turbopack</li>
            <li>- Middleware improvements</li>
          </ul>
        </div>

        <div>
          <h2 class="mb-1 text-xl font-bold">Xulosa</h2>
          <p>Next.js quyidagi hollarda eng yaxshi tanlov bo'ladi:</p>
          <ul class="pl-3 mb-4">
            <li>- SEO muhim bo'lgan loyihalar</li>
            <li>- Yuqori performance talab qiladigan ilovalar</li>
            <li>- Murakkab routing kerak bo'lganda</li>
            <li>- Enterprise darajadagi loyihalar</li>
            <li>- Tez development muhim bo'lganda</li>
          </ul>

          <p>Next.js tanlashdan oldin loyihangizning talablarini yaxshilab o'rganib chiqing.
          Agar yuqoridagi holatlardan birortasi sizning loyihangizga mos kelsa, Next.js juda yaxshi tanlov bo'lishi mumkin.</p>

          <p>Esda tutingki, framework tanlash - bu muhim qaror, va bu qarorni loyiha
          talablari, jamoa tajribasi va uzoq muddatli maqsadlarni hisobga olgan holda qabul qilish kerak.</p>
        </div>
      `
  },
  {
    id: 5,
    title: 'Loyihalarda Tailwind CSS dan foydalanishning afzalliklar va kamchiliklari',
    slug: 'tailwind-css-advantages-disadvantages',
    date: '4-iyun, 2025',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?height=600&width=1200',
    excerpt: 'Tailwind CSS utility-first CSS framework\'ining kuchli va zaif tomonlarini batafsil o\'rganib, loyihangiz uchun to\'g\'ri qaror qabul qiling.',
    content: `
      <p>Tailwind CSS - bu utility-first yondashuvga asoslangan CSS framework bo'lib, zamonaviy veb-dasturlashda
      tobora mashhur bo'lib bormoqda. Bu framework an'anaviy CSS yozish usulini butunlay o'zgartirib,
      komponent-asosli dizayn tizimini yaratishga yordam beradi. Ushbu maqolada Tailwind CSS ning asosiy
      afzalliklari va kamchiliklarini batafsil ko'rib chiqamiz.</p>

      <div>
        <h2 class="mb-1 text-xl font-bold">Tailwind CSS nima?</h2>
        <p>Tailwind CSS - bu low-level utility classlar to'plamini taqdim etuvchi CSS framework.
        Bootstrap yoki Foundation kabi boshqa frameworklardan farqli o'laroq, Tailwind tayyor komponentlar
        bermaydi, balki dizaynni noldan qurishga imkon beruvchi kichik utility classlarni taklif etadi.</p>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Tailwind CSS ning afzalliklari</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">1. Tez rivojlantirish va prototiplash</h3>
        <ul class="pl-3">
          <li>- HTML dan chiqmasdan dizayn yaratish imkoniyati</li>
          <li>- CSS fayllar o'rtasida o'tishga hojat yo'q</li>
          <li>- Tezkor prototiplash va eksperiment qilish</li>
          <li>- Dizayn tizimini darhol qo'llash</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">2. Kichik CSS hajmi</h3>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">PurgeCSS integration:</strong> Foydalanilmagan CSS-ni avtomatik olib tashlash</li>
          <li>- <strong class="font-semibold">JIT (Just-In-Time) mode:</strong> Faqat kerakli classlarni generatsiya qilish</li>
          <li>- <strong class="font-semibold">Production build:</strong> Juda kichik final CSS fayl hajmi</li>
          <li>- <strong class="font-semibold">No dead code:</strong> Ishlatilmagan kod muammosi yo'q</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">3. Izchil dizayn tizimi</h3>
        <ul class="pl-3">
          <li>- Oldindan belgilangan rang paletrasi</li>
          <li>- Standartlashtirilgan bo'shliqlar (spacing) tizimi</li>
          <li>- Typography va o'lchamlar bo'yicha izchillik</li>
          <li>- Responsive dizayn uchun qulay breakpointlar</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">4. Konfiguratsiya va moslashuvchanlik</h3>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">tailwind.config.js:</strong> To'liq sozlash imkoniyati</li>
          <li>- <strong class="font-semibold">Custom utilities:</strong> O'z utility classlaringizni qo'shish</li>
          <li>- <strong class="font-semibold">Theme customization:</strong> Brand ranglari va o'lchamlarni belgilash</li>
          <li>- <strong class="font-semibold">Plugin tizimi:</strong> Funksionallikni kengaytirish</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">5. Modern tooling qo'llab-quvvatlashi</h3>
        <ul class="pl-3">
          <li>- VS Code extension bilan IntelliSense</li>
          <li>- React, Vue, Angular bilan mukammal integratsiya</li>
          <li>- PostCSS va build toollar bilan ishlash</li>
          <li>- Hot reload va development experience</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Tailwind CSS ning kamchiliklari</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">1. HTML-ning ko'rinishi va o'qilishi</h3>
        <ul class="pl-3">
          <li>- Juda ko'p class nomlari HTML-ni "iflos" qiladi</li>
          <li>- Kodni o'qish qiyinlashadi, ayniqsa murakkab komponentlarda</li>
          <li>- Class nomlari juda uzun bo'lishi mumkin</li>
          <li>- Semantik HTML yozish qiyinlashadi</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">2. O'rganish va xotirda saqlash</h3>
        <ul class="pl-3">
          <li>- Minglab utility class nomlarini eslab qolish kerak</li>
          <li>- CSS bilgan dasturchi uchun ham yangi yondashuv</li>
          <li>- Responsive va state variantlarini o'rganish</li>
          <li>- Dokumentatsiyaga tez-tez murojaat qilish zarur</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">3. Dizayner bilan hamkorlik</h3>
        <ul class="pl-3">
          <li>- Dizaynerlar Tailwind syntax tushunmasligi mumkin</li>
          <li>- Figma dan kodga o'tish murakkablashadi</li>
          <li>- Custom dizayn talablarini amalga oshirish qiyinligi</li>
          <li>- Pixel-perfect dizayn yaratishda cheklovlar</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">4. Performance va debugging</h3>
        <ul class="pl-3">
          <li>- Development mode da katta CSS fayl hajmi</li>
          <li>- Browser DevTools da debug qilish qiyinligi</li>
          <li>- CSS Cascade bilan ishlashda muammolar</li>
          <li>- Class nomlarini izlash va o'zgartirish murakkabligi</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Tailwind CSS qachon ishlatish kerak?</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">Tailwind mos keladi:</h3>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Tez rivojlantirish:</strong> MVP va prototiplar uchun</li>
          <li>- <strong class="font-semibold">Komponent-asosli arxitektura:</strong> React, Vue komponentlar</li>
          <li>- <strong class="font-semibold">Dizayn tizimi:</strong> Izchil UI yaratish uchun</li>
          <li>- <strong class="font-semibold">Kichik jamoa:</strong> CSS architecture haqida tashvishlanmaslik</li>
          <li>- <strong class="font-semibold">Responsive dizayn:</strong> Mobile-first yondashuv</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">Tailwind mos kelmaydi:</h3>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Murakkab animatsiyalar:</strong> Custom CSS talab etilganda</li>
          <li>- <strong class="font-semibold">Legacy loyihalar:</strong> Mavjud CSS bilan integratsiya qiyin</li>
          <li>- <strong class="font-semibold">Unikal dizayn:</strong> Har bir element custom bo'lganda</li>
          <li>- <strong class="font-semibold">Katta jamoa:</strong> Har xil CSS yondashuvga majburiyat</li>
          <li>- <strong class="font-semibold">Content-heavy saytlar:</strong> Typography va matn ko'p bo'lganda</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Amaliy maslahatlar</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">Tailwind bilan ishlashni yaxshilash:</h3>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Component extraction:</strong> Ko'p ishlatiladigan patternlarni komponentga ajratish</li>
          <li>- <strong class="font-semibold">@apply directive:</strong> CSS faylida utility classlarni birlashtirish</li>
          <li>- <strong class="font-semibold">Custom utilities:</strong> O'z utility classlaringizni yaratish</li>
          <li>- <strong class="font-semibold">Tailwind UI:</strong> Tayyor komponentlar uchun premium resurs</li>
          <li>- <strong class="font-semibold">Prettier plugin:</strong> Class nomlarini avtomatik tartiblash</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Xulosa</h2>
        <p>Tailwind CSS zamonaviy frontend development uchun kuchli vosita bo'lib, tez rivojlantirish
        va izchil dizayn yaratish imkonini beradi. Uning utility-first yondashuvni o'rganish vaqt talab
        etsa-da, o'zlashtirganingizdan keyin development jarayonini sezilarli tezlashtiradi.</p>

        <p>Eng muhimi, Tailwind CSS ni tanlaganda loyihangizning xususiyatlari, jamoa tarkibi va
        uzoq muddatli rejalarni hisobga olish kerak. Kichik va o'rta loyihalar uchun bu juda yaxshi
        tanlov bo'lishi mumkin, lekin murakkab va noyob dizayn talablariga ega loyihalarda
        an'anaviy CSS yondashuvi yaxshiroq natija berishi mumkin.</p>

        <p>Har qanday texnologiya kabi, Tailwind CSS ham universal yechim emas. Uni to'g'ri
        kontekstda va kerakli joyda ishlatish orqali eng yaxshi natijaga erishish mumkin.</p>
      </div>
    `
  },

];
