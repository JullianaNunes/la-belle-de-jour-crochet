import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, Zap, Award, BookOpen, Crown } from "lucide-react";

const RecipesByLevel = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);

  const recipes = {
    iniciante: [
      {
        id: 1,
        title: "Porta-copos Simples",
        time: "30 min",
        difficulty: "Muito Fácil",
        description: "Aprenda os pontos básicos com um projeto útil",
        materials: ["Fio de algodão", "Agulha 4mm"],
        techniques: ["Correntinha", "Ponto baixo"],
        instructions: [
          "Faça 4 correntes e feche em anel",
          "1ª carr: 8 pontos baixos no anel",
          "2ª carr: 2 pontos baixos em cada ponto (16 pontos)",
          "3ª carr: *1 pb, 2 pb no próximo* repetir (24 pontos)",
          "4ª carr: *2 pb, 2 pb no próximo* repetir (32 pontos)",
          "Arremate e esconda as pontas"
        ],
        icon: "☕"
      },
      {
        id: 2,
        title: "Cachecol Retangular",
        time: "3-4 horas",
        difficulty: "Fácil",
        description: "Primeiro projeto de vestuário em crochê",
        materials: ["200g fio acrílico", "Agulha 5mm"],
        techniques: ["Correntinha", "Ponto alto"],
        instructions: [
          "Faça 30 correntes de base",
          "1ª carr: 1 pa na 4ª corr a partir da agulha",
          "Continue fazendo 1 pa em cada correntinha",
          "Vire o trabalho: 3 corr (conta como 1º pa)",
          "Repita até atingir 150cm de comprimento",
          "Faça franjas nas extremidades (opcional)"
        ],
        icon: "🧣"
      },
      {
        id: 3,
        title: "Flor Simples",
        time: "15 min",
        difficulty: "Fácil",
        description: "Aprenda a fazer pétalas e aplicações",
        materials: ["Fio fino", "Agulha 3mm"],
        techniques: ["Anel mágico", "Ponto alto duplo"],
        instructions: [
          "Faça um anel mágico",
          "6 pb no anel mágico",
          "Para cada pétala: 3 corr, 2 pad, 3 corr, pb no próximo ponto",
          "Repita para fazer 6 pétalas",
          "Puxe o anel mágico e arremate",
          "Use para decorar outras peças"
        ],
        icon: "🌸"
      }
    ],
    intermediario: [
      {
        id: 4,
        title: "Blusa de Verão",
        time: "15-20 horas",
        difficulty: "Intermediário",
        description: "Primeira peça de roupa com mangas",
        materials: ["300g algodão", "Agulhas 3.5mm e 4mm"],
        techniques: ["Aumentos", "Diminuições", "Costura"],
        instructions: [
          "Comece pelas costas: faça a base conforme medidas",
          "Trabalhe em pontos fantasias ou pontos vazados",
          "Faça diminuições para a cava",
          "Repita o processo para a frente",
          "Faça as mangas separadamente",
          "Costure as partes e faça acabamentos"
        ],
        icon: "👚"
      },
      {
        id: 5,
        title: "Bolsa com Forro",
        time: "8-10 horas",
        difficulty: "Intermediário",
        description: "Bolsa estruturada com técnicas de acabamento",
        materials: ["200g fio grosso", "Forro", "Agulha 5mm"],
        techniques: ["Pontos apertados", "Aplicação de forro", "Alças"],
        instructions: [
          "Faça o fundo da bolsa em formato oval",
          "Trabalhe as laterais em ponto baixo apertado",
          "Faça as alças com ponto baixíssimo",
          "Corte e costure o forro interno",
          "Una o forro à bolsa",
          "Adicione fechamento (botão ou zíper)"
        ],
        icon: "👜"
      },
      {
        id: 6,
        title: "Touca com Tranças",
        time: "4-5 horas",
        difficulty: "Intermediário",
        description: "Técnica de tranças em crochê",
        materials: ["100g lã", "Agulha 4.5mm"],
        techniques: ["Crochê em relevo", "Tranças", "Diminuições"],
        instructions: [
          "Comece com anel mágico e faça aumentos regulares",
          "Quando atingir o tamanho da cabeça, trabalhe reto",
          "Introduza pontos em relevo para formar tranças",
          "Alterne pontos para frente e para trás",
          "Termine com uma borda elástica",
          "Adicione pompom (opcional)"
        ],
        icon: "🧶"
      }
    ],
    avancado: [
      {
        id: 7,
        title: "Vestido com Rendas",
        time: "40-50 horas",
        difficulty: "Avançado",
        description: "Vestido elaborado com detalhes em renda",
        materials: ["400g linha fina", "Agulhas 2.5mm"],
        techniques: ["Rendas", "Ajustes de caimento", "Modelagem"],
        instructions: [
          "Faça o molde base conforme medidas",
          "Trabalhe o corpo com pontos vazados complexos",
          "Construa as rendas em módulos separados",
          "Una os módulos cuidadosamente",
          "Faça ajustes de caimento",
          "Finalize com acabamentos invisíveis"
        ],
        icon: "👗"
      },
      {
        id: 8,
        title: "Manta com Motivos",
        time: "60+ horas",
        difficulty: "Avançado",
        description: "Manta complexa com múltiplos padrões",
        materials: ["800g fios variados", "Agulhas variadas"],
        techniques: ["Motivos complexos", "União invisível", "Bordas elaboradas"],
        instructions: [
          "Planeje o design com diferentes motivos",
          "Faça cada quadrado separadamente",
          "Mantenha tensão uniforme em todos os motivos",
          "Una os quadrados com costura invisível",
          "Trabalhe bordas complexas ao redor",
          "Bloqueie a peça final para formato perfeito"
        ],
        icon: "🌟"
      },
      {
        id: 9,
        title: "Xale Irlandês",
        time: "25-30 horas",
        difficulty: "Muito Avançado",
        description: "Técnicas tradicionais irlandesas",
        materials: ["250g mohair", "Agulhas 3mm"],
        techniques: ["Renda irlandesa", "Motivos 3D", "Bloqueio"],
        instructions: [
          "Domine os pontos tradicionais irlandeses",
          "Crie motivos florais em 3D",
          "Trabalhe a base em rede de rendas",
          "Aplique os motivos estrategicamente",
          "Una tudo com pontos invisíveis",
          "Bloqueie para revelar o padrão completo"
        ],
        icon: "🍀"
      }
    ]
  };

  const levelConfig = {
    iniciante: {
      color: "bg-coral-pink/20",
      icon: BookOpen,
      title: "Iniciante",
      description: "Projetos perfeitos para começar sua jornada no crochê"
    },
    intermediario: {
      color: "bg-rose-blush/30", 
      icon: Zap,
      title: "Intermediário",
      description: "Desenvolva suas habilidades com projetos mais desafiadores"
    },
    avancado: {
      color: "bg-deep-rose/20",
      icon: Crown,
      title: "Avançado",
      description: "Projetos complexos para crocheteiras experientes"
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-playfair font-bold text-burgundy mb-2 flex items-center justify-center gap-2">
          <Award className="h-8 w-8" />
          Receitas por Nível
        </h2>
        <p className="text-muted-foreground">
          Projetos organizados do básico ao avançado para sua evolução no crochê
        </p>
      </div>

      <Tabs defaultValue="iniciante" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          {Object.entries(levelConfig).map(([level, config]) => (
            <TabsTrigger key={level} value={level} className="flex items-center gap-2">
              <config.icon className="h-4 w-4" />
              {config.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(recipes).map(([level, levelRecipes]) => (
          <TabsContent key={level} value={level}>
            <div className="mb-6 p-4 rounded-lg border border-deep-rose/20" 
                 style={{ background: levelConfig[level as keyof typeof levelConfig].color }}>
              <h3 className="font-semibold text-burgundy mb-1">
                {levelConfig[level as keyof typeof levelConfig].title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {levelConfig[level as keyof typeof levelConfig].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {levelRecipes.map((recipe) => (
                <Card key={recipe.id} className="cursor-pointer hover:shadow-card transition-all duration-300 bg-white/80 border-deep-rose/20"
                      onClick={() => setSelectedRecipe(recipe)}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl">{recipe.icon}</div>
                      <Badge variant="secondary" className="bg-rose-blush/50">
                        {recipe.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-burgundy">{recipe.title}</CardTitle>
                    <CardDescription>{recipe.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {recipe.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {recipe.techniques.length} técnicas
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-burgundy">Técnicas necessárias:</p>
                      <div className="flex flex-wrap gap-1">
                        {recipe.techniques.map((technique, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {technique}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {selectedRecipe && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedRecipe.icon}</span>
                  <div>
                    <CardTitle className="text-burgundy">{selectedRecipe.title}</CardTitle>
                    <CardDescription>{selectedRecipe.description}</CardDescription>
                  </div>
                </div>
                <Button variant="outline" onClick={() => setSelectedRecipe(null)}>
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4 text-sm">
                <Badge variant="secondary">{selectedRecipe.difficulty}</Badge>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {selectedRecipe.time}
                </span>
              </div>

              <div>
                <h4 className="font-semibold text-burgundy mb-2">Materiais necessários:</h4>
                <ul className="space-y-1">
                  {selectedRecipe.materials.map((material: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-1 h-1 bg-primary rounded-full"></span>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-burgundy mb-2">Técnicas utilizadas:</h4>
                <div className="flex flex-wrap gap-1">
                  {selectedRecipe.techniques.map((technique: string, i: number) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {technique}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-burgundy mb-3">Passo a passo:</h4>
                <div className="space-y-3">
                  {selectedRecipe.instructions.map((instruction: string, i: number) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-medium">
                        {i + 1}
                      </div>
                      <p className="text-sm text-muted-foreground pt-1">{instruction}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default RecipesByLevel;