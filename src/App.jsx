import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import image1 from "/images/img1.webp";
import image2 from "/images/img2.webp";
import image3 from "/images/img3.webp";
import image4 from "/images/img4.webp";
import image5 from "/images/img5.webp";

const images = [
  { id: 1, src: image1, alt: "phone image" },
  { id: 2, src: image2, alt: "phone image" },
  { id: 3, src: image3, alt: "phone image" },
  { id: 4, src: image4, alt: "phone image" },
  { id: 5, src: image5, alt: "phone image" },
];

function App() {
  const [selectedImage, setSelectedImage] = useState(images[0].src);

  return (
    <main className="bg-neutral-100 min-h-screen grid place-content-center px-3">
      <div>
        <h1 className="text-5xl text-center text-gray-950 mb-10 capitalize">
          moto edge 50 neo
        </h1>

        {/* Large Image Display with Animation */}
        <div className="mx-auto overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedImage} // Triggers animation when image changes
              src={selectedImage}
              alt="Selected Phone"
              className="w-150 h-100 object-cover mx-auto rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 250 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -250 }}
              transition={{ duration: 0.5, ease: "linear" }}
            />
          </AnimatePresence>
        </div>

        {/* Thumbnail Images */}
        <div className="flex items-center justify-center gap-4 flex-wrap mt-5">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className={`${
                selectedImage === image.src
                  ? "outline-2 outline-purple-400 outline-offset-2"
                  : ""
              } size-15 md:size-20 object-cover rounded-lg overflow-hidden cursor-pointer`}
              onClick={() => setSelectedImage(image.src)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
