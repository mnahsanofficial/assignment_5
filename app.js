const searchFood = async () => {
    const searchText = document.getElementById('search-food').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText} `;
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
        .catch(error => displayError('Something Went Wrong!! Please try again'))
        
}

const displayFood = foods => {
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = '';
    foods.forEach(meals => {
        const foodDiv = document.createElement('div');
        foodDiv.className = ' row-cols-md-2  mt-5 d-flex justify-content-around';
        foodDiv.innerHTML = `
        <div class="col">
            <div class="card h-100 text-center">
                <img onclick="getIngredient('${meals.strMeal}') "  src="${meals.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meals.strMeal}</h5>
                </div>
            </div>
        </div>
       
        `
        foodContainer.appendChild(foodDiv);

    });


}

const getIngredient=async(strMeal)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayIngredient(data.meals);

    }
    catch (error) {
        displayError('Something Went Wrong!! Please try again');

    }

}
const displayIngredient=ingredient=>{

    ingredient.forEach(food => {
        const ingredientContainer=document.getElementById('food-ingredient');
        ingredientContainer.innerHTML = `
        <div>
            <p>${food.strIngredient1}</p>
            <p>${food.strIngredient2}</p>
            <p>${food.strIngredient3}</p>
            <p>${food.strIngredient4}</p>
            <p>${food.strIngredient5}</p>
            <p>${food.strIngredient6}</p>
            <p>${food.strIngredient7}</p>
            <p>${food.strIngredient8}</p>
            <p>${food.strIngredient9}</p>
        </div>
        
        `
        
    });

}
const displayError=error=>{
    const errorTag=document.getElementById('error-message')
    errorTag.innerText=error;
}