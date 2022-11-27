
let open = true;
const largura = '450px';
const marginReal ='10px';
let noticiaEl = document.querySelectorAll('.noticias');
let n = '70%';
let n2 = '90%';
let img = document.querySelector('#mostraTabela');
img.addEventListener('click', (e) =>{
    if(open){
        let tabEl = document.querySelector('#tabelas');
        tabEl.style.marginLeft = `-${largura}`;
        open = false;
        img.setAttribute('src','/imgs/iconmonstr-eye-lined.svg');
        for(let i = 0; i < noticiaEl.length; i++){
         noticiaEl[i].style.width = `${n}`;
        }
    }
    else {
        let tabEl = document.querySelector('#tabelas');
        tabEl.style.marginLeft = `${marginReal}`;
        open = true;
        img.setAttribute('src','/imgs/iconmonstr-eye-filled.svg');
        for(let i = 0; i < noticiaEl.length; i++){
            noticiaEl[i].style.width = `${n2}`;
           }
    }
})