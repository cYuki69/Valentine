const startBtn = document.getElementById('start-btn');
const welcomePage = document.getElementById('welcome');
const page1 = document.getElementById('page1');


const btn = document.getElementById('mybutton');
const showImg = document.getElementById('myimg');

startBtn.addEventListener('click', function(){
    welcomePage.style.display = 'none';
    page1.style.display = 'block';
    document.body.style.backgroundImage = "url('12.JPG')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed"; // ทำให้พื้นหลังไม่เลื่อนตามรูป
});

const allImages = [
    "1.JPG",
    "2.JPG",
    "3.JPG",
    "4.JPG",
    "6.JPG"
];   

let count = 0;
startBtn.addEventListener('click',function(){
    welcomePage.style.display = 'none';
    page1.style.display = 'block';
})

btn.addEventListener('click', function(){
    count = count+1;
    if(count >= allImages.length){
        count = 0;
    }
    showImg.src = allImages[count];
});