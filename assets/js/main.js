const btnEncrypt = document.getElementById('btnEncrypt'); 
const btnDecrypt = document.getElementById('btnDecrypt');
const btnCopy = document.getElementById('btnCopy');
const textarea = document.getElementById('text-input')

window.addEventListener('resize', function () {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
})

textarea.addEventListener('input', function (e) {
    const conteudo = textarea.value;
    const regex = new RegExp(/[a-z0-9\s!]/)
    if(!regex.test(e.data.toLowerCase())){
        textarea.value = conteudo.slice(0, -1);
    } else   {
        textarea.value = conteudo.toLowerCase()
    }

})

textarea.addEventListener('paste', function (e) {
    e.preventDefault()
    navigator.clipboard.readText().then(texto => {
        const conteudo = texto.toLowerCase();
        const regex = new RegExp(/^[a-z0-9\s!]+$/gm)
        if(!conteudo.match(regex)){ 
            textarea.value = conteudo.replace(/[^a-z0-9\s!]/g, '');
        } else {
            textarea.value = conteudo
        }
    })
    
})

btnEncrypt.addEventListener('click', function () {
    const text = textarea.value;
    const encryptedText = encrypt(text);
    document.querySelector('.text-output > p').innerHTML = encryptedText;
    document.querySelector('.empty').classList.add('hidden');
    document.querySelector('.text-output').classList.remove('hidden');
})

btnDecrypt.addEventListener('click', function () {
    const text = textarea.value;
    const decryptedText = decrypt(text);
    document.querySelector('.text-output > p').innerHTML = decryptedText;
    document.querySelector('.empty').classList.add('hidden');
    document.querySelector('.text-output').classList.remove('hidden');
})

btnCopy.addEventListener('click', function () {
    navigator.clipboard.writeText(document.querySelector('.text-output > p').innerHTML);
})

function encrypt(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}
