import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";
import { Image } from "./components/types";
const ACCESS_KEY = "o20-tw0-pmBeUAqgCX0EWyP9x92-LAezxQu-gcbJYEg";

function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Image | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              query,
              page,
              per_page: 12,
            },
            headers: {
              Authorization: `Client-ID ${ACCESS_KEY}`,
            },
          }
        );

        setImages((prev) => [...prev, ...response.data.results]);
        setTotalPages(response.data.total_pages);
      } catch (err) {
        setError("Something went wrong...");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery: string): void => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = (): void => setPage((prev) => prev + 1);
  const handleSelect = (img: Image): void => setSelected(img);
  const closeModal = (): void => setSelected(null);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onSelect={handleSelect} />
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selected && (
        <ImageModal
          isOpen={Boolean(selected)}
          onClose={closeModal}
          image={selected}
        />
      )}
      <Toaster position="top-right" />
    </>
  );
}

export default App;
