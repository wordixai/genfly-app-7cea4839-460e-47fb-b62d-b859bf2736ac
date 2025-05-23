import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Heart, Users } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Premium Quality",
    description: "We source our beans from the finest coffee farms around the world, ensuring every cup meets our high standards."
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every drink is crafted with passion and attention to detail by our skilled baristas who truly care about your experience."
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "We're more than just a cafe - we're a gathering place where neighbors become friends and memories are made."
  }
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2018, Brew & Bean started as a dream to create the perfect neighborhood cafe. 
              We believe that great coffee brings people together, and every cup should be an experience 
              worth savoring.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From our carefully selected beans to our warm, welcoming atmosphere, everything we do 
              is designed to make you feel at home. Whether you're catching up with friends, working 
              on your next big project, or simply enjoying a quiet moment, we're here to make it special.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center border-none shadow-none">
                  <CardContent className="pt-6">
                    <feature.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Cafe interior"
              className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">5+ Years</p>
              <p className="text-sm">Serving the Community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About