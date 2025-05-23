import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-amber-800">
            Brew & Bean
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-800 transition-colors">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-amber-800 transition-colors">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-amber-800 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-800 transition-colors">Contact</a>
            <Button className="bg-amber-800 hover:bg-amber-900">
              Order Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-amber-800 transition-colors">Home</a>
              <a href="#menu" className="text-gray-700 hover:text-amber-800 transition-colors">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-amber-800 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-800 transition-colors">Contact</a>
              <Button className="bg-amber-800 hover:bg-amber-900 w-fit">
                Order Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header