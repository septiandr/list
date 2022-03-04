import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import dateFormat from 'dateformat'
import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Top from '../navbar/nav';

function Hal1() {
  const [data,setData]=useState([])
  const getData=async()=>{
    await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=81c1b6c7adcc4c5f99ea60934cb3aa52`)
        .then(res => {
          const response = res.data;
          setData(response.articles);
        })
    }
  useEffect(()=>{
    getData()
  },[])
  const article = data.slice(0,5)
  console.log(article)
  
  return (
    <>
    <Top/>
    
    <div className="App">
    <label style={{marginLeft:850,fontWeight:'bold'}}>Page 1</label>
      {article.map((props)=>(<Card props={props}/>))}
      
      <Pagination size="sm" aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink href="/">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/hal2">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="/hal2" />
        </PaginationItem>
      </Pagination>
    </div>
    </>
  );
}
const Card =({props})=>{
  return(
  <div className='card'>
    <h1>{props.title}</h1>
    <p style={{fontWeight:'bold'}}>{dateFormat(props.publishedAt, "dddd, d mmmm yyyy")}</p>
    <div>
      <img src={props.urlToImage}></img><br/>
    </div>
    <label>{props.content}</label>
    <p>{props.description}</p>
    <div className='auth'>
        <label><span>Author:</span>{props.author}</label>
        <label><span>Source:</span>{props.source.name}</label>
    </div>

  </div>
  )
}

export default Hal1;
