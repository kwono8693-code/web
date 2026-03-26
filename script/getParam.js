// 주소 표시줄에 있는 pid 파라미터의 저장된 값을 불러오는 함수
function getParam(param){
    const urlParmas = new URLSearchParams(window.location.search);
    return urlParmas.get(param);
}