import React from "react";
import Icon from "@/components/ui/icon";
import { NAVIGATION, CONTACT_INFO } from "@/data/constants";

const Header = () => {
  return (
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
            {NAVIGATION.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block text-right">
              <p className="text-sm text-gray-600">Телефон:</p>
              <p className="text-lg font-bold text-amber-600">
                {CONTACT_INFO.phone}
              </p>
            </div>
            <button className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition-colors font-medium">
              Записаться
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
