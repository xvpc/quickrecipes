import React from 'react'

// Fetch
import axios from 'axios';

// Assets
import { apiUrl } from '@/utils/assets';

// https://www.themealdb.com/api/json/v1/1/search.php?s=meat
// search.php?s=meat

type getSearchProps = {
    query: string,
}

export default async function getSearch({ query }: getSearchProps) {
    const url = apiUrl + `search.php?s=${query}`;

    try{
        const { data } = await axios.get(url);
        if(data.meals && data.meals.length > 0){
            return data.meals;
        }else{
            return { error: "No Recipes found!" }
        }
    }catch(err:any){
        return { error: err.message || "Something went wrong!" };
    }
}
