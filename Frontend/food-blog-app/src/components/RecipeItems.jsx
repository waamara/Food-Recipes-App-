import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function RecipeItems() {
const allRecipes=useLoaderData()
console.logall(allRecipes)
    return (
        <div>
            
        </div>
    )
}
