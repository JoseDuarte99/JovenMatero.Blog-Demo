// Import Style
import style from "./ImageCarousel.module.css"

// Import React
import { useState } from "react";

// Import Contexts
// Import Components
// Import Types
// Import Others




type ImageType = {
    id: number;
    image: string;
    };

interface ImageCarouselProps {
    mainImage: string;
    images?: ImageType[];
    alt?: string;
    }

function ImageCarousel({ mainImage, images = [], alt }: ImageCarouselProps) {

    const allImages = [{ id: 0, image: mainImage }, ...images];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prev) =>
        prev === 0 ? allImages.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex((prev) =>
        prev === allImages.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className={style.carousel}>
            <button onClick={prevImage} className={style.prevImage}>◀</button>
            
            <img
                src={allImages[currentIndex].image}
                alt={alt || "carousel image"}
                className={style.image}
            />

            <button onClick={nextImage} className={style.nextImage}>▶</button>

            <div className={style.indicators}>
                {allImages.map((_, index) => (
                    <span
                        key={index}
                        className={`${style.dot} ${index === currentIndex ? style.active : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
    };

export default ImageCarousel;
