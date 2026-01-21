import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Target, BookOpen, Heart, HandHeart, Users } from 'lucide-react';

export default function MissionPage() {
  return (
    <div className="gradient-background">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
              Notre Mission
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Partager l'Évangile de manière simple, fidèle et accessible à tous
            </p>
          </div>
        </div>
      </section>

      {/* Community Photo */}
      <section className="relative overflow-hidden pb-4">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/assets/community-prayer.jpg" 
              alt="Groupe en cercle - Prière communautaire" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Mission Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Mission Statement */}
            <Card className="glass-card mb-16">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Notre mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Notre mission est claire : partager l'Évangile de manière simple, fidèle et accessible à tous. 
                  Nous répondons au mandat du Christ qui nous appelle à faire des disciples, en mettant au cœur 
                  de notre engagement les messages d'espérance contenus dans la Bible. Cette mission se vit 
                  concrètement à travers l'enseignement biblique, l'accompagnement spirituel et le soutien fraternel.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous désirons aider chaque personne à développer une relation personnelle, vivante et solide 
                  avec Dieu, fondée sur la prière, l'étude de la Parole et la foi en Jésus-Christ, sans 
                  intermédiaires compliqués.
                </p>
              </CardContent>
            </Card>

            {/* Bible Study Section */}
            <Card className="glass-card mb-16">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Étude biblique et prophétique
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous accordons une place centrale à l'étude approfondie de la Bible, en particulier aux 
                  prophéties bibliques des livres de Daniel et de l'Apocalypse. Ces études nous permettent 
                  de mieux comprendre le plan de Dieu pour l'humanité, de fortifier notre foi et de vivre 
                  avec espérance dans le monde d'aujourd'hui.
                </p>
              </CardContent>
            </Card>

            {/* Social and Educational Mission */}
            <Card className="glass-card mb-16">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Une mission spirituelle, sociale et éducative
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Au-delà de la dimension spirituelle, notre mission est également sociale et éducative. 
                  Nous encourageons un mode de vie sain et équilibré, en harmonie avec les sept principes 
                  de santé de l'Église adventiste, qui promeuvent le bien-être du corps, de l'esprit et de l'âme.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous nous engageons aussi à être présents pour les autres, notamment par l'accueil des 
                  nouveaux arrivants à Francfort, l'écoute, l'accompagnement et des actions concrètes d'entraide.
                </p>
              </CardContent>
            </Card>

            {/* Humanitarian Engagement */}
            <Card className="glass-card mb-16">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20">
                    <HandHeart className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Engagement humanitaire
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Par l'intermédiaire d'ADRA, nous menons des actions humanitaires afin de subvenir aux 
                  besoins des personnes en situation de précarité. Cet engagement reflète notre désir de 
                  mettre en pratique l'amour de Dieu, non seulement par nos paroles, mais surtout par nos actes.
                </p>
              </CardContent>
            </Card>

            {/* Fraternal Community */}
            <Card className="glass-card mb-16">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Une communauté fraternelle
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Nous croyons que la foi se vit pleinement en communauté. Ensemble, nous étudions, prions, 
                  grandissons et nous soutenons mutuellement dans un esprit de fraternité, de respect et de partage.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  En résumé, notre mission est de faire connaître l'amour de Dieu au quotidien, par notre 
                  témoignage, notre style de vie et notre engagement au service des autres.
                </p>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <Card className="glass-card">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Rejoignez Notre Communauté
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Découvrez nos projets et voyez comment nous mettons notre mission en action 
                    au service de la communauté francophone de Francfort.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link to="/projets">
                      <Button className="glass-button glass-button-primary">
                        Voir Nos Projets
                      </Button>
                    </Link>
                    <Link to="/vision">
                      <Button className="glass-button">
                        Notre identité
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
