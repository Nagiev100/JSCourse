let position = 0;
const slidesToShow = 3;
let currentIndex = 0;
const container = document.querySelector('.wrapper  ');
const track = document.querySelector('.slider__track');
const sliderButtons = document.querySelectorAll(".slider_item");

const colorButtons = (idx) =>  sliderButtons.forEach(i=>{
    i.style.backgroundColor = `#0C0C0E`
});

sliderButtons.forEach((btn, index)=>{
    btn.addEventListener('click', ()=>{
        console.log("predd", index)
        currentIndex = index;
        position = -(currentIndex * container.clientWidth);
        colorButtons();
        btn.style.backgroundColor = `#BB945F`
        setPosition();
    })
});



const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
}


document.getElementById('burger').addEventListener('click', function (){
    const modal = document.querySelector('.container__modal');
    modal.style.display = 'block';
    const close = document.getElementById('close')
    close.addEventListener('click',function (){
        modal.style.display = 'none';
    })
});





