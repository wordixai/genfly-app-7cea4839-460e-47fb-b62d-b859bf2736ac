import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to
          <span className="block text-amber-400">Brew & Bean</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Where every cup tells a story and every moment becomes a memory. 
          Experience the perfect blend of artisanal coffee and cozy atmosphere.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-3">
            Explore Menu
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-3">
            Find Us
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero