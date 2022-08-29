// if want to use each product use this page

import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Radar } from 'react-chartjs-2';
// import data from "../data";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

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
    const { Name,
            Club, 
            Nationality,
            Position,
            Age,
            Matches,
            Starts,
            Mins,
            Goals,
            Assists,
            Passes_Attempted,
            Perc_Passes_Completed,
            Penalty_Goals,
            Penalty_Attempted,
            Yellow_Cards,
            Red_Cards
    } = product; 

    const data = {
        labels: ['Match Play', 'Minutes', 'Goals', 'Passing Completed', 'Penalty Goals', 'Yellow-Card per match', "Red-Card per match"],
        datasets: [
            {
                label: 'player Stats By Percent',
                data: [
                        (Starts / Matches) * 100 , 
                        (Mins / (Matches * 90)) * 100, 
                        (Goals / Matches) * 100, 
                        Perc_Passes_Completed, 
                        (Penalty_Goals / Penalty_Attempted) * 100,
                        (Yellow_Cards / Matches) * 100,
                        (Red_Cards / Matches) * 100
                    ],
                backgroundColor: 'rgba(20, 99, 132, 0.2)',
                borderColor: 'rgb(108, 90, 190)',
                borderWidth: 2,

            },
        ],
    };


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
                let number = Math.floor(Math.random() * 10);
                console.log(image.value[1].url);
                setPlayerImage(image.value[number].url)
            }
            catch(error){
                console.log(error);
            }
        }

        // fetchImage()
    },[])

    return (
        <section className="section">
            <div className="single-product">

                <div className="data-player">
                    <img className="image-player" src={playerImage} alt={Name}/>
                    <div className="stat-player">

                        <div className="name-stat">
                            <h5 className="data">Name</h5>
                            <p className="data">Club</p>
                            <p className="data">Nationality</p>
                            <p className="data">Position</p>
                            <p className="data">Age</p>
                            <p className="data">Matches</p>
                            <p className="data">Starts</p>
                            <p className="data">Minutes</p>
                            <p className="data">Goals</p>
                            <p className="data">Assists</p>
                            <p className="data">Passes Attempted</p>
                            <p className="data">Perc Passes Completed</p>
                            <p className="data">Yellow Cards</p>
                            <p className="data">Red Cards</p>
                        </div>

                        <div className="stat">
                            <h5 className="data">{Name}</h5>
                            <p className="data">{Club}</p>
                            <p className="data">{Nationality}</p>
                            <p className="data">{Position}</p>
                            <p className="data">{Age}</p>
                            <p className="data">{Matches}</p>
                            <p className="data">{Starts}</p>
                            <p className="data">{Mins}</p>
                            <p className="data">{Goals}</p>
                            <p className="data">{Assists}</p>
                            <p className="data">{Passes_Attempted}</p>
                            <p className="data">{Perc_Passes_Completed} %</p>
                            <p className="data">{Yellow_Cards}</p>
                            <p className="data">{Red_Cards}</p>
                        </div>
  
                    </div>
                </div>

                <div className="chart-player">
                    <Radar data={data} className="radar-chart" />
                </div>

            </div>
            <button className="back-product"><Link to="/products" className="back">Back</Link></button>
            
        </section>
    )
}

export default SingleProduct