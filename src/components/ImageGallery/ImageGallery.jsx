import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onSelect }) {
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
