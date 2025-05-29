export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  workingHours: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  features: string[];
  price: string;
}

export interface NavItem {
  href: string;
  label: string;
}
