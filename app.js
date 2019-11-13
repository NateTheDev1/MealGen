// GLOBAL

let gen = document.getElementById('generate');
let title = document.getElementById('meal-title');
let img = document.getElementById('meal-img');
let category = document.getElementById('category');
let ingredientList = document.getElementById('ingredients');
let link = document.getElementById('meal-link');
let favorite = document.getElementById('favorite');
let favoriteList = document.getElementById('favorited-meals');
let deleteMeal = document.getElementById('delete-meal');

let fList = [];

let curMeal;

loadFavorites();
// API EVENT

let url = 'https://www.themealdb.com/api/json/v1/1/random.php';

gen.addEventListener('click', function(e) {
	fetch(url)
		.then(function(res) {
			return res.json();
		})
		.then(function(data) {
			let meal = data.meals[0];
			updateMeal(meal);
			curMeal = meal;
		})
		.catch(function(err) {
			console.log(err);
		});
});

function updateMeal(meal) {
	title.textContent = meal.strMeal;
	img.src = meal.strMealThumb;
	category.textContent = meal.strCategory;
	link.href = meal.strSource;
	ingredientList.innerHTML = `<li class="list-group-item" id="ing-1">${meal.strIngredient1}</li><li class="list-group-item" id="ing-1">${meal.strIngredient2}</li><li class="list-group-item" id="ing-1">${meal.strIngredient3}</li>`;
}

// FAVORITE EVENT
favorite.addEventListener('click', function(e) {
	favoriteList.innerHTML += `<li class="list-group-item"><a href="${curMeal.strSource}">${curMeal.strMeal}</a> 
  </li>`;
	fList.push(`<li class="list-group-item"><a href="${curMeal.strSource}">${curMeal.strMeal}</a> 
</li>`);
});

// DELETE EVENT

function loadFavorites() {
	favoriteList.innerHTML = '';
	fList.forEach(function(meal) {
		favoriteList.innerHTML += meal;
	});
}
