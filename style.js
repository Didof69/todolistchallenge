const bouton = document.getElementById('btnAdd');
let tableauTache =[];
const toDoList = document.getElementById('toDoList');

bouton.addEventListener('click', (event) => {
    event.preventDefault();
    const tache = document.getElementById('newDetail').value;
    tableauTache.push({
        detail: `${tache}`,
        etat: `false`,
    });
    for (let i = 0; i < tableauTache.length; i++) {
        if (tableauTache.length === i+1) {
            toDoList.innerHTML += `<div class="tache">
    <input type="checkbox" id="checkbox${i}">
    <label for="checkbox${i}">${tableauTache[i].detail}</label>`;
        }     
    }
    console.log(tableauTache);
    const checkbox0 = document.getElementById("checkbox0");
    const checkbox1 = document.getElementById("checkbox1");
    console.log(checkbox0);
    console.log(checkbox1);
    checkbox0.addEventListener('change', () => {
        if (tableauTache[0].etat != `true`) {
          checkbox0.innerHTML ='<input type="checkbox" id="checkbox0" checked>';
          tableauTache[0].etat = `true`;
          console.log(tableauTache);
        } else {
            checkbox0.innerHTML =
              '<input type="checkbox" id="checkbox0">';
            tableauTache[0].etat = `false`;
            console.log(tableauTache);
        }
        
    })
    
})
   



