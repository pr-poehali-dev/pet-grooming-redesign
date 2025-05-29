import React from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Heart" className="text-purple-600" size={28} />
              <h1 className="text-2xl font-bold text-gray-900 font-montserrat">
                ПетГрум
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Галерея
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Записаться
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-montserrat">
            Профессиональный груминг
            <span className="block text-purple-600">для ваших любимцев</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Мы заботимся о красоте и здоровье ваших собак и кошек с любовью и
            профессионализмом. Современное оборудование, опытные мастера и
            индивидуальный подход к каждому питомцу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-700 transition-all hover:scale-105">
              Записаться на груминг
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all">
              Узнать цены
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12 font-montserrat">
            Наши услуги
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dog Grooming */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all hover:scale-105">
              <div className="text-purple-600 mb-4">
                <Icon name="Dog" size={48} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                Груминг собак
              </h4>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Стрижка и тримминг</li>
                <li>• Мытье и сушка</li>
                <li>• Стрижка когтей</li>
                <li>• Чистка ушей</li>
              </ul>
              <p className="text-purple-600 font-bold text-xl">от 1500 ₽</p>
            </div>

            {/* Cat Grooming */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all hover:scale-105">
              <div className="text-orange-600 mb-4">
                <Icon name="Cat" size={48} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                Груминг кошек
              </h4>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Стрижка и моделирование</li>
                <li>• Купание</li>
                <li>• Вычесывание</li>
                <li>• Стрижка когтей</li>
              </ul>
              <p className="text-orange-600 font-bold text-xl">от 1200 ₽</p>
            </div>

            {/* Spa Services */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl hover:shadow-lg transition-all hover:scale-105">
              <div className="text-emerald-600 mb-4">
                <Icon name="Sparkles" size={48} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                SPA-процедуры
              </h4>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Ароматерапия</li>
                <li>• Массаж</li>
                <li>• Косметические маски</li>
                <li>• Укладка шерсти</li>
              </ul>
              <p className="text-emerald-600 font-bold text-xl">от 800 ₽</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12 font-montserrat">
            Наши работы
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-105"
              >
                <img
                  src={`https://images.unsplash.com/photo-${1590736969966 + item}-${Math.random().toString(36).substring(7)}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                  alt={`Груминг ${item}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">
                    Профессиональная стрижка
                  </h5>
                  <p className="text-gray-600 text-sm">До и после груминга</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-8 font-montserrat">
            Записаться на груминг
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Позвоните нам или оставьте заявку онлайн
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="flex items-center space-x-3">
              <Icon name="Phone" size={24} />
              <span className="text-xl font-semibold">+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="MapPin" size={24} />
              <span className="text-xl">ул. Пушкина, 10, Москва</span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon name="Clock" size={24} />
              <span className="text-xl">Ежедневно 9:00-21:00</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Heart" className="text-purple-400" size={24} />
            <span className="text-xl font-bold font-montserrat">ПетГрум</span>
          </div>
          <p className="text-gray-400">© 2024 ПетГрум. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
