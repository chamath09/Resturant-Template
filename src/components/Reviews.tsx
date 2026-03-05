import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

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
  },
  {
    name: "Michael Ross",
    rating: 5,
    comment: "A hidden gem! The cocktails are top-notch and the atmosphere is just electric. Highly recommend the Coke Mojito.",
    date: "1 week ago"
  },
  {
    name: "Priya Silva",
    rating: 4,
    comment: "Great food and lovely decor. The seafood fried rice was generous and very tasty. Will definitely come back.",
    date: "2 months ago"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-black text-white relative overflow-hidden">
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

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper w-full py-12"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="max-w-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-neutral-900/80 border-neutral-800 h-full relative backdrop-blur-sm hover:border-[#D4AF37]/50 transition-colors duration-300">
                  <Quote className="absolute top-4 right-4 text-[#D4AF37]/20 w-12 h-12" />
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'text-[#D4AF37] fill-current' : 'text-gray-600'}`} 
                        />
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
                    <p className="text-gray-300 italic leading-relaxed">"{review.comment}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
