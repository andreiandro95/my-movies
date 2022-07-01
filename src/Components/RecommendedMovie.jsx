import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import "../Styles/recommended-movie.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

function RecommendedMovie() {
    const [randomNetflixMovie, setRandomNetflixMovie] = useState({})

    
    const RANDOM_MOVIE = `https://api.themoviedb.org/3/discover/tv?api_key=fdb59c354653d7db4447c6c437e3cf0e&with_networks=213`;

    const getRecommendedMovie = async () => {
        try{
            const res = await axios.get(RANDOM_MOVIE)
            let randomNumber = Math.floor((Math.random() * res.data.results.length - 1) + 1);
            setRandomNetflixMovie(res.data.results[randomNumber])
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getRecommendedMovie()
    },[])

    return (
        <div className='recommended-movie'>
            <div className="movie-info">
                <div className="movie-name">{randomNetflixMovie.name}</div>
                <div className="movie-description">{randomNetflixMovie.overview}</div>
                <div className="btn-list">
                    <button type='button' className='play-btn'><FontAwesomeIcon icon={faPlay} />Play</button>
                    <button type='button' className='more-info-btn'>More info <FontAwesomeIcon icon={faCircleInfo} /></button>
                </div>
            </div> 
            <img className='movie-image-homepage' src={`https://image.tmdb.org/t/p/original/${randomNetflixMovie.backdrop_path}`} alt={randomNetflixMovie.name || randomNetflixMovie.title} />
        </div>
    );
}

export default RecommendedMovie;