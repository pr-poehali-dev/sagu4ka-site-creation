import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const heroAnimation = useScrollAnimation({ threshold: 0.2 });
  const aboutAnimation = useScrollAnimation({ threshold: 0.2 });
  const servicesAnimation = useScrollAnimation({ threshold: 0.1 });
  const portfolioAnimation = useScrollAnimation({ threshold: 0.1 });
  const reviewsAnimation = useScrollAnimation({ threshold: 0.1 });
  const blogAnimation = useScrollAnimation({ threshold: 0.1 });
  const contactsAnimation = useScrollAnimation({ threshold: 0.1 });

  const services = [
    {
      title: "Веб-разработка",
      description: "Современные сайты и веб-приложения с использованием новейших технологий",
      icon: "Code",
    },
    {
      title: "Мобильные приложения",
      description: "Нативные и кроссплатформенные мобильные решения для iOS и Android",
      icon: "Smartphone",
    },
    {
      title: "UX/UI Дизайн",
      description: "Продуманный пользовательский интерфейс и опыт взаимодействия",
      icon: "Palette",
    },
    {
      title: "Консультации",
      description: "Экспертная оценка проектов и рекомендации по развитию",
      icon: "Users",
    },
  ];

  const portfolio = [
    {
      title: "E-commerce платформа",
      category: "Веб-разработка",
      image: "/img/a8c5c512-5810-46dd-b488-dcfc4c09bb0e.jpg",
    },
    {
      title: "Мобильное банковское приложение",
      category: "Mobile",
      image: "/img/0698cd2d-73b5-4619-b890-3d5f1a07e82e.jpg",
    },
    {
      title: "Корпоративный сайт",
      category: "Design",
      image: "/img/a8c5c512-5810-46dd-b488-dcfc4c09bb0e.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      company: "ТехноСтарт",
      text: "Отличная команда профессионалов! Проект выполнили точно в срок и превзошли ожидания.",
      rating: 5,
    },
    {
      name: "Михаил Иванов",
      company: "ДиджиталПро",
      text: "Качественная работа и индивидуальный подход к каждому клиенту. Рекомендую!",
      rating: 5,
    },
  ];

  const blogPosts = [
    {
      title: "Тренды веб-разработки 2024",
      excerpt: "Обзор главных технологий и подходов в современной веб-разработке",
      date: "15 января 2024",
      readTime: "5 мин",
    },
    {
      title: "UX принципы мобильных приложений",
      excerpt: "Как создать интуитивно понятный интерфейс для мобильных устройств",
      date: "10 января 2024", 
      readTime: "7 мин",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">sagu4ka.ru</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">Главная</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">О нас</a>
              <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-700 hover:text-primary-600 transition-colors">Портфолио</a>
              <a href="#reviews" className="text-gray-700 hover:text-primary-600 transition-colors">Отзывы</a>
              <a href="#blog" className="text-gray-700 hover:text-primary-600 transition-colors">Блог</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary-600 transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:flex bg-primary-500 hover:bg-primary-600">
              Связаться
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        ref={heroAnimation.ref}
        id="home" 
        className={`pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50 transition-all duration-700 ${
          heroAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-100">
                  🚀 Цифровые решения для бизнеса
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Создаем <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">инновационные</span> продукты
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Превращаем ваши идеи в успешные цифровые решения. 
                  Современная разработка, качественный дизайн и результат, который работает.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary-500 hover:bg-primary-600">
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                  Начать проект
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-600">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/img/0698cd2d-73b5-4619-b890-3d5f1a07e82e.jpg"
                  alt="Команда sagu4ka.ru"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutAnimation.ref}
        id="about" 
        className={`py-20 bg-gray-50 transition-all duration-700 ${
          aboutAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">О нас</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Мы — команда опытных разработчиков и дизайнеров, которая специализируется на создании 
              современных цифровых продуктов. Наша миссия — помочь бизнесу достигать новых высот 
              через инновационные технологические решения.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Наша миссия</h3>
                <p className="text-gray-600">Делать технологии доступными и полезными для каждого бизнеса</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Eye" size={32} className="text-secondary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Наше видение</h3>
                <p className="text-gray-600">Быть лидером в области инновационных IT-решений</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Наши ценности</h3>
                <p className="text-gray-600">Качество, инновации, клиентоориентированность</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesAnimation.ref}
        id="services" 
        className={`py-20 transition-all duration-700 ${
          servicesAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Услуги</h2>
            <p className="text-lg text-gray-600">
              Полный спектр услуг для развития вашего цифрового присутствия
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="ghost" className="p-0 text-primary-600 hover:bg-transparent">
                    Подробнее <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section 
        ref={portfolioAnimation.ref}
        id="portfolio" 
        className={`py-20 bg-gray-50 transition-all duration-700 ${
          portfolioAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Портфолио</h2>
            <p className="text-lg text-gray-600">
              Некоторые из наших успешных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Посмотреть
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section 
        ref={reviewsAnimation.ref}
        id="reviews" 
        className={`py-20 transition-all duration-700 ${
          reviewsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Отзывы</h2>
            <p className="text-lg text-gray-600">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section 
        ref={blogAnimation.ref}
        id="blog" 
        className={`py-20 bg-gray-50 transition-all duration-700 ${
          blogAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Блог</h2>
            <p className="text-lg text-gray-600">
              Полезные материалы о технологиях и разработке
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow group">
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="ghost" className="p-0 text-primary-600 hover:bg-transparent">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section 
        ref={contactsAnimation.ref}
        id="contacts" 
        className={`py-20 transition-all duration-700 ${
          contactsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Контакты</h2>
            <p className="text-lg text-gray-600">
              Готовы обсудить ваш проект? Свяжитесь с нами!
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">hello@sagu4ka.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                      <p className="text-gray-600">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Адрес</h3>
                      <p className="text-gray-600">Москва, Россия</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Расскажите о вашем проекте..."
                  ></textarea>
                </div>
                <Button className="w-full bg-primary-500 hover:bg-primary-600">
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold">sagu4ka.ru</span>
              </div>
              <p className="text-gray-400 mb-4">
                Создаем инновационные цифровые решения для вашего бизнеса
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Веб-разработка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Мобильные приложения</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UX/UI Дизайн</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Консультации</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@sagu4ka.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 sagu4ka.ru. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      {!chatOpen && (
        <Button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary-500 hover:bg-primary-600 shadow-2xl z-50 p-0"
        >
          <Icon name="MessageCircle" size={24} />
        </Button>
      )}

      {/* Chat Interface */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-80 bg-white rounded-2xl shadow-2xl border z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Онлайн чат</h3>
              <p className="text-sm opacity-90">Мы онлайн и готовы помочь!</p>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setChatOpen(false)}
              className="text-white hover:bg-white/20 p-1"
            >
              <Icon name="X" size={20} />
            </Button>
          </div>
          <div className="p-4 space-y-4 h-64 overflow-y-auto">
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <Icon name="User" size={16} className="text-primary-600" />
              </div>
              <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                <p className="text-sm">Здравствуйте! Как дела с проектом?</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 justify-end">
              <div className="bg-primary-500 text-white rounded-lg p-3 max-w-xs">
                <p className="text-sm">Привет! Отлично, скоро будет готов. Есть вопросы?</p>
              </div>
              <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
                <span className="text-secondary-600 font-semibold text-xs">S</span>
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Введите сообщение..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
              />
              <Button size="sm" className="bg-primary-500 hover:bg-primary-600">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;