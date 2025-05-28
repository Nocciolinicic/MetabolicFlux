"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold text-purple-700 dark:text-purple-400">Metabolic</span>
          <span className="text-xl font-bold text-blue-700 dark:text-blue-400">Flux</span>
        </Link>
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/steps/1"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400"
              >
                Steps
              </Link>
            </li>
            <li>
              <Link
                href="/summary"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400"
              >
                Energy Summary
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden md:flex">
            Download Resources
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 pb-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/steps/1"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Steps
            </Link>
            <Link
              href="/summary"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Energy Summary
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button variant="outline" size="sm" className="w-full">
              Download Resources
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
