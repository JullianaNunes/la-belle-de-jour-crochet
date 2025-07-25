import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Star, DollarSign, Palette } from "lucide-react";

const YarnComparison = () => {
  const yarnTypes = [
    {
      name: "Algodão",
      characteristics: ["Respirável", "Durável", "Fácil de lavar"],
      bestFor: ["Roupas de verão", "Peças infantis", "Toalhas"],
      care: "Máquina de lavar",
      price: "$$",
      warmth: 2,
      durability: 5,
      softness: 3,
      colors: ["Branco", "Azul", "Rosa", "Verde"],
      icon: "🌱"
    },
    {
      name: "Lã",
      characteristics: ["Quente", "Isolante", "Respirável"],
      bestFor: ["Casacos", "Gorros", "Cachecóis"],
      care: "Lavagem delicada",
      price: "$$$",
      warmth: 5,
      durability: 4,
      softness: 4,
      colors: ["Cru", "Cinza", "Marrom", "Vermelho"],
      icon: "🐑"
    },
    {
      name: "Acrílico",
      characteristics: ["Econômico", "Fácil cuidado", "Hipoalergênico"],
      bestFor: ["Iniciantes", "Decoração", "Brinquedos"],
      care: "Máquina de lavar",
      price: "$",
      warmth: 3,
      durability: 4,
      softness: 3,
      colors: ["Todas as cores", "Multicolor", "Neon"],
      icon: "🧶"
    },
    {
      name: "Mohair",
      characteristics: ["Luxuoso", "Brilhoso", "Leve"],
      bestFor: ["Xales", "Peças especiais", "Acabamentos"],
      care: "Lavagem à mão",
      price: "$$$$",
      warmth: 4,
      durability: 3,
      softness: 5,
      colors: ["Tons naturais", "Pastéis"],
      icon: "✨"
    },
    {
      name: "Bambu",
      characteristics: ["Antibacteriano", "Macio", "Sustentável"],
      bestFor: ["Roupas íntimas", "Bebês", "Peças delicadas"],
      care: "Lavagem delicada",
      price: "$$$",
      warmth: 2,
      durability: 3,
      softness: 5,
      colors: ["Tons naturais", "Pastéis suaves"],
      icon: "🎋"
    }
  ];

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-3 w-3 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} 
      />
    ));
  };

  const getPriceDisplay = (price: string) => {
    return Array.from({ length: 4 }, (_, i) => (
      <DollarSign 
        key={i} 
        className={`h-3 w-3 ${i < price.length ? 'text-green-600' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-playfair font-bold text-burgundy mb-2 flex items-center justify-center gap-2">
          <Scale className="h-8 w-8" />
          Comparativo de Fios
        </h2>
        <p className="text-muted-foreground">
          Compare diferentes tipos de fio para escolher o melhor para seu projeto
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {yarnTypes.map((yarn, index) => (
          <Card key={index} className="h-full bg-white/80 border-deep-rose/20 hover:shadow-card transition-all duration-300">
            <CardHeader className="text-center">
              <div className="text-4xl mb-2">{yarn.icon}</div>
              <CardTitle className="text-burgundy">{yarn.name}</CardTitle>
              <CardDescription className="flex justify-center">
                {getPriceDisplay(yarn.price)}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-burgundy mb-2">Características:</h4>
                <div className="flex flex-wrap gap-1">
                  {yarn.characteristics.map((char, i) => (
                    <Badge key={i} variant="secondary" className="text-xs bg-rose-blush/50">
                      {char}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-burgundy mb-2">Melhor para:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {yarn.bestFor.map((use, i) => (
                    <li key={i} className="flex items-center gap-1">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      {use}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-burgundy">Aquecimento:</span>
                  <div className="flex">{getRatingStars(yarn.warmth)}</div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-burgundy">Durabilidade:</span>
                  <div className="flex">{getRatingStars(yarn.durability)}</div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-burgundy">Maciez:</span>
                  <div className="flex">{getRatingStars(yarn.softness)}</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-burgundy mb-2 flex items-center gap-1">
                  <Palette className="h-4 w-4" />
                  Cores disponíveis:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {yarn.colors.map((color, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {color}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-deep-rose/20">
                <p className="text-xs text-muted-foreground">
                  <strong>Cuidados:</strong> {yarn.care}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-rose-blush/30 to-coral-pink/30 rounded-lg border border-deep-rose/20">
        <h3 className="font-semibold text-burgundy mb-3">💡 Dicas para escolher o fio ideal:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <p><strong>Para iniciantes:</strong> Comece com acrílico ou algodão - são mais fáceis de trabalhar</p>
            <p><strong>Para roupas:</strong> Considere algodão ou bambu para conforto e respirabilidade</p>
          </div>
          <div>
            <p><strong>Para inverno:</strong> Lã é a melhor escolha para aquecimento</p>
            <p><strong>Para peças especiais:</strong> Mohair adiciona um toque luxuoso</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YarnComparison;