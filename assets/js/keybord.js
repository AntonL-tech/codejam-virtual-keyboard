
let textarea =  document.createElement('textarea'),
    keybord = document.createElement('div'),
    row = [],
    codes = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal","Backspace","Tab","KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash","Delete","CapsLock","KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter","ShiftLeft","KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash","ArrowUp","ShiftRight","ControlLeft","MetaLeft","AltLeft","Space","AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"],
    keybordRowRu1 = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61],
    keybordRowRuHigher1 = [1025, 33, 34, 8470, 59, 37, 58, 63, 42, 40, 41, 95, 43],
    keybordRowEn1 = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61],
    keybordRowEnHigher1 = [192, 33, 64, 35, 36, 37, 94, 38, 42, 40, 41, 95, 43],
    keybordRowRu2 = [,1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92],
    keybordRowRuHigher2 = [,1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066, 47],
    keybordRowEn2 = [,113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92],
    keybordRowEnHigher2 = [,81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 123, 125, 124],
    keybordRowRu3 = [,1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101],
    keybordRowRuHigher3 = [,1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069],
    keybordRowEn3 = [,97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39],
    keybordRowEnHigher3 = [,65, 83, 68, 70, 71, 72, 74, 75, 76, 58, 34],
    keybordRowRu4 = [16,1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46],
    keybordRowRuHigher4 = [16,1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 44],
    keybordRowEn4 = [16,122, 120, 99, 118, 98, 110, 109, 44, 46, 47],
    keybordRowEnHigher4 = [16,90, 88, 67, 86, 66, 78, 77, 60, 62, 63];

document.onkeypress = function(event) {
    event.preventDefault();
    console.log(event.key);
    console.log(event.code);
    console.log(keybordRowEnHigher4);
};

// textarea.setAttribute('readonly', 'readonly');
document.body.appendChild(textarea);
textarea.classList.add('textarea');
document.body.appendChild(keybord);
keybord.classList.add('keybord');


for (let i = 0; i < 5; i++) {
    row[i] = document.createElement('div');
    keybord.appendChild(row[i]);
    row[i].classList.add('row');
}

// First ROW 
for (let i = 0; i < keybordRowRu1.length; i++) {
    row[0].innerHTML += '<div class="key"></div>';
    row[0].querySelectorAll('.key')[i].innerHTML = '<span class="rus hidden"></span>' + '<span class="eng "></span>';
    row[0].querySelectorAll('.rus')[i].innerHTML = '<span class="caseDown hidden">'+String.fromCharCode(keybordRowRu1[i])+'</span>' + '<span class="caseUp hidden">'+String.fromCharCode(keybordRowRuHigher1[i])+'</span>';
    row[0].querySelectorAll('.eng')[i].innerHTML = '<span class="caseDown show">'+String.fromCharCode(keybordRowEn1[i])+'</span>' + '<span class="caseUp hidden">'+String.fromCharCode(keybordRowEnHigher1[i])+'</span>';
}
row[0].innerHTML += '<div class="key">Backspace</div>';


// SECOND ROW
for (let i = 0; i < keybordRowRu2.length; i++) {
    row[1].innerHTML += '<div class="key"></div>';
    row[1].querySelectorAll('.key')[i].innerHTML = '<span class="rus hidden"></span>' + '<span class="eng "></span>';
    row[1].querySelectorAll('.rus')[i].innerHTML = '<span class="caseDown hidden">'+String.fromCharCode(keybordRowRu2[i])+'</span>' + '<span class="caseUp hidden">'+String.fromCharCode(keybordRowRuHigher2[i])+'</span>';
    row[1].querySelectorAll('.eng')[i].innerHTML = '<span class="caseDown show">'+String.fromCharCode(keybordRowEn2[i])+'</span>' + '<span class="caseUp hidden">'+String.fromCharCode(keybordRowEnHigher2[i])+'</span>';
}

row[1].innerHTML += '<div class="key">Del</div>';
row[1].querySelector('.key').innerHTML = 'Tab';


// THIRD ROW

for (let i = 0; i < keybordRowRu3.length; i++) {
    row[2].innerHTML += '<div class="key"></div>';
    row[2].querySelectorAll('.key')[i].innerHTML = '<span class="rus hidden"></span>' + '<span class="eng "></span>';
    row[2].querySelectorAll('.rus')[i].innerHTML = '<span class="caseDown hidden">'+String.fromCharCode(keybordRowRu3[i])+'</span>' + '<span class="caseUp hidden">'+String.fromCharCode(keybordRowRuHigher3[i])+'</span>';
    row[2].querySelectorAll('.eng')[i].innerHTML = '<span class="caseDown show">'+String.fromCharCode(keybordRowEn3[i])+'</span>' + '<span class="caseUp hidden">'+String.fromCharCode(keybordRowEnHigher3[i])+'</span>';
}

row[2].innerHTML += '<div class="key">Enter</div>';
row[2].querySelector('.key').innerHTML = 'CapsLock';

// ROW FOUR 

for (let i = 0; i < keybordRowRu4.length; i++) {
    row[3].innerHTML += '<div class="key"></div>';
    row[3].querySelectorAll('.key')[i].innerHTML = '<span class="rus hidden"></span>' + '<span class="eng "></span>';
    row[3].querySelectorAll('.rus')[i].innerHTML = '<span class="caseDown hidden">'+String.fromCharCode(keybordRowRu4[i])+'</span>' + '<span class="caseUp hidden">'+String.fromCharCode(keybordRowRuHigher4[i])+'</span>';
    row[3].querySelectorAll('.eng')[i].innerHTML = '<span class="caseDown show">'+String.fromCharCode(keybordRowEn4[i])+'</span>' + '<span class="caseUp hidden">'+String.fromCharCode(keybordRowEnHigher4[i])+'</span>';
}

row[3].innerHTML += '<div class="key">▲</div>';
row[3].innerHTML += '<div class="key">Shift</div>';
row[3].querySelector('.key').innerHTML = 'Shift';



// Fifth Row 

row[4].innerHTML += '<div class="key">Ctrl</div>' + '<div class="key">Win</div>' + '<div class="key">Alt</div>' + '<div class="key"></div>' + '<div class="key">Alt</div>' + '<div class="key">◄</div>' + '<div class="key">▼</div>' + '<div class="key">►</div>' + '<div class="key">Ctrl</div>';



// Keybord

let keys = document.querySelectorAll('.key'),
    rusBtns = document.querySelectorAll('.rus'),
    engBtns = document.querySelectorAll('.eng'),
    caseUPRus = document.querySelectorAll('span.rus > .caseUp'),
    caseDownRus = document.querySelectorAll('span.rus > .caseDown'),
    caseUPEng = document.querySelectorAll('span.eng > .caseUp'),
    caseDownEng = document.querySelectorAll('span.eng > .caseDown'),
    capsLock = document.getElementsByClassName('CapsLock'),
    backspace = document.getElementsByClassName('Backspace'),
    space = document.getElementsByClassName('Space'),
    tab = document.getElementsByClassName('Tab'),
    enter = document.getElementsByClassName('Enter'),
    shiftLeft = document.getElementsByClassName('ShiftLeft'),
    shiftRight = document.getElementsByClassName('ShiftRight'),
    isHighRegister = false,
    isRusLang = false,
    flag = true,
    checkCtrl = false;

keys.forEach((el,i) => {
    el.classList.add(codes[i]);
});



document.addEventListener('keydown', function(event) {
    if (event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'ArrowUp' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' && event.key !== 'ArrowDown') {
        event.preventDefault();
    }
    console.log(event);
    document.querySelector('.' + event.code + '').classList.add('active');
    if (event.key.length === 1 && event.key !== ' ') {
        textarea.value += document.querySelector('.' + event.code + '> span > span.show').textContent;
    }

    switch (event.key) {
        case 'CapsLock':
            isCapselock();
        break;
        // case 'Backspace':
        //     isBackspace();
        // break;
        case ' ': 
            isSpace();
        break;
        case 'Tab': 
            isTab();
        break;
        case 'Shift':
            if (flag) {
                flag = false;
                isShift();
            }
        break;
        case 'Enter': 
            isEnter();
        break;
        case 'Control': 
            checkCtrl = true;
        break;
    }
    




    document.onkeyup = (event) => {

        if (event.key === 'Shift') {
            flag = true;
            isShift();
            keys.forEach(element => {
                element.classList.remove('active');
            });
        } else if(event.key === 'Alt' && checkCtrl) {
            changeLanguage();
            checkCtrl = false;
        }


        keys.forEach(element => {
            if (!element.classList.contains('ShiftLeft')) {
                element.classList.remove('active');
            }
        });
    };
});


keys.forEach((e) => {
    e.addEventListener('click', function(event) {
        if (event.target.tagName === 'SPAN') {
            console.log('event :' + event.target);
            textarea.value += event.target.textContent;
        }
    });
});


// Change Lang



// Enter
enter[0].addEventListener('click', isEnter);


// CAPSLOCK btn

capsLock[0].addEventListener('click', isCapselock);


// Backspace

backspace[0].addEventListener('click', isBackspace);


// Space 

space[0].addEventListener('click', isSpace);

// Tab
tab[0].addEventListener('click', isTab);


shiftLeft[0].addEventListener('mousedown', isShift);
shiftLeft[0].addEventListener('mouseup', isShift);
shiftRight[0].addEventListener('mousedown', isShift);
shiftRight[0].addEventListener('mouseup', isShift);

function isEnter() {
    textarea.value += '\n';
}


function isTab() {
    textarea.value += '    ';
}

function isSpace() {
    textarea.value += ' ';
}

function isBackspace() {
    textarea.value = textarea.value.substring(textarea.value[0], textarea.value.length - 1);
}




function isCapselock() {
    capsLock[0].classList.toggle('CapsLock-active');
    if (isRusLang === true) {
        if (isHighRegister === false) {
            caseDownRus.forEach(e => e.classList.add('hidden'));
            caseDownRus.forEach(e => e.classList.remove('show'));
            caseUPRus.forEach(e => e.classList.remove('hidden'));
            caseUPRus.forEach(e => e.classList.add('show'));
            isHighRegister = true;
        } else {
            caseDownRus.forEach(e => e.classList.remove('hidden'));
            caseDownRus.forEach(e => e.classList.add('show'));
            caseUPRus.forEach(e => e.classList.add('hidden'));
            caseUPRus.forEach(e => e.classList.remove('show'));
            isHighRegister = false;
        }
    } else {
        if (isHighRegister === false) {
            caseDownEng.forEach(e => e.classList.add('hidden'));
            caseDownEng.forEach(e => e.classList.remove('show'));
            caseUPEng.forEach(e => e.classList.remove('hidden'));
            caseUPEng.forEach(e => e.classList.add('show'));
            isHighRegister = true;
        } else {
            caseDownEng.forEach(e => e.classList.remove('hidden'));
            caseDownEng.forEach(e => e.classList.add('show'));
            caseUPEng.forEach(e => e.classList.add('hidden'));
            caseUPEng.forEach(e => e.classList.remove('show'));
            isHighRegister = false;
        }
    } 
}


function isShift() {
    if (isRusLang === true) {
        if (isHighRegister === false) {
            caseDownRus.forEach(e => e.classList.add('hidden'));
            caseDownRus.forEach(e => e.classList.remove('show'));
            caseUPRus.forEach(e => e.classList.remove('hidden'));
            caseUPRus.forEach(e => e.classList.add('show'));
            isHighRegister = true;
        } else {
            caseDownRus.forEach(e => e.classList.remove('hidden'));
            caseDownRus.forEach(e => e.classList.add('show'));
            caseUPRus.forEach(e => e.classList.add('hidden'));
            caseUPRus.forEach(e => e.classList.remove('show'));
            isHighRegister = false;
        }
    } else {
        if (isHighRegister === false) {
            caseDownEng.forEach(e => e.classList.add('hidden'));
            caseDownEng.forEach(e => e.classList.remove('show'));
            caseUPEng.forEach(e => e.classList.remove('hidden'));
            caseUPEng.forEach(e => e.classList.add('show'));
            isHighRegister = true;
        } else {
            caseDownEng.forEach(e => e.classList.remove('hidden'));
            caseDownEng.forEach(e => e.classList.add('show'));
            caseUPEng.forEach(e => e.classList.add('hidden'));
            caseUPEng.forEach(e => e.classList.remove('show'));
            isHighRegister = false;
        }
    } 
}


function changeLanguage() {
    if (isRusLang === true) {
        rusBtns.forEach(e => {
            e.classList.add('hidden');
        });
        caseUPRus.forEach(e => {
            e.classList.add('hidden');
            e.classList.remove('show');
        })
        caseDownRus.forEach(e => {
            e.classList.add('hidden');
            e.classList.remove('show');
        })
        engBtns.forEach(e => {
            e.classList.remove('hidden');
        });
        caseUPEng.forEach(e => {
            e.classList.remove('hidden');
        });
        caseDownEng.forEach(e => {
            e.classList.remove('hidden');
        });
        isRusLang = false;
        if (isHighRegister) {
            caseDownEng.forEach(e => e.classList.remove('show'));
            caseDownEng.forEach(e => e.classList.add('hidden'));
            caseUPEng.forEach(e => e.classList.add('show'));
            caseUPEng.forEach(e => e.classList.remove('hidden'));
            isHighRegister = true;
        } else {
            caseDownEng.forEach(e => e.classList.remove('hidden'));
            caseDownEng.forEach(e => e.classList.add('show'));
            caseUPEng.forEach(e => e.classList.add('hidden'));
            caseUPEng.forEach(e => e.classList.remove('show'));
            isHighRegister = false;
        }
    } else {
        rusBtns.forEach(e => {
            e.classList.remove('hidden');
        });
        caseUPRus.forEach(e => {
            e.classList.remove('hidden');
        })
        caseDownRus.forEach(e => {
            e.classList.remove('hidden');
        })
        engBtns.forEach(e => {
            e.classList.add('hidden');

        });
        caseUPEng.forEach(e => {
            e.classList.add('hidden');
            e.classList.remove('show');
        });
        caseDownEng.forEach(e => {
            e.classList.add('hidden');
            e.classList.remove('show');
        });
        isRusLang = true;
        if (isHighRegister) {
            caseDownRus.forEach(e => e.classList.add('hidden'));
            caseDownRus.forEach(e => e.classList.remove('show'));
            caseUPRus.forEach(e => e.classList.remove('hidden'));
            caseUPRus.forEach(e => e.classList.add('show'));
            isHighRegister = true;
        } else {
            caseDownRus.forEach(e => e.classList.remove('hidden'));
            caseDownRus.forEach(e => e.classList.add('show'));
            caseUPRus.forEach(e => e.classList.add('hidden'));
            caseUPRus.forEach(e => e.classList.remove('show'));
            isHighRegister = false;
        }
    }
}

