import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Coffee Street", "Downtown District", "City, State 12345"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["(555) 123-4567"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@brewandbean.com"]
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 6:00 AM - 8:00 PM", "Sat-Sun: 7:00 AM - 9:00 PM"]
  }
]

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to see you! Stop by for a cup of coffee and experience the Brew & Bean difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <info.icon className="w-12 h-12 text-amber-600 mx-auto mb-2" />
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="bg-amber-50 p-8 lg:p-12 flex items-center">
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Why Choose Brew & Bean?</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    Freshly roasted beans daily
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    Expert baristas with years of experience
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    Cozy atmosphere perfect for work or relaxation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    Locally sourced pastries and snacks
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    Free Wi-Fi and comfortable seating
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact