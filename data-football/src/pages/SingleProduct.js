// if want to use each product use this page

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data";

const SingleProduct = ({allDataApp}) =>{
    console.log(allDataApp);

    let product = null 

    const [ playerImage, setPlayerImage ] = useState(null)

    // show of eachc product when click of the link below the title
    console.log(useParams());

    // show the page id that set from below function
    const { productId } = useParams();

    // when it.name === productId that show of the image and more data  when click of the link
    // when allDataApp that have data if use find to go to singlePlayer
    if(allDataApp){
        product = allDataApp.find((it)=>it.Name === productId);
    }
    const { Club, Name, Age, Position } = product; // image and name in data.js

    useEffect(()=>{
        
        // separate firstname and lastname to put the name for search in api
        let FullName = Name.split(' ');
        console.log(FullName);

        // option to to access image
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key' : '4f778798c1msh7f351be93afa18cp13e606jsnd95207d987d1',
                'X-RapidAPI-Host' : 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }
        };

        // call api to get image
        const fetchImage = async () =>{
            try{
                const response = await fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${FullName[0]}%20${FullName[1]}&pageNumber=1&pageSize=10&autoCorrect=true`, options)
                const image = await response.json()
                console.log(image.value[1].url);
                setPlayerImage(image.value[1].url)
            }
            catch(error){
                console.log(error);
            }
        }

        // fetchImage()
    },[])

    return (
        <section className="section">
            <img src={playerImage} alt={Name} width="500px" height="300"/>

            <h5>{Name}</h5>
            <p>{Club}</p>
            <p>{Age}</p>
            <p>{Position}</p>
            <Link to="/products">Back</Link>
        </section>
    )
}

export default SingleProduct