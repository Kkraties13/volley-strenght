import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, User, Users, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Libero = () => {
  const [activeTab, setActiveTab] = useState("selecionados");

  const getTabName = (tab: string) => {
    switch (tab) {
      case "selecionados":
        return "Meus Treinos";
      case "treinos":
        return "Treinos";
      case "comunidade":
        return "Comunidade";
      case "perfil":
        return "Perfil";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between p-6">
          <h1 className="text-3xl font-bold text-gray-900">Líbero</h1>
          <Link 
            to="/" 
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Voltar
          </Link>
        </div>

        <Tabs 
          defaultValue="selecionados" 
          className="w-full"
          onValueChange={setActiveTab}
          value={activeTab}
        >
          <TabsContent value="selecionados">
            <Card>
              <CardHeader>
                <CardTitle>Treinos Selecionados</CardTitle>
                <CardDescription>
                  Seus treinos favoritos e programação atual
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Lista de treinos selecionados será implementada aqui</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="treinos">
            <Card>
              <CardHeader>
                <CardTitle>Treinos Disponíveis</CardTitle>
                <CardDescription>
                  Exercícios e treinos específicos para Líberos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Lista de treinos será implementada aqui</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comunidade">
            <Card>
              <CardHeader>
                <CardTitle>Comunidade</CardTitle>
                <CardDescription>
                  Interaja com outros jogadores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Área de discussão será implementada aqui</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="perfil">
            <Card>
              <CardHeader>
                <CardTitle>Seu Perfil</CardTitle>
                <CardDescription>
                  Gerencie suas informações e preferências
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Informações do perfil serão implementadas aqui</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsList className="fixed bottom-0 left-0 right-0 grid w-full grid-cols-4 border-t bg-background">
            <TabsTrigger 
              value="selecionados" 
              className="flex flex-col items-center justify-center py-2 gap-1 relative transition-all duration-200"
              style={{
                transform: activeTab === "selecionados" ? "translateY(-8px)" : "none",
                zIndex: activeTab === "selecionados" ? 10 : 1
              }}
            >
              <ListChecks className="w-6 h-6" />
              <span className="text-xs font-medium">
                {activeTab === "selecionados" && "Meus Treinos"}
              </span>
            </TabsTrigger>
            <TabsTrigger 
              value="treinos" 
              className="flex flex-col items-center justify-center py-2 gap-1 relative transition-all duration-200"
              style={{
                transform: activeTab === "treinos" ? "translateY(-8px)" : "none",
                zIndex: activeTab === "treinos" ? 10 : 1
              }}
            >
              <Dumbbell className="w-6 h-6" />
              <span className="text-xs font-medium">
                {activeTab === "treinos" && "Treinos"}
              </span>
            </TabsTrigger>
            <TabsTrigger 
              value="comunidade" 
              className="flex flex-col items-center justify-center py-2 gap-1 relative transition-all duration-200"
              style={{
                transform: activeTab === "comunidade" ? "translateY(-8px)" : "none",
                zIndex: activeTab === "comunidade" ? 10 : 1
              }}
            >
              <Users className="w-6 h-6" />
              <span className="text-xs font-medium">
                {activeTab === "comunidade" && "Comunidade"}
              </span>
            </TabsTrigger>
            <TabsTrigger 
              value="perfil" 
              className="flex flex-col items-center justify-center py-2 gap-1 relative transition-all duration-200"
              style={{
                transform: activeTab === "perfil" ? "translateY(-8px)" : "none",
                zIndex: activeTab === "perfil" ? 10 : 1
              }}
            >
              <User className="w-6 h-6" />
              <span className="text-xs font-medium">
                {activeTab === "perfil" && "Perfil"}
              </span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default Libero;
