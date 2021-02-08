const search=document.getElementById('search-button');
search.addEventListener('click',function(){
    foodDisplay();
    
})

function foodDisplay(){

    const foodName=document.getElementById('search-food-name').innerText;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodName}`)
    .then(resp=>resp.json())
    .then(data=>{
        foodName.innerText=data.strMeal;
        console.log(foodName)
    })
    

}