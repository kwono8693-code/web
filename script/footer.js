document.addEventListener("DOMContentLoaded", () => {
    // 헤더 로드
    fetch('./footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('include-footer').innerHTML = data;
            // 헤더 로드 후 메뉴 기능 초기화
            initHeaderMenu();
        })
        .catch(error => console.error('헤더 로드 실패:', error));
});