window.addEventListener('load', function() {
    // تحديد مدة العرض لشاشة البداية
    setTimeout(function() {
        // إخفاء شاشة البداية
        document.getElementById('splash-screen').style.display = 'none';
        // عرض المحتوى الرئيسي
        document.getElementById('main-content').style.display = 'block';
    }, 2000); // 2000 ميلي ثانية = 2 ثانية
});

document.addEventListener('DOMContentLoaded', function() {
    // وظيفة لإظهار أو إخفاء القائمة عند النقر على زر البرغر
    const toggler = document.getElementById('navbar-toggler');
    const navbarNav = document.getElementById('navbarNav');

    toggler.addEventListener('click', function() {
        // التبديل بين إظهار وإخفاء القائمة المنسدلة
        if (navbarNav.classList.contains('show')) {
            navbarNav.classList.remove('show');
        } else {
            navbarNav.classList.add('show');
        }
    });
});


 // Initialize Carousel with options
 var myCarousel = document.querySelector('#newsCarousel');
 var carousel = new bootstrap.Carousel(myCarousel, {
     interval: 2000, // سرعة الانتقال بين العناصر بالميلي ثانية
     ride: 'carousel' // لجعل الكاروسيل يبدأ تلقائيًا
 });