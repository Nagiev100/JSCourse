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



const book = [{
    winter:[{
        oneBook:{
            nameAuthor:'Staff Picks',
            genre:'The Book Eaters By Sunyi Dean',
            description:'An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.'
        },
        TwoBook:{
            nameAuthor:'Staff Picks',
            genre:'Cackle By Rachel Harrison',
            description:'Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.'
        },
        ThreeBook:{
            nameAuthor:'Staff Picks',
            genre:'Dante: Poet of the Secular World By Erich Auerbach',
            description:'Auerbach s engaging book places the \'Comedy\' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante\'s uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante\'s main themes.'
        },
        FourBook:{
            nameAuthor:'Staff Picks',
            genre:'The Last Queen By Clive Irving',
            description:'A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.'
        },

    }]

}]

const winterRadio = document.getElementById('winter');
const springRadio = document.getElementById('spring');
const summerRadio = document.getElementById('summer');
const autumnRadio = document.getElementById('autumn');

const winterContent = document.getElementById('winterContent');
const springContent = document.getElementById('springContent');
const summerContent = document.getElementById('summerContent');
const autumnContent = document.getElementById('autumnContent');

winterRadio.addEventListener('click', function() {
    winterContent.style.display = 'grid';
    springContent.style.display = 'none';
    summerContent.style.display = 'none';
    autumnContent.style.display = 'none';
});

springRadio.addEventListener('click', function() {
    winterContent.style.display = 'none';
    springContent.style.display = 'grid';
    summerContent.style.display = 'none';
    autumnContent.style.display = 'none';
});

summerRadio.addEventListener('click', function() {
    winterContent.style.display = 'none';
    springContent.style.display = 'none';
    summerContent.style.display = 'grid';
    autumnContent.style.display = 'none';
});

autumnRadio.addEventListener('click', function() {
    winterContent.style.display = 'none';
    springContent.style.display = 'none';
    summerContent.style.display = 'none';
    autumnContent.style.display = 'grid';
});


