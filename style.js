const bouton = document.getElementById("btnAdd");
let tableauTache = [];
const toDoList = document.getElementById("toDoList");
const ongletAll =
    
bouton.addEventListener("click", (event) => {
  event.preventDefault();
  const tache = document.getElementById("newDetail").value;
  tableauTache.push({
    detail: `${tache}`,
    etat: false,
  });
  for (let i = tableauTache.length - 1; i < tableauTache.length; i++) {
    toDoList.innerHTML += `<div class="tache">
    <input type="checkbox" id="checkbox${i}">
    <label for="checkbox${i}">${tableauTache[i].detail}</label>
    </div>`;
  }
  MiseAJourTableau();
});

function MiseAJourTableau() {
  for (let i = 0; i < tableauTache.length; i++) {
    let checkbox = document.getElementById(`checkbox${i}`);
    checkbox.addEventListener("change", () => {
      if (tableauTache[i].etat != true) {
          checkbox.setAttribute('checked', true);
        tableauTache[i].etat = true;
      } else {
        checkbox.setAttribute('checked', false);
        tableauTache[i].etat = false;
      }
    });
  }
}
