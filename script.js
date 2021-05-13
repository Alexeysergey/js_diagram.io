let columns = [];
let columns_max = 0;
let columns_min = 100;

let AmountOfColumns = Math.round(Math.random()*10);

for (i=0; i < AmountOfColumns; i++){
    columns[i] = Math.random()*100;
}

let ColumnsField = document.querySelector(".field");

for(i=0; i<columns.length; i++){
    let div = document.createElement('div');
    
    if(columns_max < columns[i]){
        columns_max = columns[i];
    }
    if(columns_min > columns[i]){
        columns_min = columns[i];
    }

    div.style.height = columns[i] + '%';
    div.style.width = '10%';
    div.style.border = '1px solid black';
    div.style.position = "absolute";
    div.style.bottom = "0";
    div.style.left = i + '0%';
    ColumnsField.append(div);
}

let div_max = document.createElement('div');

div_max.style.height = columns_max + '%';
div_max.style.width = "100%";
div_max.style.borderTop = "1px solid red";
div_max.style.position = 'absolute';
div_max.style.bottom = '0';
div_max.style.left = '0';
ColumnsField.append(div_max);
div_max.insertAdjacentHTML('afterbegin', '<p>MAX</p>');

let div_min = document.createElement('div');

div_min.style.height = columns_min+'%';
div_min.style.width = "100%";
div_min.style.borderTop = "1px solid red";

div_min.style.position = 'absolute';
div_min.style.bottom = '0';
div_min.style.left = '0';
ColumnsField.append(div_min);
div_min.insertAdjacentHTML('afterbegin', '<p>MIN</p>');

let AVG = document.createElement('div');

AVG.style.height = (columns_max+columns_min)/2 +'%';
AVG.style.width = "100%";
AVG.style.borderTop = "1px solid red";

AVG.style.position = 'absolute';
AVG.style.bottom = '0';
AVG.style.left = '0';
ColumnsField.append(AVG);
AVG.insertAdjacentHTML('afterbegin', '<p>AVG</p>');