import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Facebook } from "lucide-react";

const templates = [
  {
    id: 1,
    type: "instagram",
    title: "Promoção Happy Hour",
    description: "Template para divulgação de happy hour",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&q=80",
    icon: Instagram,
  },
  {
    id: 2,
    type: "instagram",
    title: "Prato do Dia",
    description: "Template para destacar pratos especiais",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
    icon: Instagram,
  },
  {
    id: 3,
    type: "facebook",
    title: "Evento Especial",
    description: "Template para eventos e música ao vivo",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&q=80",
    icon: Facebook,
  },
  {
    id: 4,
    type: "facebook",
    title: "Menu Semanal",
    description: "Template para divulgação do cardápio da semana",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&q=80",
    icon: Facebook,
  },
];

const TemplatesPage = () => {
  return (
    <AppLayout>
      <div className="space-y-8 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold font-heading">Templates</h1>
          <p className="text-muted-foreground mt-2">
            Modelos prontos para suas redes sociais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id} className="group hover:shadow-lg transition-all">
              <CardHeader className="relative">
                <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                  <template.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="aspect-[4/5] overflow-hidden rounded-t-lg">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg mb-2">{template.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{template.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default TemplatesPage;