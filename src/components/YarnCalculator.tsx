import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

const YarnCalculator = () => {
  const [measurements, setMeasurements] = useState({
    bust: "",
    waist: "",
    hips: "",
    height: "",
  });
  const [garmentType, setGarmentType] = useState("");
  const [yarnWeight, setYarnWeight] = useState("");
  const [result, setResult] = useState<{
    meters: number;
    grams: number;
    skeins: number;
  } | null>(null);

  const yarnWeights = {
    "lace": { metersPerGram: 8, gramsPerSkein: 50 },
    "fingering": { metersPerGram: 7, gramsPerSkein: 50 },
    "dk": { metersPerGram: 5, gramsPerSkein: 50 },
    "worsted": { metersPerGram: 4, gramsPerSkein: 100 },
    "chunky": { metersPerGram: 2.5, gramsPerSkein: 100 },
  };

  const garmentFactors = {
    "blusa": 1.2,
    "casaco": 2.5,
    "vestido": 2.8,
    "saia": 1.5,
    "xale": 1.8,
    "cachecol": 0.8,
  };

  const calculateYarn = () => {
    if (!measurements.bust || !garmentType || !yarnWeight) return;

    const bust = parseFloat(measurements.bust);
    const height = parseFloat(measurements.height) || 60; // default height
    
    // Base calculation: circumference * height * garment factor
    const baseArea = (bust * 2) * height;
    const factor = garmentFactors[garmentType as keyof typeof garmentFactors];
    const estimatedArea = baseArea * factor;
    
    // Convert to yarn requirements
    const yarn = yarnWeights[yarnWeight as keyof typeof yarnWeights];
    const estimatedGrams = Math.ceil(estimatedArea / 100); // rough conversion
    const meters = estimatedGrams * yarn.metersPerGram;
    const skeins = Math.ceil(estimatedGrams / yarn.gramsPerSkein);

    setResult({
      meters: Math.round(meters),
      grams: estimatedGrams,
      skeins,
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-rose-blush/30 to-soft-pink border-deep-rose/20 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-burgundy">
          <Calculator className="h-6 w-6" />
          Calculadora de Fio
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Calcule a quantidade de fio necessária para sua peça
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="bust" className="text-burgundy font-medium">Busto/Peito (cm)</Label>
            <Input
              id="bust"
              type="number"
              placeholder="Ex: 90"
              value={measurements.bust}
              onChange={(e) => setMeasurements(prev => ({ ...prev, bust: e.target.value }))}
              className="bg-white/70 border-deep-rose/30"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="height" className="text-burgundy font-medium">Altura da peça (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="Ex: 60"
              value={measurements.height}
              onChange={(e) => setMeasurements(prev => ({ ...prev, height: e.target.value }))}
              className="bg-white/70 border-deep-rose/30"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-burgundy font-medium">Tipo de Peça</Label>
          <Select value={garmentType} onValueChange={setGarmentType}>
            <SelectTrigger className="bg-white/70 border-deep-rose/30">
              <SelectValue placeholder="Selecione o tipo de peça" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blusa">Blusa/Regata</SelectItem>
              <SelectItem value="casaco">Casaco/Cardigã</SelectItem>
              <SelectItem value="vestido">Vestido</SelectItem>
              <SelectItem value="saia">Saia</SelectItem>
              <SelectItem value="xale">Xale</SelectItem>
              <SelectItem value="cachecol">Cachecol</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-burgundy font-medium">Espessura do Fio</Label>
          <Select value={yarnWeight} onValueChange={setYarnWeight}>
            <SelectTrigger className="bg-white/70 border-deep-rose/30">
              <SelectValue placeholder="Selecione a espessura" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lace">Lace (muito fino)</SelectItem>
              <SelectItem value="fingering">Fingering (fino)</SelectItem>
              <SelectItem value="dk">DK (médio)</SelectItem>
              <SelectItem value="worsted">Worsted (grosso)</SelectItem>
              <SelectItem value="chunky">Chunky (muito grosso)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={calculateYarn} 
          className="w-full bg-gradient-to-r from-primary to-deep-rose hover:from-primary/90 hover:to-deep-rose/90 text-white shadow-soft"
          disabled={!measurements.bust || !garmentType || !yarnWeight}
        >
          Calcular Quantidade de Fio
        </Button>

        {result && (
          <div className="mt-6 p-4 bg-white/60 rounded-lg border border-deep-rose/20">
            <h3 className="font-semibold text-burgundy mb-3">Resultado do Cálculo:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-rose-blush/40 rounded-lg">
                <div className="text-2xl font-bold text-primary">{result.meters}m</div>
                <div className="text-sm text-muted-foreground">metros de fio</div>
              </div>
              <div className="p-3 bg-coral-pink/40 rounded-lg">
                <div className="text-2xl font-bold text-primary">{result.grams}g</div>
                <div className="text-sm text-muted-foreground">gramas de fio</div>
              </div>
              <div className="p-3 bg-deep-rose/30 rounded-lg">
                <div className="text-2xl font-bold text-primary">{result.skeins}</div>
                <div className="text-sm text-muted-foreground">novelos aprox.</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              * Valores aproximados. Considere comprar 10-20% a mais para garantir.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default YarnCalculator;