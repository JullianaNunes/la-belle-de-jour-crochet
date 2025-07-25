import { useState } from "react";
import Navigation from "@/components/Navigation";
import YarnCalculator from "@/components/YarnCalculator";
import YarnComparison from "@/components/YarnComparison";
import RecipesByLevel from "@/components/RecipesByLevel";

const Index = () => {
  const [activeTab, setActiveTab] = useState("calculator");

  const renderContent = () => {
    switch (activeTab) {
      case "calculator":
        return <YarnCalculator />;
      case "comparison":
        return <YarnComparison />;
      case "recipes":
        return <RecipesByLevel />;
      default:
        return <YarnCalculator />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-rose-blush/20 to-coral-pink/15">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8">
        {activeTab === "calculator" && (
          <div className="text-center mb-8">
            <h2 className="text-4xl font-playfair font-bold text-burgundy mb-4">
              Bem-vinda à La Belle de Jour! 🌹
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sua companheira digital para projetos de crochê. Calcule fios, compare materiais e encontre receitas perfeitas para seu nível.
            </p>
          </div>
        )}
        
        <div className="flex justify-center">
          {renderContent()}
        </div>
      </main>

      <footer className="bg-white/60 border-t border-deep-rose/20 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <div className="flex flex-col items-center gap-2 mb-4">
            <h3 className="text-2xl font-playfair font-bold text-burgundy">La Belle de Jour</h3>
            <span className="text-sm font-inter uppercase tracking-wider text-burgundy/70">Crochê</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Transformando ideias em lindas criações, um ponto de cada vez.
          </p>
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <span>💡 Dicas e cálculos</span>
            <span>📏 Medidas precisas</span>
            <span>🌟 Receitas testadas</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;