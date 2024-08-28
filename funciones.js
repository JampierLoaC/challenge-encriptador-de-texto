const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encriptarBtn = document.getElementById('encriptarBtn');
const desencriptarBtn = document.getElementById('desencriptarBtn');
const copyBtn = document.getElementById('copyBtn');
const errorMessage = document.getElementById('error-message');

const reglasEncriptacion = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encriptar() {
    let texto = inputText.value.toLowerCase();
    let textoEncriptado = '';

    for (let i = 0; i < texto.length; i++) {
        if (reglasEncriptacion[texto[i]]) {
            textoEncriptado += reglasEncriptacion[texto[i]];
        } else {
            textoEncriptado += texto[i];
        }
    }

    outputText.value = textoEncriptado;
    errorMessage.style.display = 'none';
}

function desencriptar() {
    let texto = inputText.value.toLowerCase();
    let textoDesencriptado = '';

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'e' && texto.substring(i, i + 5) === 'enter') {
            textoDesencriptado += 'e';
            i += 4;
        } else if (texto[i] === 'i' && texto.substring(i, i + 4) === 'imes') {
            textoDesencriptado += 'i';
            i += 3;
        } else if (texto[i] === 'a' && texto.substring(i, i + 2) === 'ai') {
            textoDesencriptado += 'a';
            i += 1;
        } else if (texto[i] === 'o' && texto.substring(i, i + 4) === 'ober') {
            textoDesencriptado += 'o';
            i += 3;
        } else if (texto[i] === 'u' && texto.substring(i, i + 4) === 'ufat') {
            textoDesencriptado += 'u';
            i += 3;
        } else {
            textoDesencriptado += texto[i];
        }
    }

    outputText.value = textoDesencriptado;
    errorMessage.style.display = 'none';
}

function copiarTexto() {
    outputText.select();
    document.execCommand('copy');
}

encriptarBtn.addEventListener('click', encriptar);
desencriptarBtn.addEventListener('click', desencriptar);
copyBtn.addEventListener('click', copiarTexto);

inputText.addEventListener('input', () => {
    if (inputText.value.trim() === '') {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
});