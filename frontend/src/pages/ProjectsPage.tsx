import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Lightbulb, Users, Globe, BookOpen, Music, Heart, TreePine, CheckCircle } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="gradient-background">
      {/* Projects Photo */}
      <section className="relative overflow-hidden pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/assets/projects-team.jpg" 
              alt="Équipe travaillant ensemble sur les projets" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-8">
              <Lightbulb className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
              Nos Projets
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Des initiatives concrètes pour faire grandir notre communauté
            </p>
          </div>
        </div>
      </section>

      {/* Projects Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Introduction */}
            <Card className="glass-card mb-16">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Nos Projets
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  On a plusieurs projets concrets pour faire grandir notre groupe. Le premier est de renforcer 
                  notre présence numérique afin de rester connectés entre nous et d'aider les francophones 
                  isolés en Allemagne à trouver une communauté.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  On souhaite développer des outils pour échanger durant la semaine, comme des petits groupes 
                  de discussion en ligne ou des rencontres thématiques sur des sujets de société vus sous 
                  l'angle biblique.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Sur le plan local à Francfort, on prévoit d'organiser des événements ouverts à tous : 
                  ateliers de bien-être, séminaires sur la gestion du temps ou des finances, et des moments 
                  conviviaux comme des randonnées ou des repas communautaires.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  L'objectif est de créer des ponts avec la ville et de ne pas rester en vase clos. On 
                  travaille aussi sur l'aménagement d'un espace de réunion qui facilite la convivialité et 
                  le travail collaboratif pour nos projets associatifs et spirituels.
                </p>
              </CardContent>
            </Card>

            {/* Specific Projects List */}
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
              Nos Initiatives Concrètes
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Digital Presence */}
              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 flex-shrink-0">
                      <Globe className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Présence Numérique
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Développement d'outils en ligne pour maintenir le lien communautaire durant la semaine 
                    et aider les francophones isolés en Allemagne.
                  </p>
                </CardContent>
              </Card>

              {/* Small Groups */}
              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 flex-shrink-0">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Petits Groupes Thématiques
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Rencontres en ligne et en personne sur des sujets de société vus sous l'angle biblique 
                    pour favoriser les échanges et la réflexion.
                  </p>
                </CardContent>
              </Card>

              {/* Bible Distribution */}
              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Distribution de la Bible
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Distribution de la Bible, prospectus et brochures sur une place publique de Francfort 
                    pour partager notre foi avec la communauté.
                  </p>
                </CardContent>
              </Card>

              {/* Church Interventions */}
              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 flex-shrink-0">
                      <Music className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Interventions dans les Églises
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Intervention dans les églises germanophones pour faire connaître notre culture et notre 
                    engagement par le biais des chants.
                  </p>
                </CardContent>
              </Card>

              {/* French Choir */}
              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 flex-shrink-0">
                      <Music className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Groupe de Chant Francophone
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Création d'un groupe de chant francophone pour enrichir nos cultes et témoigner de notre 
                    foi par la musique.
                  </p>
                </CardContent>
              </Card>

              {/* Hospital Visits */}
              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 flex-shrink-0">
                      <Heart className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Visites Hospitalières
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Intervention dans les hôpitaux et maisons de retraite pour encourager les personnes 
                    malades et seules.
                  </p>
                </CardContent>
              </Card>

              {/* Nature Activities */}
              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 flex-shrink-0">
                      <TreePine className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Randonnées et Nature
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Randonnées et temps passé avec Dieu au travers la nature pour renforcer notre communion 
                    et notre bien-être spirituel.
                  </p>
                </CardContent>
              </Card>

              {/* Community Events */}
              <Card className="glass-card hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      Événements Communautaires
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Ateliers de bien-être, séminaires sur la gestion du temps ou des finances, et repas 
                    communautaires pour créer du lien.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Card className="glass-card">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Rejoignez-Nous Dans Ces Projets
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Que vous soyez intéressé par l'évangélisation, le chant, l'aide aux malades ou 
                    simplement la fraternité, il y a une place pour vous dans nos projets.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link to="/">
                      <Button className="glass-button glass-button-primary">
                        En Savoir Plus
                      </Button>
                    </Link>
                    <Link to="/mission">
                      <Button className="glass-button">
                        Notre Mission
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
