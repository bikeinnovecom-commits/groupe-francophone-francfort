 import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users, Calendar, BookOpen } from 'lucide-react';

export default function GuidePage() {
  return (
    <div className="gradient-background">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
              Notre Forum
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Un espace d'échange et de partage pour notre communauté francophone
            </p>
          </div>
        </div>
      </section>

      {/* Forum Image */}
      <section className="pb-4">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/assets/forum-discussion.jpg" 
              alt="Discussion communautaire - Forum" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Forum Description */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* Main Description */}
            <Card className="glass-card">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Rejoignez notre communauté en ligne
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Notre forum est un espace de dialogue et de partage où les membres de notre groupe 
                  peuvent échanger sur des sujets spirituels, organiser des événements, poser des questions 
                  et renforcer les liens fraternels entre francophones adventistes de Francfort.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Que vous soyez nouveau dans la région ou membre de longue date, le forum est ouvert 
                  à tous ceux qui souhaitent approfondir leur foi et participer à la vie de notre communauté.
                </p>
              </CardContent>
            </Card>

            {/* Forum Features */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Discussions spirituelles</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Partagez vos réflexions bibliques, posez vos questions et participez à des échanges 
                    enrichissants sur la foi adventiste et la spiritualité chrétienne.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                    <Calendar className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Événements et activités</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Restez informé des prochains cultes, études bibliques, sorties en groupe et 
                    autres activités organisées par notre communauté francophone.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                    <BookOpen className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Ressources partagées</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Accédez à des articles, vidéos, livres et autres ressources partagées par 
                    les membres pour nourrir votre vie spirituelle quotidienne.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                    <MessageSquare className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Entraide et soutien</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Demandez des conseils pratiques pour la vie à Francfort, partagez des besoins 
                    de prière et bénéficiez du soutien fraternel de la communauté.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <Card className="glass-card bg-accent/10 border-accent/30">
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Prêt à rejoindre la conversation ?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                  Rejoignez notre groupe WhatsApp pour échanger avec la communauté, 
                  rester informé des événements et partager votre foi au quotidien.
                </p>
                <a href="https://chat.whatsapp.com/Js0bgVDFQ9oIQPzFgfJEpO" target="_blank" rel="noopener noreferrer">
                  <Button className="glass-button glass-button-primary text-lg px-8 py-6">
                    Rejoindre le groupe WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}