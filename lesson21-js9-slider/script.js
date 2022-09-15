const items = document.querySelectorAll('img');
const itemsCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

function rollNextItem(){
    items[count].classList.remove('active');
    // [1 (1), 1 (2), 1(3)]
    if(count < itemsCount - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active');
    console.log(count);
}

function rollPreviousItem(){
    items[count].classList.remove('active');
    // [1 (1), 1 (2), 1(3)]
    if(count > 0){
        count--;
    } else {
        count = itemsCount - 1;
    }

    items[count].classList.add('active');
    console.log(count);
}


// function pressKey(e){
//     e = e || window.event;

//     if(e.keyCode == '37') {
//         rollPreviousItem();
//     } else if(e.keyCode == '39'){
//         rollNextItem();
//     }
// }

function onWheel(e){
    e = e || window.event;

    if (e.deltaY < 0) {
        rollPreviousItem();
    }
    else if (e.deltaY > 0) {
        rollNextItem();
    }
}

nextItem.addEventListener('click', rollNextItem);
previousItem.addEventListener('click', rollPreviousItem);

// document.addEventListener('keydown', pressKey)


document.addEventListener('mousewheel', onWheel)