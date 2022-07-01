import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import "../Styles/row.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Row({title, apiKey, posterType}) {
    const [movies, setMovies] = useState([]);
    const [hideForwardBtn, sethideForwardBtn] = useState(false)
    const [hideBackBtn, sethideBackBtn] = useState(true)
    const ref = useRef(null);

    

    const getMovies = async () => {
        try{
            const res = await axios.get(apiKey)
            setMovies(res.data.results)
        }catch(err){
            console.log(err)
        }
    }

    const scrollForwardCategories = (e) => {
        if(ref.current.scrollLeft === ref.current.scrollLeftMax){
            sethideForwardBtn(prevState => true);
        }else{
            sethideForwardBtn(prevState => false);
            ref.current.scrollLeft += 300;
        }   
        sethideBackBtn(prevState => false);
    }

    const scrollBackCategories = (e) => {
        if(ref.current.scrollLeft === 0){
            sethideBackBtn(prevState => true);
        }else{
            sethideBackBtn(prevState => false);
            ref.current.scrollLeft -= 300;
        }
        sethideForwardBtn(prevState => false);
    }

    useEffect(()=>{
        getMovies()
    },[])

    return (
        <div className="row-homepage">
            <h3 className='title-homepage'>{title}</h3>
            
            <div className={`row-image-homepage ${posterType==='poster' && 'poster-image'}`}>
                <div className="movie-list" ref={ref}>
                    {movies.map((movie,key)=> (
                        <div key={key} className='movie-row-homepage' >
                            <img className='movie-image-homepage' src={`https://image.tmdb.org/t/p/original/${posterType==='poster' ? movie.poster_path : movie.backdrop_path===null ? movie.poster_path : movie.backdrop_path}`} alt={movie.name || movie.title} />
                        </div>
                    ))}   
                </div>
                <div className={`back-btn ${hideBackBtn ? 'hide' : 'show'}`} onClick={scrollBackCategories}><span><FontAwesomeIcon icon={faChevronLeft} /></span></div>
                <div className={`forward-btn ${hideForwardBtn ? 'hide' : 'show'}`} onClick={scrollForwardCategories}><span><FontAwesomeIcon icon={faChevronRight} /></span></div>
            </div>
        </div>
    );
}

export default Row;