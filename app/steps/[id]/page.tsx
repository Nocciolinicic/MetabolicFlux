import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StepVisualization from "@/components/step-visualization"
import { glycolysisSteps } from "@/lib/glycolysis-data"
import { notFound } from "next/navigation"

export default function StepPage({ params }: { params: { id: string } }) {
  const stepId = Number.parseInt(params.id)

  if (isNaN(stepId) || stepId < 1 || stepId > 10) {
    notFound()
  }

  const step = glycolysisSteps[stepId - 1]
  const prevStep = stepId > 1 ? stepId - 1 : null
  const nextStep = stepId < 10 ? stepId + 1 : null

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-purple-800 dark:text-purple-300 md:text-3xl">
          Step {stepId}: {step.name}
        </h1>
        <div className="flex space-x-2">
          {prevStep && (
            <Link href={`/steps/${prevStep}`}>
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
            </Link>
          )}
          {nextStep && (
            <Link href={`/steps/${nextStep}`}>
              <Button variant="outline" size="sm">
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-950/50 dark:to-blue-950/50">
            <CardTitle>Molecular Visualization</CardTitle>
            <CardDescription>Interact with the 3D model to understand the molecular changes</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[400px] w-full">
              <StepVisualization stepId={stepId} />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Reaction Details</CardTitle>
              <CardDescription>Key information about this step in glycolysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-purple-700 dark:text-purple-400">Enzyme</h3>
                  <p>{step.enzyme}</p>
                </div>
                <div>
                  <h3 className="font-medium text-purple-700 dark:text-purple-400">Substrate</h3>
                  <p>{step.substrate}</p>
                </div>
                <div>
                  <h3 className="font-medium text-purple-700 dark:text-purple-400">Product</h3>
                  <p>{step.product}</p>
                </div>
                {step.coenzymes && (
                  <div>
                    <h3 className="font-medium text-purple-700 dark:text-purple-400">Coenzymes</h3>
                    <p>{step.coenzymes}</p>
                  </div>
                )}
                {step.energyChange && (
                  <div>
                    <h3 className="font-medium text-purple-700 dark:text-purple-400">Energy Change</h3>
                    <p>{step.energyChange}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Explanation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{step.explanation}</p>
            </CardContent>
          </Card>

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="regulation">Regulation</TabsTrigger>
              <TabsTrigger value="clinical">Clinical Relevance</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="rounded-md border p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">{step.additionalDetails}</p>
            </TabsContent>
            <TabsContent value="regulation" className="rounded-md border p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">{step.regulation}</p>
            </TabsContent>
            <TabsContent value="clinical" className="rounded-md border p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">{step.clinicalRelevance}</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/summary">
          <Button variant="outline">View Energy Summary</Button>
        </Link>
      </div>
    </div>
  )
}
