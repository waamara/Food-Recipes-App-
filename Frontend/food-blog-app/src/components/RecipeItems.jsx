import { useLoaderData } from 'react-router-dom'
import foodImg from '../assets/foodRecipe.png'

export default function RecipeItems() {
    const allRecipes = useLoaderData()
    console.logall(allRecipes)
    return (
        <>
            <div className='card-container'>
                {
                    allRecipes?.map((item,index)=>{
                        return(
                            <div key={index} className='card'> 
                                <img src={foodImg} alt="food image" />
                                <div className='card-body'>
                                    <div className='title'>
                                        {item.title}
                                    </div>
                                    <div className='icons'>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>

    )
}
