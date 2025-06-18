import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../types";
interface ImageGalleryProps {
  images: Image[];
  onSelect: (image: Image) => void;
}

export default function ImageGallery({ images, onSelect }: ImageGalleryProps) {
  return (
    <ul className={css.gallery}>
      {images.map((img) => (
        <li key={img.id}>
          <ImageCard image={img} onClick={onSelect} />
        </li>
      ))}
    </ul>
  );
}
