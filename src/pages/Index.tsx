
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PersonStanding, Shield, ArrowUpCircle, Zap, Target, Move } from "lucide-react";
import { Link } from "react-router-dom";

const positions = [
  {
    title: "Líbero",
    description: "Especialista em defesa e recepção",
    icon: Shield,
    color: "text-red-500",
    route: "/libero"
  },
  {
    title: "Levantador",
    description: "Estrategista e organizador do jogo",
    icon: PersonStanding,
    color: "text-blue-500",
    route: "/levantador"
  },
  {
    title: "Ponteiro Passador",
    description: "Ataque e recepção equilibrados",
    icon: Move,
    color: "text-green-500",
    route: "/ponteiro-passador"
  },
  {
    title: "Ponteiro de Definição",
    description: "Especialista em finalização",
    icon: Target,
    color: "text-purple-500",
    route: "/ponteiro-definicao"
  },
  {
    title: "Central",
    description: "Bloqueio e ataques rápidos",
    icon: ArrowUpCircle,
    color: "text-orange-500",
    route: "/central"
  },
  {
    title: "Oposto/Saída",
    description: "Poder de ataque e versatilidade",
    icon: Zap,
    color: "text-yellow-500",
    route: "/oposto"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Aprimoramento Físico para Voleibol
          </h1>
          <p className="text-xl text-gray-600">
            Selecione sua posição para ver exercícios específicos e dicas de treino
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((position) => (
            <Link 
              to={position.route} 
              key={position.title}
              className="transform transition-transform hover:scale-105"
            >
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <position.icon className={`w-8 h-8 ${position.color}`} />
                    <div>
                      <CardTitle className="text-xl">{position.title}</CardTitle>
                      <CardDescription>{position.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Clique para ver exercícios específicos e planos de treino personalizados para {position.title.toLowerCase()}.
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
