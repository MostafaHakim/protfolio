document.getElementById('home').addEventListener('click', function(event){

    let showMain = document.getElementById('hiddenPartMain');
    let showMainWom = document.getElementById('hiddenPartMainWom');
    let showBlockSer = document.getElementById('serviceBlok');
    showMain.style.display = 'block'
    showMainWom.style.display = 'block'
    showBlockSer.style.display = 'none';

})

document.getElementById('serviseProvide').addEventListener('click', function(event){

    let showBlockSer = document.getElementById('serviceBlok');
    let showMain = document.getElementById('hiddenPartMain');
    let showMainWom = document.getElementById('hiddenPartMainWom');
    showBlockSer.style.display = 'block';
    showMain.style.display = 'none'
    showMainWom.style.display = 'none'

})

