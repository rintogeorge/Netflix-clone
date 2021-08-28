import axios from '../../axios'
import YouTube from 'react-youtube'
import React, { useEffect, useState } from 'react'
import {API_KEY, imageUrl} from '../../constants/constants'
import './RowPost.css'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlid, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.urls).then (Response=>{
            console.log(Response.data)
            setMovies(Response.data.results)
        }).catch(err=>{
           // alert("network error")
        })
      },[])
      const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie = (id)=>{
          console.log(id);
          axios.get(`/movie/${id}/videos?api_key=${API_KEY}&launguage=en-US`).then(Response=>{
              if(Response.data.results.length!==0){
                  setUrlId(Response.data.results[0])
              }else{
                  console.log('Array Empty');
              }
          })
      }
    return (
        <div className="row">
            <h1>{props.title}</h1>
            <div className="posters">
                {movies.map((obj)=>
                    
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallposter" :'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                )}
                
                </div>
                {urlid && <YouTube opts={opts} videoId={urlid.key}/>}
        </div>
    )
}

export default RowPost
