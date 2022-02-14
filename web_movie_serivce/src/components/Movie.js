import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

// prop으로 전달받은 값들을 jsx로 return
function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          {/* prop으로 전달받은 영화의 id값을 이용하여 페이지 전환 */}
          <Link to={`/movie/${id}`}>{title}</Link> 
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        {/* summary의 길이가 235자가 넘어가지 않도록 slice */}
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// prop으로 전달받는 값들의 자료형을 체크
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;