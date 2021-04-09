import React, { useContext, useEffect } from 'react'
import { getNews } from '../client/news';
import { DataContext } from './context/DataContext'

export const NewsComponent = () => {


    const { datanews,setNews } = useContext(DataContext);

    useEffect(async() => {
            let news = await getNews();
            setNews(news.data)
        
    },[])


    let target = ()=>{
       return datanews.map(eleme => {
            return (
                <div className="card" style= { {"width": "18rem",  "margin-bottom": "20px"} }>
                    <img className="card-img-top" src={eleme.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{eleme.tag}</h5>
                        <p className="card-subtitle text-muted">{eleme.time}</p>
                        <p className="card-text">{eleme.title}</p>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="row justify-content-center">
            <div className="align-item-center justify-content-center">
            <h1>Noticias el tiempo</h1>
            {
                   target()
            }

            </div>
           
        </div>
    )
}