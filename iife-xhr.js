function showCarnivores (carnivores) {
	var contentEmt1 = document.getElementById("content1");
  var contentInDOM = "";
  contentInDOM += "<ul>Carnivores:";
  for (var i = 0; i < carnivores.carnivores.length; i++) {
    contentInDOM += `<li>${carnivores.carnivores[i]}</li>`;
  }
  contentInDOM += "</ul>";
  contentEmt1.innerHTML = contentInDOM;
}

function showHerbivores (herbivores) {
	var contentEmt2 = document.getElementById("content2");
  var contentInDOM = "";
  contentInDOM += "<ul>Herbivores:";
  for (var i = 0; i < herbivores.herbivores.length; i++) {
    contentInDOM += `<li>${herbivores.herbivores[i]}</li>`;
  }
  contentInDOM += "</ul>";
  contentEmt2.innerHTML = contentInDOM;

}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);
