import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { Image } from "../types";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image;
}

Modal.setAppElement("#root");

export default function ImageModal({
  isOpen,
  onClose,
  image,
}: ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>{image.description || "No description"}</p>
      <p>By: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
    </Modal>
  );
}
