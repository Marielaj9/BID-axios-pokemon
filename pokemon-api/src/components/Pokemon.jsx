
import React from 'react'
import { useState } from 'react'

const Pokemon = () => {

    const [planetas, setPlanetas]= useState([]);

    const BuscarPlanetas = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            return response.json();
        }).then(response => {
            console.log(response.results);
            setPlanetas(response.results);
        }).catch(err=>{
            console.log(err);
        });

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