import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';

const menuItems = [
  {
    name: "Creamy Chicken Kottu",
    description: "A rich, creamy twist on the classic Sri Lankan street food favorite.",
    price: "Rs. 1200",
    image: "https://picsum.photos/seed/kottu/400/300",
    category: "Signature"
  },
  {
    name: "Devilled Chicken",
    description: "Spicy, tangy, and perfectly seasoned chicken with fresh vegetables.",
    price: "Rs. 1500",
    image: "https://picsum.photos/seed/devilled_chicken/400/300",
    category: "Spicy"
  },
  {
    name: "Seafood Fried Rice",
    description: "Fragrant basmati rice tossed with fresh prawns, calamari, and fish.",
    price: "Rs. 1800",
    image: "https://picsum.photos/seed/seafood_rice/400/300",
    category: "Seafood"
  },
  {
    name: "Coke Mojito",
    description: "A refreshing blend of cola, mint, and lime for the perfect cooler.",
    price: "Rs. 450",
    image: "https://picsum.photos/seed/mojito/400/300",
    category: "Beverage"
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4">Popular Menu</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our most loved dishes, crafted with passion and the finest ingredients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-neutral-900 border-neutral-800 overflow-hidden h-full flex flex-col group">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-[#D4AF37] text-black text-xs font-bold px-2 py-1 rounded">
                    {item.category}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-white group-hover:text-[#D4AF37] transition-colors">
                      {item.name}
                    </CardTitle>
                    <span className="text-[#D4AF37] font-bold whitespace-nowrap ml-2">{item.price}</span>
                  </div>
                  <CardDescription className="text-gray-400 text-sm line-clamp-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-4">
                  <Button variant="outline" className="w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors">
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-[#D4AF37] text-black hover:bg-[#C5A028] px-8 py-6 text-lg rounded-full">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
