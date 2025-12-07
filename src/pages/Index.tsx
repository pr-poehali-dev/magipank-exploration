import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const mockCharacters = [
  {
    id: 1,
    name: 'Аврелия Стормвинд',
    race: 'Человек',
    class: 'Аркано-навигатор',
    faction: 'Королевская Экспедиция',
    portrait: '🧭',
    status: 'active',
    bio: 'Капитан экспедиционного корабля "Звезда Востока". Специализируется на картографии магических линий.'
  },
  {
    id: 2,
    name: 'Торн Железный Коготь',
    race: 'Дварф',
    class: 'Инженер-механик',
    faction: 'Гильдия Ремесленников',
    portrait: '⚙️',
    status: 'active',
    bio: 'Мастер паровых механизмов и артефактов. Построил первую маголабораторию в поселении.'
  },
  {
    id: 3,
    name: 'Лириэль Лунная Тень',
    race: 'Эльф',
    class: 'Исследователь',
    faction: 'Орден Хранителей',
    portrait: '🌙',
    status: 'active',
    bio: 'Специалист по древним руинам и культуре коренных племён. Владеет диалектом лесных народов.'
  },
  {
    id: 4,
    name: 'Каспар Вейн',
    race: 'Полуэльф',
    class: 'Торговец',
    faction: 'Вольные Купцы',
    portrait: '💼',
    status: 'active',
    bio: 'Организовал торговые пути между поселением и племенами. Знаток местной флоры и фауны.'
  }
];

const mockSettlement = {
  population: 247,
  defense: 68,
  research: 82,
  trade: 75,
  tribalRelations: 55,
  threatLevel: 'Умеренный'
};

const mockTestimonials = [
  {
    author: 'Аврелия Стормвинд',
    text: 'День 47: Обнаружили руины древней цивилизации на востоке. Магические линии здесь исключительно сильны.',
    date: '12.11.2024'
  },
  {
    author: 'Торн Железный Коготь',
    text: 'Новый паровой механизм работает превосходно! Теперь можем очищать воду в три раза быстрее.',
    date: '08.11.2024'
  },
  {
    author: 'Лириэль Лунная Тень',
    text: 'Установлен контакт с племенем Речного Тумана. Они согласны на культурный обмен!',
    date: '05.11.2024'
  }
];

export default function Index() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [selectedFaction, setSelectedFaction] = useState<string>('all');

  const filteredCharacters = selectedFaction === 'all' 
    ? mockCharacters 
    : mockCharacters.filter(char => char.faction === selectedFaction);

  const factions = ['Королевская Экспедиция', 'Гильдия Ремесленников', 'Орден Хранителей', 'Вольные Купцы'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand via-background to-sand">
      <div 
        className="absolute inset-0 opacity-5 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B87333' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <nav className="relative border-b border-copper/30 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Compass" className="w-8 h-8 text-copper" />
              <div>
                <h1 className="text-2xl font-bold text-copper font-serif">Новый Континент</h1>
                <p className="text-sm text-muted-foreground">Магипанк Хроники</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Icon name="LogIn" className="w-4 h-4 mr-2" />
                Войти
              </Button>
              <Button size="sm" className="bg-copper hover:bg-copper/90">
                <Icon name="UserPlus" className="w-4 h-4 mr-2" />
                Создать персонажа
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="relative">
        <div className="border-b border-copper/30 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <TabsList className="container mx-auto px-4 h-auto p-0 bg-transparent">
            <TabsTrigger value="home" className="data-[state=active]:bg-copper/10 data-[state=active]:text-copper">
              <Icon name="Home" className="w-4 h-4 mr-2" />
              Главная
            </TabsTrigger>
            <TabsTrigger value="settlement" className="data-[state=active]:bg-copper/10 data-[state=active]:text-copper" onClick={() => navigate('/settlement')}>
              <Icon name="Castle" className="w-4 h-4 mr-2" />
              Поселение
            </TabsTrigger>
            <TabsTrigger value="characters" className="data-[state=active]:bg-copper/10 data-[state=active]:text-copper">
              <Icon name="Users" className="w-4 h-4 mr-2" />
              Персонажи
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="home" className="mt-0">
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center animate-fade-in">
                <Badge className="mb-4 bg-copper/20 text-copper border-copper/30">
                  Эпоха Великих Открытий
                </Badge>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-copper font-serif">
                  Добро пожаловать в Экспедицию
                </h2>
                <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                  Мы — сообщество исследователей, отправившихся на Новый Континент. 
                  Здесь магия переплетается с паровыми механизмами, древние руины хранят тайны, 
                  а каждая сессия пишет новую главу в хронике нашего поселения.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button size="lg" className="bg-copper hover:bg-copper/90">
                    <Icon name="Map" className="w-5 h-5 mr-2" />
                    Начать приключение
                  </Button>
                  <Button size="lg" variant="outline">
                    <Icon name="BookOpen" className="w-5 h-5 mr-2" />
                    Хроники мира
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-card/30 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold text-center mb-12 text-copper font-serif">
                О нашей экспедиции
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <Card className="border-copper/30 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all animate-scale-in">
                  <CardHeader>
                    <div className="w-12 h-12 bg-copper/20 rounded-lg flex items-center justify-center mb-2">
                      <Icon name="Swords" className="w-6 h-6 text-copper" />
                    </div>
                    <CardTitle className="font-serif text-copper">Живые сессии</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Проводим оффлайн и онлайн сессии, где каждое решение влияет на судьбу поселения
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-copper/30 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all animate-scale-in" style={{animationDelay: '0.1s'}}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-copper/20 rounded-lg flex items-center justify-center mb-2">
                      <Icon name="ScrollText" className="w-6 h-6 text-copper" />
                    </div>
                    <CardTitle className="font-serif text-copper">Хроника событий</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Все приключения фиксируются на сайте, создавая живую историю нашего мира
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-copper/30 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all animate-scale-in" style={{animationDelay: '0.2s'}}>
                  <CardHeader>
                    <div className="w-12 h-12 bg-copper/20 rounded-lg flex items-center justify-center mb-2">
                      <Icon name="Users" className="w-6 h-6 text-copper" />
                    </div>
                    <CardTitle className="font-serif text-copper">Коммьюнити</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Вместе исследуем неизведанные земли на границе цивилизации
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold text-center mb-12 text-copper font-serif">
                Записи из полевых дневников
              </h3>
              <div className="max-w-3xl mx-auto space-y-6">
                {mockTestimonials.map((testimonial, idx) => (
                  <Card key={idx} className="border-copper/30 bg-card/80 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-copper/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Feather" className="w-6 h-6 text-copper" />
                        </div>
                        <div className="flex-1">
                          <p className="text-foreground/90 italic mb-3 leading-relaxed">
                            "{testimonial.text}"
                          </p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-copper font-medium">— {testimonial.author}</span>
                            <span className="text-muted-foreground">{testimonial.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-card/30 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-3xl font-bold mb-6 text-copper font-serif">
                  Вступить в экспедицию
                </h3>
                <p className="text-muted-foreground mb-8">
                  Присоединяйтесь к нашему сообществу исследователей. Новый континент ждёт отважных!
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button size="lg" variant="outline">
                    <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
                    Связаться в Discord
                  </Button>
                  <Button size="lg" variant="outline">
                    <Icon name="Mail" className="w-5 h-5 mr-2" />
                    expedition@newcontinent.com
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="settlement" className="mt-0">
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12 animate-fade-in">
                  <Badge className="mb-4 bg-copper/20 text-copper border-copper/30">
                    Поселение на Фронтире
                  </Badge>
                  <h2 className="text-4xl font-bold mb-4 text-copper font-serif">
                    Форт "Новая Заря"
                  </h2>
                  <p className="text-muted-foreground">
                    Наш форпост на краю цивилизации. Каждый день — борьба и открытия.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <Card className="border-copper/30 bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 font-serif text-copper">
                        <Icon name="Users" className="w-5 h-5" />
                        Население
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-foreground mb-2">{mockSettlement.population}</div>
                      <p className="text-sm text-muted-foreground">жителей</p>
                    </CardContent>
                  </Card>

                  <Card className="border-copper/30 bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 font-serif text-copper">
                        <Icon name="Shield" className="w-5 h-5" />
                        Оборона
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-foreground mb-2">{mockSettlement.defense}%</div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-copper h-2 rounded-full" style={{width: `${mockSettlement.defense}%`}}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-copper/30 bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 font-serif text-copper">
                        <Icon name="FlaskConical" className="w-5 h-5" />
                        Исследования
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-foreground mb-2">{mockSettlement.research}%</div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full" style={{width: `${mockSettlement.research}%`}}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-copper/30 bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 font-serif text-copper">
                        <Icon name="Package" className="w-5 h-5" />
                        Торговля
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-foreground mb-2">{mockSettlement.trade}%</div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-copper h-2 rounded-full" style={{width: `${mockSettlement.trade}%`}}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-copper/30 bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 font-serif text-copper">
                        <Icon name="Handshake" className="w-5 h-5" />
                        Отношения с племенами
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-foreground mb-2">{mockSettlement.tribalRelations}%</div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-secondary h-2 rounded-full" style={{width: `${mockSettlement.tribalRelations}%`}}></div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-copper/30 bg-card/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 font-serif text-copper">
                        <Icon name="AlertTriangle" className="w-5 h-5" />
                        Уровень угроз
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="outline" className="text-lg">
                        {mockSettlement.threatLevel}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-copper/30 bg-card/80 backdrop-blur-sm mb-12">
                  <CardHeader>
                    <CardTitle className="font-serif text-copper text-2xl">Активные события</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg">
                      <Icon name="Skull" className="w-5 h-5 text-destructive mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">Набеги из Глубин</h4>
                        <p className="text-sm text-muted-foreground">
                          Подземные существа активизировались после землетрясения. Необходима защита шахт.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg">
                      <Icon name="Sparkles" className="w-5 h-5 text-secondary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">Артефакт в руинах</h4>
                        <p className="text-sm text-muted-foreground">
                          Разведчики обнаружили магический артефакт в восточных руинах. Требуется экспедиция.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-secondary/10 rounded-lg">
                      <Icon name="Ship" className="w-5 h-5 text-copper mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">Прибытие припасов</h4>
                        <p className="text-sm text-muted-foreground">
                          Ожидается корабль с провизией и новыми колонистами через 3 дня.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-copper/30 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="font-serif text-copper text-2xl">Строения поселения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { name: 'Порт', icon: 'Anchor', status: 'Отлично' },
                        { name: 'Таверна "Компас"', icon: 'Beer', status: 'Работает' },
                        { name: 'Кузница', icon: 'Hammer', status: 'Расширяется' },
                        { name: 'Маголаборатория', icon: 'FlaskConical', status: 'Активна' },
                        { name: 'Рынок', icon: 'Store', status: 'Работает' },
                        { name: 'Сторожевая башня', icon: 'Castle', status: 'На ремонте' }
                      ].map((building, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                          <div className="w-10 h-10 bg-copper/20 rounded-lg flex items-center justify-center">
                            <Icon name={building.icon} className="w-5 h-5 text-copper" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-foreground">{building.name}</div>
                            <div className="text-sm text-muted-foreground">{building.status}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="characters" className="mt-0">
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 animate-fade-in">
                  <Badge className="mb-4 bg-copper/20 text-copper border-copper/30">
                    Галерея путешественников
                  </Badge>
                  <h2 className="text-4xl font-bold mb-4 text-copper font-serif">
                    Герои Нового Континента
                  </h2>
                  <p className="text-muted-foreground">
                    Каждый из нас пишет свою историю на этой неизведанной земле
                  </p>
                </div>

                <Card className="border-copper/30 bg-card/80 backdrop-blur-sm mb-8">
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-2">
                      <Button 
                        size="sm" 
                        variant={selectedFaction === 'all' ? 'default' : 'outline'}
                        onClick={() => setSelectedFaction('all')}
                        className={selectedFaction === 'all' ? 'bg-copper hover:bg-copper/90' : ''}
                      >
                        Все персонажи
                      </Button>
                      {factions.map(faction => (
                        <Button 
                          key={faction}
                          size="sm" 
                          variant={selectedFaction === faction ? 'default' : 'outline'}
                          onClick={() => setSelectedFaction(faction)}
                          className={selectedFaction === faction ? 'bg-copper hover:bg-copper/90' : ''}
                        >
                          {faction}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {filteredCharacters.map((character, idx) => (
                    <Card key={character.id} className="border-copper/30 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all cursor-pointer animate-scale-in" style={{animationDelay: `${idx * 0.1}s`}}>
                      <CardContent className="pt-6">
                        <div className="flex gap-4">
                          <div className="text-6xl flex-shrink-0">
                            {character.portrait}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-bold text-copper font-serif">
                                {character.name}
                              </h3>
                              <Badge className="bg-green-500/20 text-green-700 border-green-500/30">
                                Активен
                              </Badge>
                            </div>
                            <div className="space-y-2 mb-3">
                              <div className="flex items-center gap-2 text-sm">
                                <Icon name="User" className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Раса:</span>
                                <span className="text-foreground font-medium">{character.race}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Icon name="Sparkles" className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Класс:</span>
                                <span className="text-foreground font-medium">{character.class}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <Icon name="Flag" className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Фракция:</span>
                                <Badge variant="outline" className="text-xs">
                                  {character.faction}
                                </Badge>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                              {character.bio}
                            </p>
                            <Button variant="outline" size="sm" className="w-full">
                              <Icon name="Eye" className="w-4 h-4 mr-2" />
                              Просмотреть профиль
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Button size="lg" className="bg-copper hover:bg-copper/90">
                    <Icon name="UserPlus" className="w-5 h-5 mr-2" />
                    Создать нового персонажа
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>
      </Tabs>

      <footer className="relative border-t border-copper/30 bg-card/50 backdrop-blur-sm py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Compass" className="w-6 h-6 text-copper" />
            <span className="text-lg font-semibold text-copper font-serif">Новый Континент</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Хроники магипанк-мира. Эпоха Великих Открытий.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © 2024 Ролевое коммьюнити "Новый Континент"
          </p>
        </div>
      </footer>
    </div>
  );
}