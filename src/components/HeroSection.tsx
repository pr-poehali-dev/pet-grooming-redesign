import React from "react";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
            Профессиональный груминг в Санкт-Петербурге
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Более 10 лет заботимся о красоте и здоровье ваших питомцев.
            Современное оборудование, сертифицированные мастера и индивидуальный
            подход к каждому животному.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-amber-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-600 transition-all">
              Записаться на прием
            </button>
            <button className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-500 hover:text-white transition-all">
              Посмотреть цены
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Профессиональный груминг собак"
            className="rounded-2xl shadow-xl w-full"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center space-x-3">
              <Icon name="Award" className="text-amber-500" size={32} />
              <div>
                <p className="font-bold text-gray-900">10+ лет</p>
                <p className="text-sm text-gray-600">опыта работы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
