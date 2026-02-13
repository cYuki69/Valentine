const startBtn = document.getElementById('start-btn');
const welcomePage = document.getElementById('welcome');
const page1 = document.getElementById('page1');
const finalPage = document.getElementById('final-page');

const btn = document.getElementById('mybutton');
const showImg = document.getElementById('myimg');

const allImages = [
    "cat.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "6.jpg"
];   

let count = 0;

startBtn.addEventListener('click', function(){
    welcomePage.style.display = 'none';
    page1.style.display = 'block';
    // ตั้งค่ารูปเริ่มต้นให้เป็นรูปแรกใน Array เมื่อกดเข้าหน้าหลัก
    showImg.src = allImages[0]; 
    document.body.style.backgroundImage = "url('bg2.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
});

btn.addEventListener('click', function(){
    count = count + 1; // เพิ่มค่า count เมื่อกดปุ่ม
    
    // ตรวจสอบว่าถ้ากดจนเกินจำนวนรูปภาพที่มี (จะไปหน้าสุดท้าย)
    if(count >= allImages.length){
        // 1. ซ่อนรูปภาพและปุ่ม Next
        showImg.style.display = 'none';
        btn.style.display = 'none';
        
        // 2. แสดงหน้าสุดท้าย
        finalPage.style.display = 'block';
        
        // 3. เปลี่ยนพื้นหลังเป็น bg1.jpg และปรับสีให้เข้ากับท้องฟ้าที่คุณชอบ
        document.body.style.backgroundImage = "url('bg1.jpg')";
        document.body.style.backgroundColor = "#bae6fd";
    } else {
        // ถ้ายังไม่ถึงรูปสุดท้าย ก็เปลี่ยนรูปตามปกติจาก Array
        showImg.src = allImages[count];
    }
});


