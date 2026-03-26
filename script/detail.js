document.addEventListener("DOMContentLoaded",()=>{


    let productId = getParam("pid")
    const result = listArray.find(item=>item.pid == productId)
    console.log(result)

    const product1 = document.querySelector(".product1")
    product1.innerHTML =
            `
            <div class="common-frame">
                <figure class="img-pro-thumb">
                    <img src="./img/${result.pThumbnail}" alt="${result.pName}이미지">
                </figure>
                <div class="txt-pro">
                    <h1>${result.pName}</h1>
                    <p class="fwm">${result.pDesc}</p>
                    <dl class="price-table">
                        <dt>가격</dt>
                        <dd>${toWon(result.pPrice)}원</dd>
                        <dt>배송비</dt>
                        <dd>
                            ₩ 3,000
                            <span>(50,000원 이상 구매 시 무료)</span>
                        </dd>
                    </dl>
                    <div class="sell-info">
                        <div class="fwb">${result.pName}</div>
                        <div>
                            <div class="box-number">
                                <span class="btn-minus">
                                    <img src="./img/detail-minus.svg" alt="감소 버튼">
                                </span>
                                <span class="current-count">1</span>
                                <span class="btn-plus">
                                    <img src="./img/detail-plus.svg" alt="증가 버튼">
                                </span>
                            </div>
                        </div>
                        <div class="fwb">${toWon(result.pPrice)}원</div>
                    </div>
                    <dl class="price-result">
                        <dt>전체 금액</dt>
                        <dd class="fwb">${toWon(result.pPrice)}원</dd>
                    </dl>
                    <ul class="btns-buy">
                        <li>
                            <a href="#">
                                <span class="btn-heart">
                                    <img src="./img/heart.svg" alt="관심 상품 등록">
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">장바구니</a>
                        </li>
                        <li>
                            <a href="#">구매하기</a>
                        </li>
                    </ul>
                </div>
            </div>
             `
})