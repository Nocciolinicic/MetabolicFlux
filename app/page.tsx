import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import GlucoseMolecule from "@/components/glucose-molecule"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-purple-900 dark:text-purple-200">
                    Understanding Glycolysis
                  </h1>
                  <p className="max-w-[600px] text-gray-700 dark:text-gray-300 md:text-xl">
                    Explore the fundamental metabolic pathway that converts glucose into pyruvate, releasing energy for
                    cellular processes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/steps/1">
                    <Button className="bg-purple-700 hover:bg-purple-800">
                      Start Learning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/summary">
                    <Button
                      variant="outline"
                      className="border-purple-200 text-purple-700 hover:bg-purple-100 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-900/50"
                    >
                      Energy Summary
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center rounded-xl bg-white/50 dark:bg-gray-800/50 shadow-lg">
                <GlucoseMolecule />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-800 dark:text-purple-300">
                  The 10 Steps of Glycolysis
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Glycolysis is a sequence of ten enzyme-catalyzed reactions that convert glucose into pyruvate,
                  generating ATP and NADH in the process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-4">
                  <li className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Glucose Phosphorylation</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Hexokinase converts glucose to glucose-6-phosphate
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">Isomerization</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Phosphoglucose isomerase converts G6P to F6P
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Fructose Phosphorylation</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Phosphofructokinase adds a second phosphate group
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                      ...
                    </div>
                    <div>
                      <h3 className="font-medium">And more steps...</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Explore all 10 steps in detail</p>
                    </div>
                  </li>
                </ul>
                <div className="flex justify-center pt-4">
                  <Link href="/steps/1">
                    <Button className="bg-purple-700 hover:bg-purple-800">
                      Explore All Steps
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-4 rounded-xl bg-gradient-to-r from-purple-100 to-blue-100 p-8 dark:from-purple-950/50 dark:to-blue-950/50">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-200">Why Study Glycolysis?</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-200 p-1 dark:bg-purple-800">
                      <svg
                        className=" h-4 w-4 text-purple-700 dark:text-purple-300"
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
                    <span>Fundamental to cellular energy production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-200 p-1 dark:bg-purple-800">
                      <svg
                        className=" h-4 w-4 text-purple-700 dark:text-purple-300"
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
                    <span>Occurs in nearly all living organisms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-200 p-1 dark:bg-purple-800">
                      <svg
                        className=" h-4 w-4 text-purple-700 dark:text-purple-300"
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
                    <span>Critical for understanding metabolism and disease</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-purple-200 p-1 dark:bg-purple-800">
                      <svg
                        className=" h-4 w-4 text-purple-700 dark:text-purple-300"
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
                    <span>Provides insights into evolutionary biochemistry</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800 dark:text-blue-300">
                  Energy Balance in Glycolysis
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Understand the investment and payoff phases of glycolysis and how cells generate energy.
                </p>
              </div>
              <Link href="/summary">
                <Button className="bg-blue-700 hover:bg-blue-800">View Energy Summary</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-200 bg-white py-6 dark:border-gray-800 dark:bg-gray-950">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:flex-row md:gap-8 md:px-6">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} MetabolicFlux. Educational use only.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline" href="/about">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline" href="/references">
              References
            </Link>
            <Link className="text-sm font-medium hover:underline" href="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
