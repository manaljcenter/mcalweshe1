import Hero from '@/components/Hero'
import About from '@/components/About'
import Adventures from '@/components/Adventures'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import StructuredData from '@/components/StructuredData'

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <Hero />
        <About />
        <Adventures />
        <Skills />
        <Contact />
      </main>
    </>
  )
}