const app = document.querySelector(".app");


let index = 0;

const isChetnoe = num => num % 2 == 1;

const colorWhite = "bg-white";
const colorBlack = "bg-black";

while (index < 8) {
    app.innerHTML += `<div id="${index}-row" class=" row"></div>`;
    index++
}

let row_index = 0

while (row_index < 8){
    const someRow = document.getElementById(`${row_index}-row`);
    
    if (isChetnoe(row_index)){
        let cell_index = 0;

        while (cell_index < 8){
            if (isChetnoe(cell_index)) {
                someRow.innerHTML += `<div id="${cell_index}_${row_index}" class="cell ${colorWhite}"></div>`;
            } else {
                someRow.innerHTML += `<div id="${cell_index}_${row_index}" class="cell ${colorBlack}"></div>`;
            }
            cell_index++
        }
    } else {
        let cell_index = 0;

        while (cell_index < 8){
            if (isChetnoe(cell_index)) {
                someRow.innerHTML += `<div id="${cell_index}_${row_index}" class="cell ${colorBlack}"></div>`;
            } else {
                someRow.innerHTML += `<div id="${cell_index}_${row_index}" class="cell ${colorWhite}"></div>`;
            }
            cell_index++
        }
    }
    
    
    row_index++
}




