import React from 'react';
import Row from './Row';

const API_KEY = 'fdb59c354653d7db4447c6c437e3cf0e';
const CATEGORIES_LIST = [
    {'title': 'NETFLIX ORIGINALS', 'api_key': `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`},
    {'title': 'Trending Now', 'api_key': `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`},
    {'title': 'Action TV Shows', 'api_key': `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10759`},
    {'title': 'Documentaries', 'api_key': `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=99`},
    {'title': 'Drama TV Shows', 'api_key': `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=18`},
    {'title': 'Sci-fi TV Shows', 'api_key': `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10765`},
    {'title': 'Comedies TV Shows', 'api_key': `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=35`},
    {'title': 'Animations TV Shows', 'api_key': `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=16`},
]

function Rows() {
    
    return (
        <div className="movies-list">
            {
                CATEGORIES_LIST.map((item, index) => (
                    <Row key={index} title={item.title} apiKey={item.api_key} posterType={index===0 ? "poster" : "backdrop"} />
                ))
            }
        </div>
    );
}

export default Rows;