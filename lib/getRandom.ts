import React from 'react'

// Fetch
import axios from 'axios';

// Assets
import { apiUrl } from '@/utils/assets';

// https://www.themealdb.com/api/json/v1/1/random.php
// random.php

export default async function getRandom() {
    const url = apiUrl + `random.php`;

    try{
        const { data } = await axios.get(url);
        if(data.meals && data.meals.length > 0 && data.meals[0].idMeal != null){
            return data.meals[0].idMeal;
        }else{
            return { error: "No Random Recipes!" }
        }
    }catch(err:any){
        return { error: err.message || "Something went wrong!" };
    }
}
