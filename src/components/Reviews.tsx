import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

const reviews = [
  {
    name: "Sarah Jenkins",
    rating: 5,
    comment: "Absolutely stunning place! The Creamy Chicken Kottu was out of this world. The ambiance is perfect for a date night.",
    date: "2 weeks ago"
  },
  {
    name: "David Perera",
    rating: 5,
    comment: "Best restaurant in Embilipitiya hands down. The service was impeccable and the Devilled Chicken had just the right amount of spice.",
    date: "1 month ago"
  },
  {
    name: "Emily Chen",
    rating: 5,
    comment: "We hosted our anniversary dinner here and it was magical. The staff went above and beyond to make it special.",
    date: "3 days ago"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4">What Our Guests Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real experiences from our valued customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-neutral-900 border-neutral-800 h-full relative">
                <Quote className="absolute top-4 right-4 text-[#D4AF37]/20 w-12 h-12" />
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg text-white font-sans font-medium">
                    {review.name}
                  </CardTitle>
                  <CardDescription className="text-gray-500 text-xs">
                    {review.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
