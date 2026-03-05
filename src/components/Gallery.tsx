import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: "https://picsum.photos/seed/restaurant_interior_1/600/400", alt: "Interior Design" },
  { src: "https://picsum.photos/seed/food_plating_1/600/800", alt: "Exquisite Plating" }, // Tall image
  { src: "https://picsum.photos/seed/cocktail_bar/600/400", alt: "Cocktail Bar" },
  { src: "https://picsum.photos/seed/night_ambience/600/400", alt: "Night Atmosphere" },
  { src: "https://picsum.photos/seed/chef_cooking/600/800", alt: "Chef in Action" }, // Tall image
  { src: "https://picsum.photos/seed/dining_experience/600/400", alt: "Dining Experience" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4">Our Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A glimpse into the ambiance, the food, and the moments we create.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-xl group ${index === 1 || index === 4 ? 'md:row-span-2' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-serif tracking-wider border-b border-[#D4AF37] pb-1">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
