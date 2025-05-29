import React from "react";
import Icon from "@/components/ui/icon";
import { SERVICES } from "@/data/constants";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Наши услуги
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг по уходу за вашими питомцами от профессиональных
            грумеров
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all"
            >
              <div className="text-amber-500 mb-4">
                <Icon name={service.icon as any} size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h4>
              <ul className="text-gray-600 space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
              <p className="text-amber-600 font-bold text-xl">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
