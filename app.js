// GLOBAL

let gen = document.getElementById('generate');
let title = document.getElementById('meal-title');
let img = document.getElementById('meal-img');
let category = document.getElementById('category');
let ingredientList = document.getElementById('ingredients');
let link = document.getElementById('meal-link');

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
