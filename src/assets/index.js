const keyboard = [];

function initKeyboard() {

    //  document.onkeydown = function(event) {
    //      keyboard.push(event.code);
    //      console.log(keyboard);
    //  }
};

initKeyboard();

//function init() {
let out = '';
//    for(let i = 0; i < keyboard.length; i++) {
//        out += '<div class="key">' + String.fromCharCode(keyboard[i]) + '</div>';
//    }
//    document.querySelector('.row').innerHTML = out;
//};

//init();




function createKeyboard() {

    const body = document.querySelector('body');

    let containerDiv = document.createElement('div');
    containerDiv.className = 'container';
    let title = document.createElement('p');
    let text = document.createTextNode('Виртуальная клавиатура создана в операционной системе macOS');
    let inputText = document.createElement('input');
    inputText.className = 'text';
    inputText.type = 'text';

    containerDiv.appendChild(inputText);
    body.appendChild(containerDiv);
    body.appendChild(title);
    title.appendChild(text);

    let keyboardWrapp = document.createElement('div');
    keyboardWrapp.className = 'keyboard_wrapp';

    let changeLightColor = document.createElement('div');
    changeLightColor.className = 'change_light_color';

    let nightMode = document.createElement('div');
    nightMode.className = 'night_mode';

    containerDiv.appendChild(nightMode);
    containerDiv.appendChild(changeLightColor);
    containerDiv.appendChild(keyboardWrapp);

    let toggleCircle = document.createElement('div');
    toggleCircle.className = 'toggle_circle';

    nightMode.appendChild(toggleCircle);


    let inputColor = document.createElement('input');
    inputColor.className = 'colors_input';
    inputColor.type = 'color';

    changeLightColor.appendChild(inputColor);

    let keyboardKeys = document.createElement('div');

    keyboardWrapp.appendChild(keyboardKeys);

    let row1 = document.createElement('div');
    row1.className = 'row';

    //let l = ['', '', '', '', ''];
    //for (let div of l) {
    //    let item = document.createElement('div');
    //    item.innerHTML = div;
    //    keyboardKeys.append(item);
    //    item.className = 'row';
    //}

    keyboardKeys.appendChild(row1);


    let list1 = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '|'];
    for (let div of list1) {
        let keys = document.createElement('div');
        keys.innerHTML = div;
        row1.appendChild(keys);
        keys.className = 'keys';
    }


    let row2 = document.createElement('div');
    row2.className = 'row';
    keyboardKeys.appendChild(row2);

    let list2 = ['Caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', ':', '"', 'Return'];
    for (let div of list2) {
        let keys = document.createElement('div');
        keys.innerHTML = div;
        row2.appendChild(keys);
        keys.className = 'keys';
    }

    let row3 = document.createElement('div');
    row3.className = 'row';
    keyboardKeys.appendChild(row3);

    let row4 = document.createElement('div');
    row4.className = 'row';
    keyboardKeys.appendChild(row4);

    let row5 = document.createElement('div');
    row5.className = 'row';
    keyboardKeys.appendChild(row5);





};

createKeyboard();