document.addEventListener("DOMContentLoaded"), function () {
    alert ('a')
    }
    document.addEventListener("DOMContentLoaded", function () {

        window.addEventListener('scroll', function() {
            const popup = document.querySelector('.popup');
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
        
            popup.style.top = scrollTop + 'px';
        });
    }
    )