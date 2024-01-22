import React, { useState } from 'react'

export default function News() {

    const [news, setNews] = useState()


    // function getNews(){

    // fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=e0542409b0af4feca0dd8cb4b3e72a4f")
    //     .then(response => response.json())
    //     .then(json => setNews(json))
    // }
    // console.log(response)

    async function getNews(){

        //kalpana's API key fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=e0542409b0af4feca0dd8cb4b3e72a4f")
        //  
        await fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=e15c2f56ef5040b69d76b0ffbcd15737")   .then(response => {
              
        console.log(response)
        if(response.status === 200){

                return response.json()
            }else {
                throw new Error("API Call Aborted")
            }
            })
            .then(json => setNews(json))
        }

        console.log("Sorting Done")
    return (
        <>
            <h1>Hyyy</h1>

            <button onClick={getNews} > Click me</button>

           
           {/* <p>{
                news ? news.articles[0].title : "Loading"
            }</p> */}


             <p>{
                news ? news.articles.map((item,index)=>{
                    return (
                        <div>
                            {
                                 item.title
                                // item.author
                                // item.description
                            }
                        </div>
                    )

                }) : "Loading"
            }</p>


            {/* <p>
                {
                    news ? news.article[0].title : "L"
                }
            </p> */}

        </>
    )
}
