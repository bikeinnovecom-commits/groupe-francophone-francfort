import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Users, Target, Lightbulb } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function AboutPage() {
  return (
    <div className="gradient-background">
      {/* Community Image Carousel */}
      <section className="pt-20 pb-4">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Carousel 
                opts={{ loop: true }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                  })
                ]}
                className="w-full"
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden shadow-xl bg-card">
                      <img 
                        src="/assets/carousel-1.jpg" 
                        alt="Étudiant avec la Bible" 
                        className="w-full h-auto"
                      />
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-bold mb-3 text-foreground">
                          Des hommes et des femmes engagés pour la mission
                        </h3>
                        <p className="text-muted-foreground italic leading-relaxed">
                          Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint Esprit, et enseignez-leur à observer tout ce que je vous ai prescrit. Et voici, je suis avec vous tous les jours, jusqu'à la fin du monde. - Matthieu 28:19-20
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden shadow-xl bg-card">
                      <img 
                        src="/assets/carousel-2.jpg" 
                        alt="Bible et stylo" 
                        className="w-full h-auto"
                      />
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-bold mb-3 text-foreground">
                          La Parole de Dieu, fondement de notre enseignement
                        </h3>
                        <p className="text-muted-foreground italic leading-relaxed">
                          Ta parole est une lampe à mes pieds, Et une lumière sur mon sentier. - Psaumes 119:105
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden shadow-xl bg-card">
                      <img 
                        src="/assets/carousel-3.jpg" 
                        alt="Marcher sur l'eau au coucher du soleil" 
                        className="w-full h-auto"
                      />
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-bold mb-3 text-foreground">
                          Christ est le fondement de notre foi
                        </h3>
                        <p className="text-muted-foreground italic leading-relaxed">
                          Jésus lui dit : Je suis le chemin, la vérité et la vie. Nul ne vient au Père que par moi. - Jean 14:6
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-2xl overflow-hidden shadow-xl bg-card">
                      <img 
                        src="/assets/carousel-4.jpg" 
                        alt="Mains en cercle - Communauté" 
                        className="w-full h-auto"
                      />
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-bold mb-3 text-foreground">
                          Un même esprit, un même cœur
                        </h3>
                        <p className="text-muted-foreground italic leading-relaxed">
                          Efforcez-vous de conserver l'unité de l'Esprit par le lien de la paix. Il y a un seul corps et un seul Esprit. - Éphésiens 4:3–4
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 py-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
              Qui sommes-nous?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Nous sommes un groupe de chrétiens adventistes francophones installés à Francfort. 
                  Ce qui nous définit, c’est d'abord notre foi en Jésus et notre envie de vivre 
                  une spiritualité authentique dans notre ville. Notre groupe est un point de rencontre 
                  pour tous ceux qui parlent français et qui cherchent une communauté accueillante pour 
                  étudier la Bible et partager des moments de fraternité.            
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Description */}
            <div className="prose prose-lg max-w-none mb-16">
              <Card className="glass-card">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                    Notre Histoire
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    L'histoire de l'Église adventiste commence au milieu du XIXe siècle, après 
                    le "Grand Désappointement" de 1844, lorsque les partisans de William Miller 
                    attendaient le retour de Jésus. Parmi ceux qui ont cherché à comprendre cette 
                    erreur, des pionniers comme Hiram Edson ont redécouvert la doctrine du sanctuaire 
                    céleste. Ce petit groupe de croyants a continué d'étudier la Bible avec ferveur, 
                    posant les bases théologiques d'un mouvement qui allait devenir mondial.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Deux figures majeures ont ensuite structuré le mouvement : Joseph Bates, un ancien 
                    capitaine de marine, et le couple James et Ellen G. White. Bates a été le premier 
                    à promouvoir l'importance du Sabbat du septième jour, tandis qu'Ellen G. White a 
                    exercé un rôle prophétique crucial, guidant l'église par ses visions et ses écrits. 
                    Ensemble, ils ont unifié les doctrines éparses et encouragé l'organisation officielle 
                    de la dénomination en 1863 à Battle Creek, aux États-Unis.
                  </p>
                  
                  {/* Pioneers Photo */}
                  <div className="my-8 rounded-xl overflow-hidden shadow-xl max-w-3xl mx-auto">
                      <img
                        src="/assets/dis-le-au-monde.jpg"
                        alt="Dis-le au Monde - L'histoire de l'Église Adventiste"
                        className="w-full h-auto"
                      />
                    <p className="text-sm text-muted-foreground text-center mt-2 italic">
                      Les pionniers de l'Église adventiste du septième jour
                    </p>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Le développement de l'église s'est ensuite accéléré grâce à une vision holistique 
                    mêlant éducation, santé et évangélisation. Les écrits d'Ellen G. White ont poussé 
                    les adventistes à fonder des hôpitaux et des écoles partout dans le monde. 
                    Des missionnaires comme J.N. Andrews, le premier envoyé officiel à l'étranger, 
                    ont permis d'étendre ce message au-delà de l'Amérique du Nord, transformant un petit 
                    groupe de pionniers en une communauté internationale présente dans presque tous les pays aujourd'hui.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Key Features */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Le Sabbat biblique</h3>
                  <p className="text-muted-foreground">
                    Observation du septième jour, du vendredi soir au samedi soir, comme mémorial de la Création
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Le retour du Christ</h3>
                  <p className="text-muted-foreground">
                    Espérance active dans la seconde venue de Jésus et proclamation des messages des trois anges
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                    <Lightbulb className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">La santé holistique</h3>
                  <p className="text-muted-foreground">
                    Promotion d'un mode de vie sain, considérant le corps comme le temple de l'Esprit Saint
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Video Section */}
            <div className="mt-16">
              <Card className="glass-card">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">
                    Dis-le au monde
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
                    Découvrez l'histoire des débuts de l'Église Adventiste à travers ce documentaire captivant
                  </p>
                  <div className="relative w-full max-w-4xl mx-auto" style={{ paddingBottom: '56.25%' }}>
                    <img
                      src="/assets/dis-le-au-monde.jpg"
                      alt="Dis-le au Monde - L'histoire de l'Église Adventiste du Septième Jour"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-16 text-center">
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/vision">
                  <Button className="glass-button glass-button-primary">
                    Notre identité
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/projets">
                  <Button className="glass-button">
                    Voir nos projets
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
