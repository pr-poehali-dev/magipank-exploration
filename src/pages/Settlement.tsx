import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { X } from 'lucide-react';

type BuildingType = 'port' | 'forge' | 'tavern' | 'lab' | 'tower' | 'market' | 'hq' | null;

interface BuildingInfo {
  name: string;
  icon: string;
  description: string;
  content: JSX.Element;
}

const mockSettlement = {
  population: 247,
  defense: 68,
  research: 82,
  trade: 75,
  tribalRelations: 55,
  threatLevel: 'Умеренный'
};

export default function Settlement() {
  const [selectedBuilding, setSelectedBuilding] = useState<BuildingType>(null);
  const [hoveredBuilding, setHoveredBuilding] = useState<BuildingType>(null);

  const buildings: Record<Exclude<BuildingType, null>, BuildingInfo> = {
    port: {
      name: 'Порт',
      icon: 'Anchor',
      description: 'Морские врата колонии',
      content: (
        <div className="space-y-4">
          <div className="bg-secondary/10 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="Ship" className="w-4 h-4 text-copper" />
              Прибытие кораблей
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">"Морской Дракон"</span>
                <Badge variant="outline" className="text-xs">Через 2 дня</Badge>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">"Звезда Востока"</span>
                <Badge variant="outline" className="text-xs">Через 5 дней</Badge>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="Package" className="w-4 h-4 text-copper" />
              Ожидаемые поставки
            </h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Провизия (200 ящиков)</li>
              <li>• Строительные материалы</li>
              <li>• Магические кристаллы</li>
              <li>• Медные механизмы</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="Users" className="w-4 h-4 text-copper" />
              Новые колонисты
            </h4>
            <p className="text-sm text-muted-foreground">
              Ожидается прибытие 23 новых поселенцев: ремесленники, фермеры и исследователи.
            </p>
          </div>

          <div className="bg-copper/10 p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Торговые связи</span>
              <span className="text-sm font-bold text-copper">Активны</span>
            </div>
          </div>
        </div>
      )
    },
    forge: {
      name: 'Кузница',
      icon: 'Hammer',
      description: 'Мастерская оружия и доспехов',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary/10 p-4 rounded-lg text-center">
              <Icon name="Shield" className="w-8 h-8 text-copper mx-auto mb-2" />
              <div className="text-2xl font-bold">Уровень 2</div>
              <div className="text-xs text-muted-foreground">Развитие</div>
            </div>
            <div className="bg-secondary/10 p-4 rounded-lg text-center">
              <Icon name="Swords" className="w-8 h-8 text-copper mx-auto mb-2" />
              <div className="text-2xl font-bold">+15%</div>
              <div className="text-xs text-muted-foreground">Бонус обороны</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Текущее производство</h4>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Стальные мечи</span>
                  <span className="text-muted-foreground">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Латные доспехи</span>
                  <span className="text-muted-foreground">40%</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Мастер-кузнец</h4>
            <div className="flex items-center gap-3">
              <div className="text-3xl">⚒️</div>
              <div>
                <div className="font-medium">Торн Железный Коготь</div>
                <div className="text-sm text-muted-foreground">Дварфийский мастер</div>
              </div>
            </div>
          </div>

          <div className="bg-copper/10 p-3 rounded-lg">
            <div className="text-sm">
              <span className="font-medium">Состояние:</span> Отличное. Требуется больше руды для расширения.
            </div>
          </div>
        </div>
      )
    },
    tavern: {
      name: 'Таверна "Компас"',
      icon: 'Beer',
      description: 'Сердце общественной жизни',
      content: (
        <div className="space-y-4">
          <div className="bg-secondary/10 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Icon name="MessageSquare" className="w-4 h-4 text-copper" />
              Слухи и события
            </h4>
            <div className="space-y-3">
              <div className="text-sm">
                <div className="font-medium mb-1">🗺️ Найдены древние руины</div>
                <div className="text-muted-foreground">
                  Путешественники сообщают о странных строениях в северных джунглях.
                </div>
              </div>
              <div className="text-sm">
                <div className="font-medium mb-1">⚡ Магические аномалии</div>
                <div className="text-muted-foreground">
                  В районе восточных гор замечены всплески эфирной энергии.
                </div>
              </div>
              <div className="text-sm">
                <div className="font-medium mb-1">🤝 Племя Речного Тумана</div>
                <div className="text-muted-foreground">
                  Шаман племени приглашает на торговый совет в полнолуние.
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="Users" className="w-4 h-4 text-copper" />
              Прибывшие авантюристы
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-2xl">🗡️</span>
                <div>
                  <div className="font-medium">Варг Охотник</div>
                  <div className="text-xs text-muted-foreground">Наёмный следопыт</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-2xl">🔮</span>
                <div>
                  <div className="font-medium">Селена Звёздная</div>
                  <div className="text-xs text-muted-foreground">Маг-прорицатель</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-copper/10 p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Репутация поселения</span>
              <Badge className="bg-green-500/20 text-green-700 border-green-500/30">
                Растущая
              </Badge>
            </div>
          </div>
        </div>
      )
    },
    lab: {
      name: 'Маголаборатория',
      icon: 'FlaskConical',
      description: 'Центр арканных исследований',
      content: (
        <div className="space-y-4">
          <div className="bg-secondary/10 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Icon name="Sparkles" className="w-4 h-4 text-copper" />
              Активные исследования
            </h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Картография магических линий</span>
                  <span className="text-muted-foreground">82%</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Изучение кристаллов</span>
                  <span className="text-muted-foreground">45%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Арканно-паровые механизмы</span>
                  <span className="text-muted-foreground">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="Gem" className="w-4 h-4 text-copper" />
              Найденные артефакты
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-xl">💎</span>
                <div>
                  <div className="font-medium">Эфирный кристалл</div>
                  <div className="text-xs text-muted-foreground">Источник магической энергии</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">📜</span>
                <div>
                  <div className="font-medium">Древний свиток</div>
                  <div className="text-xs text-muted-foreground">Неизвестный язык, изучается</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🗝️</span>
                <div>
                  <div className="font-medium">Рунный ключ</div>
                  <div className="text-xs text-muted-foreground">Назначение неясно</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-copper/10 p-3 rounded-lg">
            <div className="text-sm">
              <span className="font-medium">Главный исследователь:</span> Архимаг Элрик Звёздный
            </div>
          </div>
        </div>
      )
    },
    tower: {
      name: 'Сторожевая башня',
      icon: 'Castle',
      description: 'Первая линия обороны',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary/10 p-4 rounded-lg text-center">
              <Icon name="AlertTriangle" className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-lg font-bold">Умеренный</div>
              <div className="text-xs text-muted-foreground">Уровень угроз</div>
            </div>
            <div className="bg-secondary/10 p-4 rounded-lg text-center">
              <Icon name="Shield" className="w-8 h-8 text-copper mx-auto mb-2" />
              <div className="text-lg font-bold">68%</div>
              <div className="text-xs text-muted-foreground">Состояние обороны</div>
            </div>
          </div>

          <div className="bg-destructive/10 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Icon name="Skull" className="w-4 h-4 text-destructive" />
              Недавние инциденты
            </h4>
            <div className="space-y-2 text-sm">
              <div>
                <div className="font-medium mb-1">Набег подземных тварей</div>
                <div className="text-muted-foreground text-xs">3 дня назад • Отражён</div>
              </div>
              <div>
                <div className="font-medium mb-1">Стая диких виверн</div>
                <div className="text-muted-foreground text-xs">Неделю назад • Отогнаны</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="Users" className="w-4 h-4 text-copper" />
              Гарнизон
            </h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div>• Городская стража: 45 бойцов</div>
              <div>• Наёмники: 12 бойцов</div>
              <div>• Боевые маги: 3 мага</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Дозорные патрули</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Северный сектор</span>
                <Badge variant="outline" className="text-xs bg-green-500/10">Чисто</Badge>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Восточный сектор</span>
                <Badge variant="outline" className="text-xs bg-orange-500/10">Активность</Badge>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Южный сектор</span>
                <Badge variant="outline" className="text-xs bg-green-500/10">Чисто</Badge>
              </div>
            </div>
          </div>
        </div>
      )
    },
    market: {
      name: 'Рынок',
      icon: 'Store',
      description: 'Торговая площадь',
      content: (
        <div className="space-y-4">
          <div className="bg-secondary/10 p-4 rounded-lg text-center">
            <Icon name="TrendingUp" className="w-8 h-8 text-copper mx-auto mb-2" />
            <div className="text-2xl font-bold">2,450 золотых</div>
            <div className="text-sm text-muted-foreground">Недельный оборот</div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Icon name="Package" className="w-4 h-4 text-copper" />
              Доступные товары
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-background/50 rounded">
                <div className="flex items-center gap-2">
                  <span>🌾</span>
                  <span className="text-sm">Провизия</span>
                </div>
                <Badge variant="outline" className="text-xs">В избытке</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-background/50 rounded">
                <div className="flex items-center gap-2">
                  <span>⚙️</span>
                  <span className="text-sm">Механизмы</span>
                </div>
                <Badge variant="outline" className="text-xs">Средне</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-background/50 rounded">
                <div className="flex items-center gap-2">
                  <span>💎</span>
                  <span className="text-sm">Кристаллы</span>
                </div>
                <Badge variant="outline" className="text-xs bg-orange-500/10">Мало</Badge>
              </div>
              <div className="flex justify-between items-center p-2 bg-background/50 rounded">
                <div className="flex items-center gap-2">
                  <span>🪵</span>
                  <span className="text-sm">Древесина</span>
                </div>
                <Badge variant="outline" className="text-xs">В избытке</Badge>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Торговые бонусы</h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div>• +10% к ценам на экспорт</div>
              <div>• -5% на импортные товары</div>
              <div>• Доступ к племенным товарам</div>
            </div>
          </div>

          <div className="bg-copper/10 p-3 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Статус торговли</span>
              <span className="text-sm font-bold text-copper">Процветает</span>
            </div>
          </div>
        </div>
      )
    },
    hq: {
      name: 'Штаб экспедиции',
      icon: 'Compass',
      description: 'Центр управления колонией',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-secondary/10 p-3 rounded-lg text-center">
              <Icon name="Users" className="w-6 h-6 text-copper mx-auto mb-1" />
              <div className="text-xl font-bold">{mockSettlement.population}</div>
              <div className="text-xs text-muted-foreground">Население</div>
            </div>
            <div className="bg-secondary/10 p-3 rounded-lg text-center">
              <Icon name="Shield" className="w-6 h-6 text-copper mx-auto mb-1" />
              <div className="text-xl font-bold">{mockSettlement.defense}%</div>
              <div className="text-xs text-muted-foreground">Оборона</div>
            </div>
            <div className="bg-secondary/10 p-3 rounded-lg text-center">
              <Icon name="FlaskConical" className="w-6 h-6 text-copper mx-auto mb-1" />
              <div className="text-xl font-bold">{mockSettlement.research}%</div>
              <div className="text-xs text-muted-foreground">Исследования</div>
            </div>
            <div className="bg-secondary/10 p-3 rounded-lg text-center">
              <Icon name="Package" className="w-6 h-6 text-copper mx-auto mb-1" />
              <div className="text-xl font-bold">{mockSettlement.trade}%</div>
              <div className="text-xs text-muted-foreground">Торговля</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="Handshake" className="w-4 h-4 text-copper" />
              Отношения с племенами
            </h4>
            <Progress value={mockSettlement.tribalRelations} className="h-3 mb-1" />
            <div className="text-xs text-muted-foreground text-right">{mockSettlement.tribalRelations}%</div>
          </div>

          <div className="bg-secondary/10 p-4 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Icon name="AlertCircle" className="w-4 h-4 text-copper" />
              Активные события
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Icon name="Skull" className="w-4 h-4 text-destructive mt-0.5" />
                <div>
                  <div className="font-medium">Набеги из Глубин</div>
                  <div className="text-xs text-muted-foreground">Требуется защита шахт</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Sparkles" className="w-4 h-4 text-secondary mt-0.5" />
                <div>
                  <div className="font-medium">Артефакт в руинах</div>
                  <div className="text-xs text-muted-foreground">Нужна экспедиция</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Ship" className="w-4 h-4 text-copper mt-0.5" />
                <div>
                  <div className="font-medium">Прибытие припасов</div>
                  <div className="text-xs text-muted-foreground">Через 3 дня</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Совет экспедиции</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-xl">🧭</span>
                <div>
                  <div className="font-medium">Командор Марсель</div>
                  <div className="text-xs text-muted-foreground">Глава экспедиции</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">⚖️</span>
                <div>
                  <div className="font-medium">Судья Элеонора</div>
                  <div className="text-xs text-muted-foreground">Хранитель законов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  const buildingPositions: Record<Exclude<BuildingType, null>, { top: string; left: string; width: string; height: string }> = {
    hq: { top: '35%', left: '42%', width: '18%', height: '25%' },
    port: { top: '15%', left: '15%', width: '20%', height: '20%' },
    forge: { top: '55%', left: '20%', width: '15%', height: '18%' },
    tavern: { top: '25%', left: '65%', width: '18%', height: '20%' },
    lab: { top: '50%', left: '65%', width: '16%', height: '18%' },
    tower: { top: '10%', left: '75%', width: '12%', height: '25%' },
    market: { top: '60%', left: '42%', width: '16%', height: '15%' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand via-background to-sand">
      <div className="border-b border-copper/30 bg-card/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Compass" className="w-6 h-6 text-copper" />
              <div>
                <h1 className="text-xl font-bold text-copper font-serif">Форт "Новая Заря"</h1>
                <p className="text-xs text-muted-foreground">Поселение на фронтире</p>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={() => window.history.back()}>
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-4 mb-6">
          <Card className="border-copper/30 bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-4 pb-3">
              <div className="flex items-center gap-3">
                <Icon name="Users" className="w-8 h-8 text-copper" />
                <div>
                  <div className="text-2xl font-bold text-foreground">{mockSettlement.population}</div>
                  <div className="text-xs text-muted-foreground">Население</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-copper/30 bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-4 pb-3">
              <div className="flex items-center gap-3">
                <Icon name="Shield" className="w-8 h-8 text-copper" />
                <div>
                  <div className="text-2xl font-bold text-foreground">{mockSettlement.defense}%</div>
                  <div className="text-xs text-muted-foreground">Оборона</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-copper/30 bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-4 pb-3">
              <div className="flex items-center gap-3">
                <Icon name="FlaskConical" className="w-8 h-8 text-copper" />
                <div>
                  <div className="text-2xl font-bold text-foreground">{mockSettlement.research}%</div>
                  <div className="text-xs text-muted-foreground">Исследования</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-copper/30 bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-4 pb-3">
              <div className="flex items-center gap-3">
                <Icon name="AlertTriangle" className="w-8 h-8 text-orange-500" />
                <div>
                  <div className="text-lg font-bold text-foreground">{mockSettlement.threatLevel}</div>
                  <div className="text-xs text-muted-foreground">Угрозы</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="border-copper/30 bg-card/80 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="font-serif text-copper flex items-center gap-2">
                  <Icon name="Map" className="w-5 h-5" />
                  Панорама поселения
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Нажмите на здание, чтобы узнать подробности
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-secondary/20 to-secondary/5">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B87333' fill-opacity='0.2'%3E%3Cpath d='M50 10L60 30L80 35L65 50L70 70L50 60L30 70L35 50L20 35L40 30z'/%3E%3C/g%3E%3C/svg%3E")`
                    }}
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-muted-foreground p-8 bg-card/60 backdrop-blur-sm rounded-lg">
                      <Icon name="Map" className="w-16 h-16 mx-auto mb-4 text-copper opacity-50" />
                      <p className="text-sm">Изометрическая иллюстрация города</p>
                      <p className="text-xs mt-2">Кликабельные зоны зданий расположены ниже</p>
                    </div>
                  </div>

                  {(Object.keys(buildingPositions) as Array<Exclude<BuildingType, null>>).map((building) => {
                    const pos = buildingPositions[building];
                    const info = buildings[building];
                    const isHovered = hoveredBuilding === building;
                    const isSelected = selectedBuilding === building;

                    return (
                      <button
                        key={building}
                        onClick={() => setSelectedBuilding(building)}
                        onMouseEnter={() => setHoveredBuilding(building)}
                        onMouseLeave={() => setHoveredBuilding(null)}
                        className="absolute group cursor-pointer transition-all"
                        style={{
                          top: pos.top,
                          left: pos.left,
                          width: pos.width,
                          height: pos.height
                        }}
                      >
                        <div 
                          className={`w-full h-full rounded-lg transition-all ${
                            isSelected 
                              ? 'bg-copper/40 border-2 border-copper shadow-lg' 
                              : isHovered 
                                ? 'bg-secondary/40 border-2 border-secondary shadow-md' 
                                : 'bg-transparent border-2 border-transparent'
                          }`}
                        >
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className={`text-center transition-all ${isHovered || isSelected ? 'scale-110' : ''}`}>
                              <Icon 
                                name={info.icon} 
                                className={`w-8 h-8 mx-auto mb-1 ${
                                  isSelected ? 'text-copper' : isHovered ? 'text-secondary' : 'text-copper/60'
                                }`} 
                              />
                              <div className={`text-xs font-semibold px-2 py-1 rounded ${
                                isSelected 
                                  ? 'bg-copper text-white' 
                                  : isHovered 
                                    ? 'bg-secondary text-white' 
                                    : 'bg-background/80 text-foreground'
                              }`}>
                                {info.name}
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="p-4 bg-secondary/5 border-t border-copper/30">
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {(Object.keys(buildings) as Array<Exclude<BuildingType, null>>).map((key) => {
                      const building = buildings[key];
                      return (
                        <button
                          key={key}
                          onClick={() => setSelectedBuilding(key)}
                          className={`p-2 rounded-lg text-center transition-all ${
                            selectedBuilding === key
                              ? 'bg-copper text-white'
                              : 'bg-background hover:bg-copper/10'
                          }`}
                        >
                          <Icon name={building.icon} className="w-6 h-6 mx-auto mb-1" />
                          <div className="text-xs font-medium truncate">{building.name}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            {selectedBuilding ? (
              <Card className="border-copper/30 bg-card/80 backdrop-blur-sm animate-scale-in sticky top-24">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="font-serif text-copper flex items-center gap-2">
                        <Icon name={buildings[selectedBuilding].icon} className="w-5 h-5" />
                        {buildings[selectedBuilding].name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {buildings[selectedBuilding].description}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedBuilding(null)}
                      className="h-8 w-8 p-0"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px] pr-4">
                    {buildings[selectedBuilding].content}
                  </ScrollArea>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-copper/30 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="text-center text-muted-foreground py-12">
                    <Icon name="MousePointerClick" className="w-12 h-12 mx-auto mb-4 text-copper/50" />
                    <p className="text-sm">Выберите здание на карте</p>
                    <p className="text-xs mt-2">Нажмите на любое здание,<br/>чтобы увидеть информацию</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
