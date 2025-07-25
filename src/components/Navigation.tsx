import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calculator, Scale, BookOpen, Menu, X } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "calculator", label: "Calculadora", icon: Calculator },
    { id: "comparison", label: "Comparativo", icon: Scale },
    { id: "recipes", label: "Receitas", icon: BookOpen },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-deep-rose/20 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-playfair font-medium text-burgundy">La Belle de Jour</h1>
            <span className="text-xs font-inter uppercase tracking-wider text-burgundy/70">Crochê</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                onClick={() => onTabChange(item.id)}
                className={`flex items-center gap-2 ${
                  activeTab === item.id 
                    ? "bg-primary text-white" 
                    : "hover:bg-rose-blush/30 text-burgundy"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-deep-rose/20 py-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  onClick={() => {
                    onTabChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full justify-start gap-2 ${
                    activeTab === item.id 
                      ? "bg-primary text-white" 
                      : "hover:bg-rose-blush/30 text-burgundy"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;