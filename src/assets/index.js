const keyboard = [];

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

    let keyboardLight = document.createElement('div');
    keyboardWrapp.appendChild(keyboardLight);
    keyboardLight.className = 'keyboard_light';

    let keyboardKeys = document.createElement('div');

    keyboardWrapp.appendChild(keyboardKeys);
    keyboardKeys.className = 'keyboard_keys';






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

    let tab = document.createElement('div');
    tab.className = 'keys';
    tab.classList.add('tab_key');
    row1.appendChild(tab);
    tab.textContent = 'Tab';

    let list1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '|'];
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


function initKeyboard() {
    let keys = document.querySelectorAll('.keys');
    let spaceKey = document.querySelector('.space_key');
    let shiftLeft = document.querySelector('.shift_left');
    let shiftRight = document.querySelector('.shift_right');
    let capsLockKey = document.querySelector('.caps_lock_key');








    for (let i = 0; i < keys.length; i++) {
        keys[i].setAttribute('keyname', keys[i].innerText);
        keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
    }

    window.addEventListener('keydown', (e) => {
        for (let i = 0; i < keys.length; i++) {
            if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName'))
                //keys[i].classList.add('active');
                console.log(keys[i]);
        };
        if (e.code == 'Space') {
            spaceKey.classList.add('active');
        }
        if (e.code == 'ShiftLeft') {
            shiftRight.classList.remove('active');
        }
        if (e.code == 'ShiftRight') {
            shiftLeft.classList.remove('active');
        }
        if (e.code == 'CapsLock') {
            capsLockKey.classList.toggle('active');
        }
    });

    window.addEventListener('keyup', (e) => {
        for (let i = 0; i < keys.length; i++) {
            if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName'))
                keys[i].classList.remove('active');
            keys[i].classList.add('remove');
        }
        if (e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if (e.code == 'ShiftLeft') {
            shiftRight.classList.remove('active');
            shiftRight.classList.add('remove');
        }

        if (e.code == 'ShiftRight') {
            shiftLeft.classList.remove('active');
            shiftLeft.classList.add('remove');
        }

        //    setTimeout(() => {
        //        keys[i].classList.remove('remove');
        //    },200)


    });


};

initKeyboard();

function initNightMode() {
    let keys = document.querySelectorAll('.keys');
    let nightMode = document.querySelector('.night_mode');
    let toggleCircle = document.querySelector('.toggle_circle');
    let body = document.querySelector('body');
    let keyboardWrapp = document.querySelector('.keyboard_wrapp');
    let textInput = document.querySelector('.text');
    let changeLightColor = document.querySelector('.change_light_color');


    nightMode.addEventListener('click', () => {
        toggleCircle.classList.toggle('active');
        body.classList.toggle('active');
        nightMode.classList.toggle('active');
        keyboardWrapp.classList.toggle('active');
        textInput.classList.toggle('active');
        changeLightColor.classList.toggle('active');

        for (let i = 0; i < keys.length; i++) {
            keys[i].classList.toggle('keys_night');
        }
    });
}

initNightMode();

function changeColor() {
    let keys = document.querySelectorAll('.keys');
    let colorsInput = document.querySelector('.colors_input');
    let keyboardLight = document.querySelector('.keyboard_light');

    colorsInput.addEventListener('input', () => {
        for (let i = 0; i < keys.length; i++) {
            keys[i].style.color = colorsInput.value;
        }
        keyboardLight.style.background = colorsInput.value;
    });
}

changeColor();