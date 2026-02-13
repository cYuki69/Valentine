const startBtn = document.getElementById('start-btn');
const welcomePage = document.getElementById('welcome');
const page1 = document.getElementById('page1');
const finalPage = document.getElementById('final-page');


const btn = document.getElementById('mybutton');
const showImg = document.getElementById('myimg');
let count = 0;
startBtn.addEventListener('click', function(){
    welcomePage.style.display = 'none';
    page1.style.display = 'block';
    document.body.style.backgroundImage = "url('12.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed"; // ทำให้พื้นหลังไม่เลื่อนตามรูป
});

const allImages = [
    "cat.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "6.jpg"
];   

btn.addEventListener('click', function(){
    count = count+1;
    if(count >= allImages.length){
        count = 0;
    }
    showImg.src = allImages[count];

     showImg.style.display = 'none';
        btn.style.display = 'none';
        
        // แสดงหน้าสุดท้าย
        finalPage.style.display = 'block';
        doccumect.body.style.background-img url('bg1.jpg');
        document.body.style.backgroundColor = "#bae6fd";
    } else {
        // ถ้ายังไม่ถึงรูปสุดท้าย ก็เปลี่ยนรูปตามปกติ
        showImg.src = allImages[count];
    }

});

btn.addEventListener('click', function(){
    count = count + 1;
    
    // ตรวจสอบว่าถ้ากดจนเกินจำนวนรูปภาพที่มี
    if(count >= allImages.length){
        // ซ่อนรูปภาพและปุ่ม Next
       
});


