import React from "react";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Icon name="Scissors" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 font-montserrat">
                  БалтоГрум
                </h1>
                <p className="text-sm text-gray-600">
                  Салон красоты для животных
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                Услуги
              </a>
              <a
                href="#prices"
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                Цены
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                О нас
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                Галерея
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                Контакты
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden md:block text-right">
                <p className="text-sm text-gray-600">Телефон:</p>
                <p className="text-lg font-bold text-amber-600">
                  +7 (812) 555-0123
                </p>
              </div>
              <button className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors font-medium">
                Записаться
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-montserrat leading-tight">
              Профессиональный груминг в Санкт-Петербурге
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Более 10 лет заботимся о красоте и здоровье ваших питомцев.
              Современное оборудование, сертифицированные мастера и
              индивидуальный подход к каждому животному.
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Наши услуги
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по уходу за вашими питомцами от
              профессиональных грумеров
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all">
              <div className="text-amber-500 mb-4">
                <Icon name="Scissors" size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Стрижка собак
              </h4>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Модельные стрижки</li>
                <li>• Гигиеническая стрижка</li>
                <li>• Тримминг жесткошерстных пород</li>
                <li>• Креативные стрижки</li>
              </ul>
              <p className="text-amber-600 font-bold text-xl">от 1800 ₽</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all">
              <div className="text-amber-500 mb-4">
                <Icon name="Bath" size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Мытье и сушка
              </h4>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Профессиональная косметика</li>
                <li>• Лечебные шампуни</li>
                <li>• Кондиционирование шерсти</li>
                <li>• Укладка феном</li>
              </ul>
              <p className="text-amber-600 font-bold text-xl">от 800 ₽</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all">
              <div className="text-amber-500 mb-4">
                <Icon name="Heart" size={48} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Комплексный уход
              </h4>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Стрижка когтей</li>
                <li>• Чистка ушей</li>
                <li>• Чистка зубов</li>
                <li>• Гигиена желез</li>
              </ul>
              <p className="text-amber-600 font-bold text-xl">от 500 ₽</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-montserrat">
                Почему выбирают нас?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Опытные мастера
                    </h4>
                    <p className="text-gray-600">
                      Наши грумеры имеют многолетний опыт и регулярно повышают
                      квалификацию
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Безопасность
                    </h4>
                    <p className="text-gray-600">
                      Используем только качественную косметику и стерилизованные
                      инструменты
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Удобная запись
                    </h4>
                    <p className="text-gray-600">
                      Записывайтесь онлайн или по телефону в удобное для вас
                      время
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Профессиональный грумер за работой"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Наши работы
            </h3>
            <p className="text-lg text-gray-600">
              Результаты работы наших мастеров говорят сами за себя
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={`https://images.unsplash.com/photo-${1590736969966 + item}-dog-grooming?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                    alt={`Работа ${item}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Icon
                      name="ZoomIn"
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      size={32}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-amber-500 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
                Записаться на груминг
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Позвоните нам или оставьте заявку — мы свяжемся с вами в течение
                15 минут
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} />
                  <div>
                    <p className="font-semibold">Телефон:</p>
                    <p className="text-xl">+7 (812) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} />
                  <div>
                    <p className="font-semibold">Адрес:</p>
                    <p className="text-xl">ул. Невский проспект, 100, СПб</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={24} />
                  <div>
                    <p className="font-semibold">Время работы:</p>
                    <p className="text-xl">Ежедневно 9:00-21:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm">
              <h4 className="text-2xl font-bold mb-6">Быстрая запись</h4>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-white placeholder-opacity-70 text-white"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-white placeholder-opacity-70 text-white"
                />
                <textarea
                  placeholder="Порода и размер питомца"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-white placeholder-opacity-70 text-white resize-none"
                ></textarea>
                <button className="w-full bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Записаться
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Icon name="Scissors" className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold font-montserrat">
                  БалтоГрум
                </span>
              </div>
              <p className="text-gray-400">
                Профессиональный салон красоты для животных в Санкт-Петербурге
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Стрижка собак</li>
                <li>Стрижка кошек</li>
                <li>Мытье и сушка</li>
                <li>Комплексный уход</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <p>+7 (812) 555-0123</p>
                <p>info@baltogroom.ru</p>
                <p>ул. Невский проспект, 100</p>
                <p>Ежедневно 9:00-21:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 БалтоГрум. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
