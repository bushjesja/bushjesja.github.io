// 汉堡菜单功能
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // 点击导航链接时关闭菜单
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 点击页面其他地方关闭菜单
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// 服务内容轮播图功能
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.service-carousel');
    if (!carousel) return;  // 如果不在首页，直接返回
    
    const items = carousel.querySelectorAll('.carousel-item');
    const prevBtn = carousel.parentElement.querySelector('.carousel-prev');
    const nextBtn = carousel.parentElement.querySelector('.carousel-next');
    const indicators = carousel.parentElement.querySelectorAll('.indicator');
    let currentIndex = 0;

    // 更新轮播图位置
    function updateCarousel() {
        items.forEach((item, index) => {
            if (index === currentIndex) {
                item.style.opacity = '1';
                item.style.zIndex = '1';
            } else {
                item.style.opacity = '0';
                item.style.zIndex = '0';
            }
        });
        
        // 更新指示器状态
        indicators.forEach((indicator, index) => {
            indicator.style.background = index === currentIndex ? '#FF6B00' : 'rgba(255, 255, 255, 0.5)';
        });
    }

    // 下一张
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    // 上一张
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    // 绑定按钮事件
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // 绑定指示器点击事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // 初始化显示第一张
    items[0].style.opacity = '1';
    items[0].style.zIndex = '1';

    // 自动轮播
    const autoPlayInterval = setInterval(nextSlide, 5000);

    // 鼠标悬停时暂停自动轮播
    carousel.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    carousel.addEventListener('mouseleave', () => setInterval(nextSlide, 5000));
}); 