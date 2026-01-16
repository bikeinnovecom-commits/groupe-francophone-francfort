import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { BookOpen, Cross, Calendar, Church, Heart, Building2, Globe, Sparkles } from 'lucide-react';

export default function VisionPage() {
  return (
    <div className="gradient-background">
      {/* Bible Study Photo */}
      <section className="relative overflow-hidden pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/assets/bible-study-group.jpg" 
              alt="Groupe d'étude biblique" 
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
              <Church className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
              Notre Identité
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Les piliers fondamentaux de notre foi adventiste
            </p>
          </div>
        </div>
      </section>

      {/* Identity Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground text-center">
              Piliers Fondamentaux
            </h2>

            {/* 1. Sola Scriptura */}
            <Card className="glass-card mb-12">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      1. Une Église Fondée sur les Écritures (Sola Scriptura)
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Les Adventistes considèrent la Bible comme leur seule règle de foi et de conduite. Chaque 
                  croyance est issue d'une étude approfondie de l'Ancien et du Nouveau Testament, centrée sur 
                  la révélation de l'amour de Dieu.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Références : 2 Pierre 1:20-21 ; 2 Timothée 3:16-17 ; Psaume 119:105.
                </p>
              </CardContent>
            </Card>

            {/* 2. Salvation in Christ */}
            <Card className="glass-card mb-12">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 flex-shrink-0">
                    <Cross className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      2. La Centralité du Salut en Jésus-Christ
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Au cœur de l'identité adventiste se trouve la foi en Jésus, le Sauveur du monde. Le salut 
                  est un don gratuit reçu par la foi, rendu possible par la vie, la mort et la résurrection 
                  du Christ sur la croix.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Références : Jean 3:16 ; Éphésiens 2:8-10 ; Romains 5:1.
                </p>
              </CardContent>
            </Card>

            {/* 3. Sabbath */}
            <Card className="glass-card mb-12">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 flex-shrink-0">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      3. L'Observation du Sabbat (Repos du Septième Jour)
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Conformément au quatrième commandement de la loi de Dieu et à l'exemple de Jésus, les 
                  Adventistes célèbrent le Sabbat du septième jour (du vendredi soir au samedi soir). C'est 
                  un temps de repos, d'adoration et de communion pour honorer Dieu comme Créateur.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Références : Genèse 2:1-3 ; Exode 20:8-11 ; Luc 4:16.
                </p>
              </CardContent>
            </Card>

            {/* 4. Second Coming */}
            <Card className="glass-card mb-12">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 flex-shrink-0">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      4. L'Espérance du Retour Imminent du Christ
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Le nom "Adventiste" reflète l'attente du second avènement (le retour) de Jésus-Christ. 
                  Cette "bienheureuse espérance" n'est pas vécue avec crainte, mais comme l'aboutissement de 
                  l'histoire humaine et la fin de la souffrance.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Références : Tite 2:13 ; Jean 14:1-3 ; Actes 1:11 ; Apocalypse 1:7.
                </p>
              </CardContent>
            </Card>

            {/* 5. Health Reform */}
            <Card className="glass-card mb-12">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 flex-shrink-0">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      5. Un Message de Réforme et de Santé (La Mission Holistique)
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  L'Église croit que le corps est le "temple du Saint-Esprit". L'identité adventiste inclut 
                  donc la promotion d'un mode de vie sain (alimentation, exercice, équilibre), car le bien-être 
                  physique est indissociable de la clarté spirituelle.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Références : 1 Corinthiens 6:19-20 ; 1 Corinthiens 10:31 ; 3 Jean 1:2.
                </p>
              </CardContent>
            </Card>

            {/* 6. Sanctuary Message */}
            <Card className="glass-card mb-12">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 flex-shrink-0">
                    <Building2 className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      6. Le Sanctuaire et le Message des Trois Anges
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Inspirés par les prophéties, les Adventistes se voient comme un mouvement chargé d'annoncer 
                  un message de grâce et d'appel à l'adoration du vrai Dieu, soulignant le ministère actuel du 
                  Christ dans le sanctuaire céleste.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Références : Apocalypse 14:6-12 ; Hébreux 8:1-2 ; Daniel 8:14.
                </p>
              </CardContent>
            </Card>

            {/* 7. Global Service */}
            <Card className="glass-card mb-12">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 flex-shrink-0">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      7. Un Engagement Mondial au Service de l'Humanité
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  L'identité adventiste se traduit par l'action concrète. C'est l'un des plus grands réseaux 
                  mondiaux d'éducation et de santé, incarnant la mission du Christ par le service social et 
                  l'aide humanitaire.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Références : Matthieu 25:34-40 ; Luc 4:18-19 ; Galates 6:10.
                </p>
              </CardContent>
            </Card>

            {/* 8. Spirit of Prophecy */}
            <Card className="glass-card mb-12">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      8. L'Esprit de Prophétie
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Les Adventistes croient que la prophétie est l'un des dons du Saint-Esprit. Ce don a été 
                  manifesté de manière particulière dans le ministère d'Ellen G. White, co-fondatrice de l'Église. 
                  Ses écrits ne remplacent pas la Bible, mais ils sont une source de réconfort, d'instruction et 
                  de correction qui pointent toujours vers les Écritures et exaltent Jésus-Christ.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Références : Apocalypse 12:17 ; Apocalypse 19:10 ; Joël 2:28-29 ; 1 Corinthiens 12:7-11.
                </p>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="text-center">
              <Card className="glass-card">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Découvrez Notre Mission
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Explorez comment nous vivons ces piliers fondamentaux au quotidien à travers 
                    notre mission et nos projets communautaires.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link to="/mission">
                      <Button className="glass-button glass-button-primary">
                        Notre Mission
                      </Button>
                    </Link>
                    <Link to="/projets">
                      <Button className="glass-button">
                        Nos Projets
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
