document.addEventListener("DOMContentLoaded", () => {
    // 헤더 로드
    fetch('./header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            // 헤더 로드 후 메뉴 기능 초기화
            initHeaderMenu();
        })
        .catch(error => console.error('헤더 로드 실패:', error));

    // 메뉴 기능 초기화 함수
    function initHeaderMenu() {
        // 메뉴버튼을 누르면 header가 나오는 기능
        const btnMenu = document.querySelector(".btn-menu");
        const menuSmartHidden = document.querySelector(".menu-smart-hidden");
        const btnClose = document.querySelector(".btn-close");
        const gnbSmartList = document.querySelectorAll(".gnb-smart>li");

        if (btnMenu) {
            btnMenu.addEventListener("click", () => {
                menuSmartHidden.classList.add("on");
            });
        }
        if (btnClose) {
            btnClose.addEventListener("click", () => {
                menuSmartHidden.classList.remove("on");
                gnbSmartList.forEach(tag => tag.classList.remove("on"));
            });
        }

        // 모바일에서 2뎁스 메뉴 나오는 기능
        const btnMore = document.querySelectorAll(".gnb-smart li .btn-more");
        btnMore.forEach(span => {
            span.addEventListener("click", () => {
                const parent = span.parentElement;
                const isActive = parent.classList.contains("on");

                btnMore.forEach(item => {
                    item.parentElement.classList.remove("on");
                });

                if (!isActive) {
                    parent.classList.add("on");
                }
            });
        });
    }
});