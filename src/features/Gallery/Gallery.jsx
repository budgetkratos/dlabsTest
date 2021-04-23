import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './Gallery.css'

function Gallery() {
    const [loading, setLoading] = useState(false);
    const [current, setCurrent] = useState(0);
    const [data, setData] = useState(null);

    const BASE_URL = 'https://picsum.photos/v2/list?page=2&limit=10';

    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}`)
            .then(({ data }) => setData(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);


    const nextSlide = () => {
        setCurrent(current === data.length - 1 ? 0: current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? data.length - 1 : current - 1);
    }

    if(!data) return null;

    return (
        <div className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
           {loading && "Loading..."}
           <img className='image' src={data?.[current]?.download_url} alt={data?.[current]?.author}/>
        </div>
    );
}

export default Gallery;