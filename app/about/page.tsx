import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-purple-800 dark:text-purple-300 md:text-3xl">About MetabolicFlux</h1>
        <Link href="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>The History of Glycolysis Research</CardTitle>
              <CardDescription>From early discoveries to modern understanding</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                The story of glycolysis begins in the 19th century with Louis Pasteur's observations of fermentation,
                but it wasn't until the 1930s that the complete pathway was elucidated through the pioneering work of
                Gustav Embden, Otto Meyerhof, and Jacob Parnas—which is why glycolysis is sometimes called the
                Embden-Meyerhof-Parnas (EMP) pathway.
              </p>
              <p>
                Otto Warburg made significant contributions to our understanding of glycolysis, particularly in cancer
                cells. His observation that cancer cells preferentially use glycolysis even in the presence of oxygen
                (aerobic glycolysis) is known as the "Warburg Effect" and remains an important area of cancer research
                today.
              </p>
              <p>
                In 1940, Fritz Lipmann proposed the concept of "high-energy phosphate bonds," which was crucial for
                understanding how ATP functions as an energy currency in glycolysis and other metabolic pathways.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Evolutionary Significance</CardTitle>
              <CardDescription>Ancient origins of energy metabolism</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Glycolysis is one of the oldest metabolic pathways, believed to have evolved approximately 3.5 billion
                years ago in ancient prokaryotes, even before the atmosphere contained significant oxygen.
              </p>
              <p>
                The pathway's universality across all domains of life—bacteria, archaea, and eukaryotes—suggests that it
                was present in the last universal common ancestor (LUCA) of all living organisms.
              </p>
              <p>
                Interestingly, while the overall pathway is conserved, there are at least five known variations of
                glycolysis across different organisms, including the Entner-Doudoroff pathway in certain bacteria and
                the phosphoketolase pathway in some fungi.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>About MetabolicFlux</CardTitle>
              <CardDescription>Our mission and research focus</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                MetabolicFlux was founded by a team of biochemistry educators and researchers dedicated to making
                complex metabolic pathways accessible through interactive visualizations and comprehensive explanations.
              </p>
              <p>
                Our team includes specialists in biochemistry, molecular biology, and educational technology who
                collaborate to create scientifically accurate yet understandable content.
              </p>
              <p>
                We're committed to ongoing research in metabolic pathway visualization and educational approaches, with
                publications in journals such as <em>Biochemistry and Molecular Biology Education</em> and
                <em> Journal of Chemical Education</em>.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Fascinating Glycolysis Facts</CardTitle>
              <CardDescription>Surprising aspects of this universal pathway</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-purple-200 p-1 dark:bg-purple-800">
                    <svg
                      className="h-3 w-3 text-purple-700 dark:text-purple-300"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>
                    <strong>Extreme adaptations:</strong> Some organisms have evolved modified glycolytic pathways for
                    extreme environments. For example, certain archaea living in near-boiling hot springs use a variant
                    called the "non-phosphorylated Entner-Doudoroff pathway" that is more thermostable.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-purple-200 p-1 dark:bg-purple-800">
                    <svg
                      className="h-3 w-3 text-purple-700 dark:text-purple-300"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>
                    <strong>Athletic performance:</strong> During intense exercise, human muscles can increase their
                    glycolytic rate up to 1,000 times compared to resting state, allowing for rapid ATP production when
                    oxygen is limited.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-purple-200 p-1 dark:bg-purple-800">
                    <svg
                      className="h-3 w-3 text-purple-700 dark:text-purple-300"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>
                    <strong>Enzyme efficiency:</strong> Triose phosphate isomerase (step 5) is one of the most
                    catalytically perfect enzymes known, operating at a rate limited only by the diffusion of substrate
                    to the enzyme—essentially as fast as physically possible.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-purple-200 p-1 dark:bg-purple-800">
                    <svg
                      className="h-3 w-3 text-purple-700 dark:text-purple-300"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span>
                    <strong>Moonlighting proteins:</strong> Several glycolytic enzymes have "moonlighting" functions
                    beyond metabolism. For example, hexokinase in mammalian cells also plays a role in apoptosis
                    (programmed cell death) by interacting with mitochondria.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medical Relevance</CardTitle>
              <CardDescription>Glycolysis in health and disease</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="cancer">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="cancer">Cancer</TabsTrigger>
                  <TabsTrigger value="genetic">Genetic Disorders</TabsTrigger>
                  <TabsTrigger value="diabetes">Diabetes</TabsTrigger>
                </TabsList>
                <TabsContent value="cancer" className="space-y-4 pt-4">
                  <p>
                    Cancer cells often exhibit the "Warburg effect"—a preference for glycolysis even when oxygen is
                    abundant. This metabolic reprogramming supports rapid proliferation and has become a target for
                    cancer therapies.
                  </p>
                  <p>
                    Recent research has shown that inhibiting specific glycolytic enzymes like hexokinase II and
                    pyruvate kinase M2 can selectively target cancer cells while sparing normal tissues, leading to the
                    development of novel anti-cancer drugs.
                  </p>
                </TabsContent>
                <TabsContent value="genetic" className="space-y-4 pt-4">
                  <p>
                    Genetic defects in glycolytic enzymes can cause rare but serious metabolic disorders. For example,
                    pyruvate kinase deficiency is the most common enzymatic defect of glycolysis, causing hemolytic
                    anemia.
                  </p>
                  <p>
                    Phosphofructokinase deficiency (Tarui disease) leads to exercise intolerance, muscle cramps, and
                    sometimes hemolytic anemia. These disorders highlight the critical importance of glycolysis in red
                    blood cells, which rely exclusively on this pathway for energy.
                  </p>
                </TabsContent>
                <TabsContent value="diabetes" className="space-y-4 pt-4">
                  <p>
                    In diabetes, insulin resistance disrupts glucose uptake and utilization through glycolysis. This
                    leads to hyperglycemia and contributes to the metabolic complications of the disease.
                  </p>
                  <p>
                    Interestingly, metformin—the most widely prescribed medication for type 2 diabetes—works in part by
                    affecting cellular energy metabolism, including glycolysis and mitochondrial function, highlighting
                    the therapeutic potential of targeting metabolic pathways.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Current Research Frontiers</CardTitle>
              <CardDescription>Cutting-edge investigations in glycolysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>Metabolic engineering:</strong> Researchers are modifying glycolytic pathways in microorganisms
                to optimize the production of biofuels, pharmaceuticals, and other valuable compounds. For example,
                engineered yeast with enhanced glycolysis can produce higher ethanol yields for biofuel applications.
              </p>
              <p>
                <strong>Spatial organization:</strong> Recent studies have revealed that glycolytic enzymes can form
                transient multienzyme complexes called "metabolons" that enhance pathway efficiency through substrate
                channeling. This challenges the traditional view of glycolysis as a series of independent reactions in
                solution.
              </p>
              <p>
                <strong>Systems biology:</strong> Advanced computational modeling of glycolysis is providing insights
                into how this pathway integrates with other metabolic networks and responds to changing cellular
                conditions, offering a more holistic understanding of cellular metabolism.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
