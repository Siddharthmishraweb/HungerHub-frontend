export const categorizeIngredients = (ingredients) => {
    return ingredients.length > 0 && ingredients?.reduce((acc, ingredient)=> {
        const { category } = ingredient;
        if(!acc[category.name]){
            acc[category.name]=[];
        }
        acc[category.name].push(ingredient);
        return acc;
    })
}