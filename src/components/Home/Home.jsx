import  { useState,useEffect } from 'react';
import Axios from 'axios';

export default function Home() {
    // const[count,setCount]=useState(0);
    // const[name,setName]=useState('');
    // const[isAdmin,setIsAdmin]=useState(false);

    // useEffect(()=>{
    //     console.log("component did mount");
    //     return()=>{
    //         console.log("component will unmount");
    //     }
    // },[]);

    // useEffect(()=>{
    //     console.log("hello");
    // });

    //  useEffect(()=>{
    //     if(count===0&&name== ''){
    //         return;
    //     }
    //     console.log("component didUpdate");
    // },[count,name]);

    // useEffect(()=>{
    //     if(name==''){
    //         return;
    //     }
    //     console.log("component didUpdate");
    // },[name]);

    // function changeCount(){
    //     setCount(Math.random());
    // }

    // function changeName(){
    //     setName(Math.random());
    // }







    let[trendingMovies,setTrendingMovies]=useState([]);
     async function getTrendingMovies(){
    let {data}=await Axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=YOUR_API_KEY');
    console.log(data);
    setTrendingMovies(data.results);
    }

    useEffect(()=>{
        getTrendingMovies();
    },[]);
    return (
            <>
            {/* <h4>Count: {count}</h4> */}
            {/* <h2>Home Component</h2> */}
            {/* <button className='btn btn-outline-info my-2 w-100' onClick={changeCount}>Change Count</button>
             <button className='btn btn-outline-info my-2 w-100' onClick={changeName}>Change Name</button> */}


<div className="row justify-content-center  text-center align-items-center">
{trendingMovies.length>0? trendingMovies.map((movie,index)=><div key={index} className="col-md-3">
    <div className='movie position-relative'>
        <img className='w-100' src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt={movie.title}/>
        <h4>{movie.title}</h4>
        <p>{movie.overview}</p>
        </div>

</div>):'<i className="fas fa-spinner fa-spin fa-4x"></i>>'} 
</div> 
  


            </>
    );
}