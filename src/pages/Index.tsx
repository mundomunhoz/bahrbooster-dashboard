import { Card } from "@/components/ui/card";
import { AppLayout } from "@/components/layout/AppLayout";
import { BarChart3, Users, Calendar, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Campanhas Ativas",
    value: "12",
    icon: BarChart3,
    trend: "+2.5%",
  },
  {
    title: "Alcance Total",
    value: "24.5k",
    icon: Users,
    trend: "+18.2%",
  },
  {
    title: "Posts Agendados",
    value: "38",
    icon: Calendar,
    trend: "+4.9%",
  },
  {
    title: "Engajamento",
    value: "12.8%",
    icon: TrendingUp,
    trend: "+1.2%",
  },
];

const Index = () => {
  return (
    <AppLayout>
      <div className="space-y-8 fade-in">
        <div>
          <h1 className="text-3xl font-bold font-heading">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Bem-vindo ao seu painel de marketing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className="p-6 card-hover-effect">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                  <p className="text-sm text-primary mt-1">{stat.trend}</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Campanhas Recentes</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <h4 className="font-medium">Campanha {i}</h4>
                    <p className="text-sm text-muted-foreground">Última atualização: há 2 horas</p>
                  </div>
                  <span className="text-primary font-medium">Ativa</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">Próximas Postagens</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <h4 className="font-medium">Post {i}</h4>
                    <p className="text-sm text-muted-foreground">Agendado para: Hoje, 18:00</p>
                  </div>
                  <span className="text-primary font-medium">Pendente</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;