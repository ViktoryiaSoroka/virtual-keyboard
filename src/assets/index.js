let keys = document.querySelectorAll('.keys');
const body = document.querySelector('body');


function initApplication() {
    createKeyboard();
    initKeyboard();
    initNightMode();
    changeColor();
}



function createKeyboard() {
    let containerDiv = document.createElement('div');
    containerDiv.className = 'container';
    let title = document.createElement('p');
    let text = document.createTextNode('Виртуальная клавиатура создана в операционной системе macOS');
    let inputText = document.createElement('textarea');
    inputText.className = 'text';
    let logo = document.createElement('a');
    logo.href = 'https://rs.school/';
    textNode = document.createTextNode("RSSchool");
    logo.classList = 'logo';

    logo.append(textNode);


    containerDiv.appendChild(inputText);
    body.appendChild(containerDiv);
    body.appendChild(title);
    title.appendChild(text);
    body.append(logo);


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

    let row0 = document.createElement('div');
    row0.className = 'row';
    keyboardKeys.appendChild(row0);


    let row1 = document.createElement('div');
    row1.className = 'row';

    keyboardKeys.appendChild(row1);

    let keys0 = '<div class="keys">&#96;</div>  <div class="keys">1</div> <div class="keys">2</div> <div class="keys">3</div> <div class="keys">4</div> <div class="keys">5</div> <div class="keys">6</div> <div class="keys">7</div> <div class="keys">8</div> <div class="keys">9</div> <div class="keys">0</div> <div class="keys">&#45;</div> <div class="keys">&#61;</div> <div class="keys delete_key">Delete</div>';
    row0.innerHTML = keys0;

    let keys1 = '<div class="keys tab_key">Tab</div>  <div class="keys">Q</div> <div class="keys">W</div> <div class="keys">E</div> <div class="keys">R</div> <div class="keys">T</div> <div class="keys">Y</div> <div class="keys">U</div> <div class="keys">I</div> <div class="keys">O</div> <div class="keys">P</div> <div class="keys">&#65339;</div> <div class="keys">&#65341;</div> <div class="keys slash_key">&bsol;</div>';
    row1.innerHTML = keys1;

    let row2 = document.createElement('div');
    row2.className = 'row';
    keyboardKeys.appendChild(row2);

    let keys2 = '<div class="keys caps_lock_key">Caps lock</div>  <div class="keys">A</div> <div class="keys">S</div> <div class="keys">D</div> <div class="keys">F</div> <div class="keys">G</div> <div class="keys">H</div> <div class="keys">J</div> <div class="keys">K</div> <div class="keys">L</div> <div class="keys">&semi;</div> <div class="keys">&#39;</div> <div class="keys enter_key">Enter</div>';
    row2.innerHTML = keys2;


    let row3 = document.createElement('div');
    row3.className = 'row';
    keyboardKeys.appendChild(row3);

    let keys3 = '<div class="keys shift_key shift_left">Shift</div>  <div class="keys">Z</div> <div class="keys">X</div> <div class="keys">C</div> <div class="keys">V</div> <div class="keys">B</div> <div class="keys">N</div> <div class="keys">M</div> <div class="keys">&#44;</div> <div class="keys">&#46;</div> <div class="keys">&#47;</div> <div class="keys">&#9650;</div> <div class="keys shift_key shift_right">Shift</div>';
    row3.innerHTML = keys3;

    let row4 = document.createElement('div');
    row4.className = 'row';
    keyboardKeys.appendChild(row4);

    let keys4 = '<div class="keys">Fn</div> <div class="keys">Control</div> <div class="keys">Option</div> <div class="keys command">Command</div> <div class="keys space_key"></div> <div class="keys command">Command</div> <div class="keys">Option</div> <div class="keys arrow">&#9664;</div> <div class="keys arrow">&#9654;</div>';
    row4.innerHTML = keys4;

    let row5 = document.createElement('div');
    row5.className = 'row';
    keyboardKeys.appendChild(row5);

};



function initKeyboard() {
    let keyboard = document.querySelector('.keyboard_wrapp');
    let keys = document.querySelectorAll('.keys');
    let spaceKey = document.querySelector('.space_key');
    let shiftLeft = document.querySelector('.shift_left');
    let shiftRight = document.querySelector('.shift_right');
    let capsLockKey = document.querySelector('.caps_lock_key');
    let deleteKey = document.querySelector('.delete_key');


    for (let i = 0; i < keys.length; i++) {
        keys[i].setAttribute('keyname', keys[i].innerText);
        keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
    }

    window.addEventListener('keydown', (e) => {
        for (let i = 0; i < keys.length; i++) {
            if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName'))
                keys[i].classList.toggle('active');
        };
        if (e.code == 'Space') {
            spaceKey.classList.toggle('active');
        }
        if (e.code == 'ShiftLeft') {
            shiftRight.classList.toggle('active');
        }
        if (e.code == 'ShiftRight') {
            shiftLeft.classList.toggle('active');
        }
        if (e.code == 'CapsLock') {
            capsLockKey.classList.toggle('active');
        }
        if (e.code == 'Delete') {
            deleteKey.classList.toggle('active');
        }
    });

    window.addEventListener('keyup', (e) => {
        for (let i = 0; i < keys.length; i++) {
            if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName'))
                keys[i].classList.toggle('remove');

        }
        if (e.code == 'Space') {
            spaceKey.classList.toggle('remove');
        }
        if (e.code == 'CapsLock') {
            capsLockKey.classList.toggle('remove');
        }
        if (e.code == 'Delete') {
            deleteKey.classList.toggle('remove');
        }
        if (e.code == 'ShiftLeft') {
            shiftRight.classList.toggle('remove');
        }
        if (e.code == 'ShiftRight') {
            shiftLeft.classList.toggle('remove');
        }

    });

    keyboard.addEventListener('mousedown', () => {
        for (let i = 0; i < keys.length; i++) {
            keys[i].classList.toggle('active');
            keys[i].classList.toggle('remove');
        }
    });

    keyboard.addEventListener('mouseup', () => {
        for (let i = 0; i < keys.length; i++) {
            keys[i].classList.toggle('remove');
            keys[i].classList.toggle('active');

        }
    });




};



function initNightMode() {
    let keys = document.querySelectorAll('.keys');
    let nightMode = document.querySelector('.night_mode');
    let toggleCircle = document.querySelector('.toggle_circle');
    let keyBoardWrapp = document.querySelector('.keyboard_wrapp');
    let textInput = document.querySelector('.text');
    let changeLightColor = document.querySelector('.change_light_color');


    nightMode.addEventListener('click', () => {
        toggleCircle.classList.toggle('active');
        body.classList.toggle('active');
        nightMode.classList.toggle('active');
        keyBoardWrapp.classList.toggle('active');
        textInput.classList.toggle('active');
        changeLightColor.classList.toggle('active');

        for (let i = 0; i < keys.length; i++) {
            keys[i].classList.toggle('keys_night');
        }
    });
}



function changeColor() {
    let colorsInput = document.querySelector('.colors_input');
    let keyboardLight = document.querySelector('.keyboard_light');

    colorsInput.addEventListener('input', () => {
        for (let i = 0; i < keys.length; i++) {
            keys[i].style.color = colorsInput.value;
        }
        keyboardLight.style.background = colorsInput.value;
    });
}



(function () {
    initApplication();
}());