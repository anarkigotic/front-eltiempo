import axios from "axios"



export const getNews = async() => {
    let res = await axios.get("http://localhost:4000/news/all")
    return res.data
}