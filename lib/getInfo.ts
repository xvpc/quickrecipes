import React from 'react'

// Fetch
import axios from 'axios';

// Assets
import { apiUrl } from '@/utils/assets';

// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52845
// lookup.php?i=52845

type getInfoProps = {
    id: string | number,
}

export default async function getInfo({ id }: getInfoProps) {
    const url = apiUrl + `lookup.php?i=${id}`;

    try{
        const { data } = await axios.get(url);
        if(data.meals && data.meals.length > 0){
            return data.meals[0];
        }else{
            return { error: "No Info found for this Recipe!" }
        }
    }catch(err:any){
        return { error: err.message || "Something went wrong!" };
    }
}
