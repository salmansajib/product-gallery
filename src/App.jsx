import { useState } from "react";

import image1 from "../public/images/img1.webp";
import image2 from "../public/images/img2.webp";
import image3 from "../public/images/img3.webp";
import image4 from "../public/images/img4.webp";
import image5 from "../public/images/img5.webp";

const images = [
  {
    id: 1,
    src: image1,
    alt: "phone image",
  },
  {
    id: 2,
    src: image2,
    alt: "phone image",
  },
  {
    id: 3,
    src: image3,
    alt: "phone image",
  },
  {
    id: 4,
    src: image4,
    alt: "phone image",
  },
  {
    id: 5,
    src: image5,
    alt: "phone image",
  },
];

function App() {
  const [selectedImage, setSelectedImage] = useState(images[0].src);

  return (
    <main className="bg-neutral-100 min-h-screen gird place-content-center">
      <div>
        <h1 className="text-5xl text-center text-gray-950 mb-10 capitalize">
          moto edge 50 neo
        </h1>

        {/* large image display */}
        <div className="mx-auto">
          <img
            src={selectedImage}
            alt="Selected Phone"
            className="w-150 h-100 object-cover mx-auto rounded-xl overflow-hidden"
          />
        </div>

        {/* thumbnail images */}
        <div className="flex items-center justify-center gap-4 mt-5">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className={`${
                selectedImage === image.src
                  ? "outline-2 outline-green-400 outline-offset-2"
                  : ""
              } w-25 h-25 object-cover rounded-lg overflow-hidden cursor-pointer`}
              onClick={() => setSelectedImage(image.src)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
