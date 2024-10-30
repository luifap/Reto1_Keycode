function desencriptar(mensajeEncriptado) {
    const clave = {
        '__': 'z',
        '?': 'a',
        '[': 'e',
        '\\': 'i', 
        '~': 'o',
        '+': 'u',
        '¬': 'ó',
        '(': ' ', 
        ')': ' ', 
        '^': 'm',
        '`': 'c',
        '-': 'h',
        ']': 'n',
        '=': 't',
        '{': 's',
        '%': 'b',
        '*': 'p',
        '/': 'l',
        '}': 'q',
        '¿': 'y',
        '$': 'r',
        '!': 'j',
        '¡': 'd',
        '#': 'v',
        ';': 'f',
    };

    let mensajeDesencriptado = '';
    
    for (let i = 0; i < mensajeEncriptado.length; i++) {
        if (mensajeEncriptado.substring(i, i + 2) === '__') {
            mensajeDesencriptado += 'z';
            i++; 
        } else {
            mensajeDesencriptado += clave[mensajeEncriptado[i]] || mensajeEncriptado[i];
        }
    }

    mensajeDesencriptado = mensajeDesencriptado.replace(/\s+/g, ' ').trim();

    return mensajeDesencriptado;
}

const mensajeEncriptado = '^[()`~^*/?`[()^+`-~()#[$()/~()%\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\{()*~¡[$[{()¡[()?=[]`\¬]()¿()[{;+[$__~()`~]=\]+~';
const mensajeDesencriptado = desencriptar(mensajeEncriptado);

console.log("Mensaje desencriptado:", mensajeDesencriptado);