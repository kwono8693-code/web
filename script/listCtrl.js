document.addEventListener("DOMContentLoaded",()=>{


    // ul 태그에 li 태그의 형태로 상품 데이터를 넣는 소스 코드
    const list = document.querySelector(".list-grid")
    let result = ""
    listArray.forEach(item=>{
        result += `
            <li>
                <a href="./detail.html?pid=${item.pid}">
                    <figure>
                        <img src="./img/${item.pThumbnail}" alt="${item.pName}">
                    </figure>
                    <div class="list-option">
                        <span class="btn-heart">
                            <img src="./img/heart.svg" alt="좋아요">
                        </span>
                    </div>
                    <h4>${item.pName}</h4>
                    <p class="fwm">${item.pDesc}</p>
                    <div class="price fwb">₩ ${item.pPrice.toLocaleString('ko-KR')}</div>
                </a>
            </li>
            `

    })
    list.innerHTML = result


    // 상품 개수를 데이터 개수에 맞게 출력하는 코딩
    document.querySelector("#current-count").innerHTML = listArray.length;
})