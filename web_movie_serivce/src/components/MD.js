import PropTypes from "prop-types";

// prop으로 전달받은 값들을 jsx로 return
function Movie({key, genres,img,title,rating}) {
  return (
    <div>
      <h1>{title}</h1>
      <img key={key} src={img}/>
      <h4>Genre : {genres.map((genre) => <span key={genre}>{genre} </span>)}</h4>
      <h4>Rating : {rating}</h4>
    </div>
  )
}

// prop으로 전달받는 값들의 자료형을 체크
Movie.propTypes ={
  key:PropTypes.number.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired,
  img:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
}

export default Movie;