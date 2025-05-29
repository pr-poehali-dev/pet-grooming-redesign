import { Service, ContactInfo, NavItem } from "@/types";

export const CONTACT_INFO: ContactInfo = {
  phone: "+7 (812) 555-0123",
  email: "info@baltogroom.ru",
  address: "ул. Невский проспект, 100, СПб",
  workingHours: "Ежедневно 9:00-21:00",
};

export const NAVIGATION: NavItem[] = [
  { href: "#services", label: "Услуги" },
  { href: "#prices", label: "Цены" },
  { href: "#about", label: "О нас" },
  { href: "#gallery", label: "Галерея" },
  { href: "#contact", label: "Контакты" },
];

export const SERVICES: Service[] = [
  {
    id: "grooming",
    title: "Стрижка собак",
    icon: "Scissors",
    features: [
      "Модельные стрижки",
      "Гигиеническая стрижка",
      "Тримминг жесткошерстных пород",
      "Креативные стрижки",
    ],
    price: "от 1800 ₽",
  },
  {
    id: "washing",
    title: "Мытье и сушка",
    icon: "Bath",
    features: [
      "Профессиональная косметика",
      "Лечебные шампуни",
      "Кондиционирование шерсти",
      "Укладка феном",
    ],
    price: "от 800 ₽",
  },
  {
    id: "care",
    title: "Комплексный уход",
    icon: "Heart",
    features: [
      "Стрижка когтей",
      "Чистка ушей",
      "Чистка зубов",
      "Гигиена желез",
    ],
    price: "от 500 ₽",
  },
];
