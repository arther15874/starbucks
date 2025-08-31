// document는 뭐다 html 자체다.
// 헤더와 드롭다운 메뉴 - 검색
const searchEl = document.querySelector('.search'); // 변수명 searchEl
// document객체에서 querySelector라는 메소드를 실행 괄호안에 우리가 알고 있는 선택자를 넣어주면 됨
// class가 search인 요소를 검색할거다.

const searchInputEl = searchEl.querySelector(' input');
// searchInputEl 변수명이고 search의 input요소를 찾을거다.
// 효율적으로 찾기위해 document대신 searchEl로 search내의 input요소를 찾겠다.
// 여기에서 얘기하는 document라는 것은 쉽게 생각하면 html이라고 보면 된다.

searchEl.addEventListener('click', function() { 
  // Logic
  searchInputEl.focus();
}) 
// search요소에 이벤트를 추가하는 개념 근데 무슨 이벤트를 넣을거냐?
// click이벤트를 넣을거다. 그러면 search라는 클래스를 가지고 있는 div요소를 클릭하면 어떠한 함수를 실행할거고
// 그 함수는 핸들러라 부른다. / search라는 클래스를 가지고 있는 검색 요소를 선택하게 되면 
// input요소를 포커스 하겠다는 명령을 실행

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  // 특정 요소에 클래스 정보를 가지고 있는 객체에서 어떤 클래스 내용을 추가하겠다.
  // 그렇게 추가한 이름은 focused라고 할게
  searchInputEl.setAttribute('placeholder', '통합검색');
  // set은 무언가 지정한다라는 의미를 가지고 있고 html속성을 Attribute라고 부름
  // 결국searchinputEl부분에다가 어떤 html속성을 지정할 때 쓰는 메소드가 됨
  // setattribute 부분에는 첫 번째 인수로 속성의 이름을 그리고 쉼표로 구분해서 두 번째 인수로는
  // 그 속성에 들어갈 실제 값을 추가해 준다.
});
//function(){} 이거는 익명의 함수임

searchInputEl.addEventListener('blur', function() { // blur focus가 해제 됐을때 의미
  searchEl.classList.remove('focused'); // focuse 제거
  searchInputEl.setAttribute('placeholder', ''); // 비어 있는상태 ''
})

// 헤더와 드롭다운 메뉴 - 전역 배지(1, 2)
const badgeEl = document.querySelector('header .badges'); // 요소를 header 안에 badges라는 요소를 찾겠다.
const toTopEl = document.querySelector('#to-top'); // to-top이라는 id선택자 찾을꺼 그걸 변수 toTopEl에 할당
// 뭐를 이용해서 querSelecotr를 사용해서

// window객체는 우리가보는 화면을 의미
window.addEventListener('scroll', _.throttle(function() {  // _.throttle() -> lodash라는 js라이브러리 통해서 쓸수 있는 명령어
  console.log(window.scrollY > 500);  // 사용방법 --> _.thorottle(함수, 시간[밀리세컨드단위로])
  if (window.scrollY){
// 배지 숨기기
// 사용방법 gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, { // 객체데이터는 중괄호로 만들 수 있음
      opacity: 0, // opacity는 옵션임 name, age 이렇게 만들 수 있음
      display: 'none' // 문자로 입력하는 값은들은 앞뒤로 따옴표 붙여줘야 함  -> none안하면 배지요소는 사라지지만 화살표 포인터가 남아있게됨됨
    });  // 여러개 연속으로 속성 사용시 ","쉼표 사용 필수
    //버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
// 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block' 
    });
    // 버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.thorottle(함수, 시간)
// 윈도우는 지금 프로젝트가 나타나 있는 그 브라우저의 하나의 탭을 의미함
//addEventListener메소드를 추가해서 이벤트를 작성할 거임 어떤 이벤트냐 scroll이라는 이벤트
// 그리고 두번째 인수로 scroll 이벤트가 발생하면 실행할 핸들러 익명의 함수를 작성해야지
// 함수가 많이 실행되면 화면이 버벅임 scroll같은건 ㅈㄴ게 하니까 파일이 커지면 버벅일 수 있겠지
// 이걸 제어해 줘야 함 --> 외부 자바스크립트 라이브러리로 //// 여기서 300은 0.3초를 의미
// 실행해보면 scroll이 천천히 올라오는거 확인 가능 이거를 throttle이라는 기능을 통해서 일정 시간에 한 번씩만 실행되도록 제한을 걸은거

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0 // 스크롤 지점을 0px지점으로 옮겨 주겠다. 0.7초 동안
  });
})

// 순차적 애니메이션 순차적으로 요소보이기
const fadeEls = document.querySelectorAll('.visual .fade-in'); 
// document객체에 querselectorall이라는 메소드 실행
// .visual의 후손으로 fade-in이라는 클래스를 가진 요소들을 전부다 찾아서 fadeEls라는 변수에다가 할당하겠다.
fadeEls.forEach(function (fadeEl, index) { //forEach는 메소드
  // 사용방법 gsap.to(요소, 지속시간, 옵션); 지속시간은 초 단위임, 옵션은 기본적으로 객체 데이터 형태
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 여기서 index는 0부터 시작하는 제로베이스 개념임, 0.7, 1.4, 2.1, 2.7 이렇게 첫번째 두번째 .. 네번째까지 진행됨 fade-in클래스가 4개 있으니까까
    opacity: 1
  }); 
}); 


// 요소 슬라이드 - 수직 슬라이드(swiper)
// 소괄호 사이에 옵션을 넣음 이렇게 소괄호 사이에다가 넣는것을 인수라고 한다. 두번째 부분에는 옵션 객체 형식"{}"으로 넣어준다.
// notice-line안에 있는 swiper를 실제로 슬라이드 하겠습니다.
// 첫 번째 옵션 direction 방향을 의미하는 옵션 vertical은 수직
// new Swiper(선택자, 옵션) --> 선택자에서 "." 클래스 점 주의 빼먹으면 작동안함
new Swiper('.notice-line .swiper', {  // new라는 키워드를 사용한다는 것은 자바스크립트의 생성자(클래스)라고 부름
  direction: 'vertical',
  autoplay: true, // 자동재생 기능 
  loop: true // lope는 반복재생 유무
}); 

// 요소 슬라이드 - 프로모션 이미지 슬라이드(1,2)
// promtion이라는 클래스를 가진요소에 swiper container라는 요소를 실제로 슬라이드 하겠다.
new Swiper('.promotion .swiper', {  
  // direction: 기본값으로 수평을 의미하는 horizontal이 들어있음 그래서 따로 명시할 필요는 없음
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백 여기서는 10px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: { // autoplay 자동제어 부분에 {} 이렇게 객체데이터로 할당해 주면 여기다가 추가적인 옵션을 명시할 수 있음
    delay: 5000 // ms단위이고 500이면 0.5초임 그리고 delay의 기본 값은3000임
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
}); 
// AWARDS
new Swiper('.awards .swiper', {
  // key-value형태
  autoplay: true,
  loop: true,
  spaceBetween: 20, // 여백이 30
  slidesPerView: 5, // 한번에 5개 슬라이드를 보여주겠다.
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


// 요소 슬라이드 -슬라이드 영역 토글
const promotionEl = document.querySelector('.promotion');
// promotion이라는 클래스를 가지고 있는 슬라이드를 만든 그영역을 promotionEl변수에 할당하겠다.
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () { // 첫 번째 인수 이벤트 이름, 두번째는 이벤트 핸들러
  isHidePromotion = !isHidePromotion // !가 붙어있는 뒤쪽에 있는 값이 반대가 되게 만들어 주세요.
  // 여기서 isHidePromotion은 false잖아 즉 isHidePromotion값이 false이면 !를 통해서 반대의 값인 true가 다시 isHidePromotion으로 들어가는거
  // 즉 어떤 특정 변수의 값을 지속적으로 반대값으로 전환시켜줄 수있는 코드라고 보면 됨
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide'); 
    // promotion이라는 요소 그 슬라이드 만든 그 요소 부분에 hide라는 클래스가 추가 그러면 만약에 프로모션 엘리먼트 부분에 hide라는 클래스가 있으면
    // 요소를 화면에서 안보이게 css 스타일로 정리를 해주면 됨
  } else { // false면 else코드가 실행됨
    // 보임 처리
    promotionEl.classList.remove('hide'); 
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 유튜브 영상 배경 -반복 애니메이션
// 함수선언 이름은 floatingObject
// 첫 번째로 받는거는 인수(선택자), 두번째는 시간, 세번째는 크기기
function floatingObject(selector, delay, size) { 
  // gsap은 자바스크립트 애니메이션 라이브러리 gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, // 선택자 
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1, // -1값 무한 반복 이 -1값은 자바스크립트 라이브러리에서 지원하는 기능임
      yoyo: true,
      ease: "power1.inOut", 
      delay: random(0, delay)
  })
}
floatingObject('.floating1', 1, 15) // 괄호안에 css선택자를 인수로 넣어줘야함
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


const spyEls =document.querySelectorAll('section.scroll-spy') //변수 생성 이름은 spyEls 그리고  뒤에  s는 복수의 요소를 찾는다는 의미
spyEls.forEach(function(spyEl) { //forEach를 써서 각각의 요소들 반복 그리고 그 반복될때 실행 될 함수
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show') // Scene() 메소드임 그리고 "."사용해서 연속적으로 메소드사용을 메소드 체이닝
    .addTo(new ScrollMagic.Controller()); 
}); 
// "{}" 이렇게 중괄호 안에 데이터 == 객체 데이터

// FOOTER
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2025