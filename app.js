

let shareBtn = document.getElementById('shareBtn');
let shareActions = document.querySelector('.card__share-action');
let body = document.querySelector('.wrapper');

shareBtn.addEventListener('click', function (e) {
    e.preventDefault();
    shareActions.classList.toggle('show');

})
window.addEventListener('click', function (event){
    if (!shareBtn.contains(event.target)){
        shareActions.classList.remove('show');
    }
    return false;
})
