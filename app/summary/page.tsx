import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import EnergySummaryVisualization from "@/components/energy-summary-visualization"

export default function SummaryPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-300 md:text-3xl">
          Energy Balance in Glycolysis
        </h1>
        <Link href="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950/50 dark:to-purple-950/50">
            <CardTitle>Energy Flow Visualization</CardTitle>
            <CardDescription>Visual representation of ATP and NADH production in glycolysis</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[400px] w-full">
              <EnergySummaryVisualization />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Energy Investment Phase (Steps 1-5)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                In the first half of glycolysis, energy is invested in the form of ATP to prepare glucose for energy
                extraction:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-200 p-1 dark:bg-blue-800">
                    <svg
                      className="h-4 w-4 text-blue-700 dark:text-blue-300"
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
                  <span>Step 1: 1 ATP consumed (Hexokinase)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-200 p-1 dark:bg-blue-800">
                    <svg
                      className="h-4 w-4 text-blue-700 dark:text-blue-300"
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
                  <span>Step 3: 1 ATP consumed (Phosphofructokinase)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-blue-200 p-1 dark:bg-blue-800">
                    <svg
                      className="h-4 w-4 text-blue-700 dark:text-blue-300"
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
                  <span>Total investment: 2 ATP molecules</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Energy Payoff Phase (Steps 6-10)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                In the second half of glycolysis, energy is extracted in the form of ATP and NADH:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-purple-200 p-1 dark:bg-purple-800">
                    <svg
                      className="h-4 w-4 text-purple-700 dark:text-purple-300"
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
                  <span>Step 6: 2 NADH produced (Glyceraldehyde-3-phosphate dehydrogenase)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-purple-200 p-1 dark:bg-purple-800">
                    <svg
                      className="h-4 w-4 text-purple-700 dark:text-purple-300"
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
                  <span>Step 7: 2 ATP produced (Phosphoglycerate kinase)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-purple-200 p-1 dark:bg-purple-800">
                    <svg
                      className="h-4 w-4 text-purple-700 dark:text-purple-300"
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
                  <span>Step 10: 2 ATP produced (Pyruvate kinase)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-purple-200 p-1 dark:bg-purple-800">
                    <svg
                      className="h-4 w-4 text-purple-700 dark:text-purple-300"
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
                  <span>Total payoff: 4 ATP and 2 NADH molecules</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Net Energy Production</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Net ATP production:</strong> 4 ATP produced - 2 ATP consumed ={" "}
                  <span className="font-bold text-green-600 dark:text-green-400">2 ATP</span>
                </p>
                <p>
                  <strong>NADH production:</strong>{" "}
                  <span className="font-bold text-green-600 dark:text-green-400">2 NADH</span> (can yield additional ATP
                  through oxidative phosphorylation)
                </p>
                <p>
                  <strong>Final products:</strong> 2 Pyruvate molecules (which can enter the TCA cycle for further
                  energy extraction)
                </p>
                <p className="mt-4 text-sm">
                  Note: Under anaerobic conditions, pyruvate is converted to lactate (in animals) or ethanol (in yeast)
                  to regenerate NAD+ for continued glycolysis.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/steps/1">
          <Button>Explore Glycolysis Steps</Button>
        </Link>
      </div>
    </div>
  )
}
