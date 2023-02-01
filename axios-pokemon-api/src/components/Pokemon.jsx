
import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const Pokemon = () => {

    const [planetas, setPlanetas]= useState([]);

    const BuscarPlanetas = () => {
        
        axios.get("https://pokeapi.co/api/v2/pokemon").then(response=>{
            
            setPlanetas(response.data.results);
        })

    }

    return (
        <>
        <button onClick={BuscarPlanetas}>Fetch Pokemon</button>
        <ul>
            {
                planetas.map((planeta, indice) => <li key={indice}>{planeta.name}</li>)
            }
        </ul>
        </>
    )
}

export default Pokemon;