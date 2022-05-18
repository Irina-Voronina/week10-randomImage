const mainImage = document.querySelector('#image');
const images = ['pic1.jpeg','pic2.webp', 'pic3.webp', 'pic4.webp', 'pic5.webp','pic6.webp', 'pic7.jpeg', 'pic8.webp', 'pic9.jpeg', 'pic10.jpeg', 'pic11.jpeg', 'pic12.jpeg'];


function changeImage() {
let randomIndex = Math.floor(Math.random() * images.length);
console.log(randomIndex);
mainImage.src = 'images/' + images[randomIndex];
}