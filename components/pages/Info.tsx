import React from 'react'

// Components
import Introduction from '../sections/Introduction'
import Ingredients from '../sections/Ingredients';
import Instructions from '../sections/Instructions';
import Video from '../sections/Video';

type InfoProps = {
    data: Record<string, any> | null
}

export default function Info({ data }: InfoProps) {
    const name: string = data?.strMeal || "";
    const country: string = data?.strArea || "";
    const image: string = data?.strMealThumb || "";
    const ingredients: string[] = [data?.strIngredient1, data?.strIngredient2, data?.strIngredient3, data?.strIngredient4, data?.strIngredient5, data?.strIngredient6, data?.strIngredient7, data?.strIngredient8, data?.strIngredient9, data?.strIngredient10, data?.strIngredient11, data?.strIngredient12, data?.strIngredient13, data?.strIngredient14, data?.strIngredient15, data?.strIngredient16, data?.strIngredient17, data?.strIngredient18, data?.strIngredient19, data?.strIngredient20];
    const instructions: string = data?.strInstructions || "";
    const video: string = data?.strYoutube || "";


    return (
        <div className='d-flex flex-column justify-content-between text-center algin-items-center gap-5 overflow-hidden'>
            <Introduction 
            title={name} 
            country={country} 
            image={image} 
            />

            <Ingredients
                ingredients={ingredients}
            />

            <Instructions
                instructions={instructions}
            />
            
            <Video 
                video={video}
            />
        </div>
    )
}
