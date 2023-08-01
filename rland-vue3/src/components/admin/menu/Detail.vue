<script setup>
import { useRoute } from 'vue-router';
let route = useRoute;

// route.params.id
</script>

<template>
    <main class="menu-detail-main">
        <div class="menu-detail">
            <section class="menu-detail-header">
                <h1 class="d-none">메뉴 사진</h1>
                <img src="/image/latte2.svg" alt="커피라떼" />
                <a href="list.html" class="icon icon-arrow-left-line">뒤로가기</a>
            </section>
            <!-- --------------------------------------------------------------------메뉴설명 -->
            <section class="menu-detail-main-section">
                <h1 class="d-none">메뉴 설명 및 옵션</h1>
                <div class="menu-detail-text">
                    <div class="text-title-1">카페 라떼</div>
                    <div class="text-sub">Cafe Latte</div>
                    <div class="text-title-1">4,500원</div>
                    <p class="text-ctt">
                        알랜드만의 로스팅 기법으로 볶은 원두를 사용하여 추출된 풍부한
                        에스프레소와 신선한 우유가 어우러진 대표 라떼
                    </p>
                </div>
                <!-- --------------------------------------------------------------------선택값 -->
                <form action="" class="">
                    <section class="menu-detail-option-section">
                        <h1 class="d-none">메뉴 옵션들</h1>
                        <div class="menu-detail-option-section-div">
                            <div class="text-title-1 font-weight-bold">사이즈</div>
                            <div class="brown">
                                <input type="radio" name="size" value="s" id="small" class="d-none" checked />
                                <label for="small" class="btn btn-ghost font-weight-bold">Small</label>
                                <input type="radio" name="size" value="l" id="large" class="d-none" />
                                <label for="large" class="btn btn-ghost font-weight-bold">Large</label>
                            </div>
                        </div>
                        <div class="menu-detail-option-section-div">
                            <div class="text-title-1 font-weight-bold">옵션</div>
                            <div class="blue">
                                <input type="radio" name="op" value="h" id="hot" class="d-none" checked />
                                <label for="hot" class="btn btn-shadow font-weight-bold">HOT</label>
                                <input type="radio" name="op" value="i" id="iced" class="d-none" />
                                <label for="iced" class="btn btn-shadow font-weight-bold">ICED</label>
                            </div>
                        </div>
                    </section>
                    <!-- ----------------------temp---------------------------- -->
                    <div class="temp-link-div">
                        <a href="../../admin/menu/list.html" class="btn btn-shadow">메뉴 목록</a>
                        <a href="../../admin/menu/recommend-list.html" class="btn btn-shadow">추천 메뉴</a>
                    </div>
                    <!-- ----------------------------------- 담기 주문하기 -->
                    <section class="menu-detail-order-section">
                        <h1>주문하기</h1>
                        <div>
                            <span class="text-title-1">1</span>
                            <span>4500원</span>
                            <a href="" class="icon icon-minus">삭제</a>
                            <a href="" class="icon icon-plus">추가</a>
                        </div>
                        <div>
                            <a href="../cart/list.html" class="btn btn-ghost" title="장바구니 페이지로 이동합니다.">담기</a>
                            <a href="" class="btn btn-default">주문하기</a>
                        </div>
                    </section>
                    <!-- --------------------------------------------------------------------관리자일 경우 보여지는 하단 버튼 -->
                    <div class="btn-bottom d-none">
                        <div class="">
                            <input class="btn" type="submit" value="수정" />
                        </div>
                        <div class="">
                            <input type="hidden" value="" name="" />
                            <a href="../../modal.html" class="btn">삭제</a>
                        </div>
                    </div>
                </form>
            </section>
            <!-- --------------------------------------------------------------------추천메뉴 -->
            <section class="recommend-menu-section">
                <h1>함께 추천드리는 메뉴</h1>
                <div>
                    <section class="menu-section">
                        <h1 class="d-none">메뉴 목록</h1>
                        <section class="menu">
                            <div>
                                <a href="../../admin/menu/recommend-list.html">
                                    <img src="/image/espresso.svg" alt="에스프레소" />
                                </a>
                            </div>
                            <h1>에스프레소</h1>
                            <h2>Espresso</h2>
                            <div>2,500원</div>
                        </section>
                        <section class="menu">
                            <div>
                                <a href="../../admin/menu/recommend-list.html">
                                    <img src="/image/espresso.svg" alt="에스프레소" />
                                </a>
                            </div>
                            <h1>에스프레소</h1>
                            <h2>Espresso</h2>
                            <div>2,500원</div>
                        </section>
                        <section class="menu">
                            <div>
                                <a href="../../admin/menu/recommend-list.html">
                                    <img src="/image/espresso.svg" alt="에스프레소" />
                                </a>
                            </div>
                            <h1>에스프레소</h1>
                            <h2>Espresso</h2>
                            <div>2,500원</div>
                        </section>
                    </section>
                </div>
            </section>
        </div>
    </main>
</template>