'use strict'

initGallery();

function initGallery() {
    console.log('initGallery');
    renderImgs()
}

function goToGallery() {
    document.querySelector('.gallery').classList.remove('hidden');
    document.querySelector('.editor').classList.add('hidden');

}
function goToAbout() {
    document.querySelector('.gallery').classList.add('hidden');
    document.querySelector('.editor').classList.add('hidden');
    document.querySelector('.about').classList.remove('hidden');

}

function renderImgs() {
    var str = ''
    for (var i = 1; i <= 18; i++) {
        str += ` <div class="box box${i}"><img class="grid-img img-${i}"id=${i} src="./meme-imgs(square)/${i}.jpg" onclick="setImg(this)">
    </div>`
    }
    document.querySelector('.grid-container').innerHTML = str;
}