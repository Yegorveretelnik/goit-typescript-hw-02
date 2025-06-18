import css from "./LoadMoreBtn.module.css";
interface LoadMoreBtnProps {
  onClick: () => void;
}

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <div className={css.wrapper}>
      <button className={css.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
