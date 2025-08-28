export interface Education {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export const education: Education[] = [
  {
    institution: `Toshkent davlat transport universiteti`,
    degree: `Dasturiy injineringi yo'nalishi bo'yicha bakalavr`,
    location: `Toshkent, O'zbekiston`,
    startDate: `4-sentyabr, 2022`,
    endDate: `Hozirgi kungacha`,
    description: `Universitetda algoritmlar, veb-dasturlash, tarmoqlar va ma’lumotlar bazalari bo‘yicha mustahkam bilimlarga ega bo‘ldim. Python, JavaScript, PHP va C# tillarida tajriba orttirdim.`,
  },
];
