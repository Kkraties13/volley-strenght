
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks, User, Users, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

const Libero = () => {
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

        <Tabs defaultValue="selecionados" className="w-full">
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
            <TabsTrigger value="selecionados" className="flex items-center justify-center py-3">
              <ListChecks className="w-6 h-6" />
            </TabsTrigger>
            <TabsTrigger value="treinos" className="flex items-center justify-center py-3">
              <Dumbbell className="w-6 h-6" />
            </TabsTrigger>
            <TabsTrigger value="comunidade" className="flex items-center justify-center py-3">
              <Users className="w-6 h-6" />
            </TabsTrigger>
            <TabsTrigger value="perfil" className="flex items-center justify-center py-3">
              <User className="w-6 h-6" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default Libero;
