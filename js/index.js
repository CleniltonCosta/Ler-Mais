var button = document.getElementById('btn');

button.addEventListener('click', function(){
    var card = document.querySelector('.card');
    card.classList.toggle('active');
});
