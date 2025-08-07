const breakfastMenu = ["Pancakes", "Eggs Benedict", "Oatmeal", "Frittata"];
const mainCourseMenu = ["Steak", "Pasta", "Burger", "Salmon"];
const dessertMenu = ["Cake", "Ice Cream", "Pudding", "Fruit Salad"];
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenu
  .map((item, index) => `<p>Item ${index + 1}: ${item}</p>`)
  .join("\n");
let mainCourseItem = "";
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item}</p>\n`;
});
document.getElementById("mainCourseMenuItems").innerHTML = mainCourseItem;
let dessertItem = "";

for (let index = 0; index < dessertMenu.length; index++) {
  dessertItem += `<p>Item ${index + 1}: ${dessertMenu[index]}</p>\n`;
}

document.getElementById("dessertMenuItems").innerHTML = dessertItem;
