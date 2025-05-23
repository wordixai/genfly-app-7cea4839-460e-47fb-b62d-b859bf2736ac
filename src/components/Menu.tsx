import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const menuItems = [
  {
    category: "Signature Coffees",
    items: [
      { name: "Brew & Bean Special", description: "Our signature blend with notes of chocolate and caramel", price: "$4.50" },
      { name: "Golden Latte", description: "Espresso with steamed milk and a touch of turmeric", price: "$5.00" },
      { name: "Cold Brew Delight", description: "Smooth cold brew with vanilla and cream", price: "$4.00" }
    ]
  },
  {
    category: "Fresh Pastries",
    items: [
      { name: "Artisan Croissant", description: "Buttery, flaky pastry baked fresh daily", price: "$3.50" },
      { name: "Blueberry Muffin", description: "Moist muffin bursting with fresh blueberries", price: "$3.00" },
      { name: "Chocolate Chip Cookie", description: "Warm, gooey cookie with premium chocolate chips", price: "$2.50" }
    ]
  }
]

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully crafted beverages and freshly baked goods made with love and the finest ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuItems.map((category, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-gray-800">{item.name}</h4>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      </div>
                      <span className="text-amber-800 font-bold text-lg ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu