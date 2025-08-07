const breakfastMenu = [
  ["Pancakes", 12],
  ["Eggs Benedict", 23.45],
  ["Oatmeal", 21.09],
  ["Frittata", 15],
];
const currency = "€";
const dessertMenu = [
  ["Cake", 12.34],
  ["Ice Cream", 6.66],
  ["Pudding", 8.88],
  ["Fruit Salad", 10.01],
];
const mainCourseMenu = [
  ["Steak", 22.22],
  ["Pasta", 13.57],
  ["Burger", 15.51],
  ["Salmon", 11.11],
];
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenu
  .map(
    (item, index) =>
      `<p>Item ${index + 1}: ${item[0]} (${currency}${item[1]})</p>`,
  )
  .join("\n");
let mainCourseItem = "";
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item[0]} (${currency}${item[1]})</p>\n`;
});
document.getElementById("mainCourseMenuItems").innerHTML = mainCourseItem;
let dessertItem = "";

for (let index = 0; index < dessertMenu.length; index++) {
  const item = dessertMenu[index];
  dessertItem += `<p>Item ${index + 1}: ${item[0]} (${currency}${item[1]})</p>\n`;
}

document.getElementById("dessertMenuItems").innerHTML = dessertItem;
