import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/MD";
import styles from "./Detail.module.css"

function Detail(){
  const [info, setInfo] = useState([]);
  const [loading,setLoading] = useState(true);
  const {id} = useParams();

  // fetch()를 통해 얻어온 정보를 setInfo를 통해 info에 저장
  const getMovie = async() =>{
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log(json)
    setInfo(json);
    setLoading(false);
  }
  // useEffet()를 이용하여 영화 정보를 가져오는 웹페이지 실행시 한번만 실행
  useEffect(()=>{
    getMovie();
  },[])
  
  return (
    <div>
      {loading ? <span className={styles.loader}>Loading...</span> :
      <div className={styles.movie}>
        <Movie
          key={info.data.movie.id}
          genres = {info.data.movie.genres}
          img = {info.data.movie.medium_cover_image}
          title = {info.data.movie.title_long}
          rating = {info.data.movie.rating}
        />
      </div>
      }
    </div>
  );
}
export default Detail;