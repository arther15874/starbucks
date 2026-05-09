// document는 뭐다 html 자체다.
// 헤더와 드롭다운 메뉴 - 검색
const searchEl = document.querySelector('.search'); // 변수명 searchEl
// document객체에서 querySelector라는 메소드를 실행 괄호안에 우리가 알고 있는 선택자를 넣어주면 됨
// class가 search인 요소를 검색할거다.

const searchInputEl = searchEl.querySelector(' input');
// searchInputEl 변수명이고 search의 input요소를 찾을거다.
// 효율적으로 찾기위해 document대신 searchEl로 search내의 input요소를 찾겠다.
// 여기에서 얘기하는 document라는 것은 쉽게 생각하면 html이라고 보면 된다.

searchEl.addEventListener('click', function () {
  // Logic
  searchInputEl.focus();
})
// search요소에 이벤트를 추가하는 개념 근데 무슨 이벤트를 넣을거냐?
// click이벤트를 넣을거다. 그러면 search라는 클래스를 가지고 있는 div요소를 클릭하면 어떠한 함수를 실행할거고
// 그 함수는 핸들러라 부른다. / search라는 클래스를 가지고 있는 검색 요소를 선택하게 되면 
// input요소를 포커스 하겠다는 명령을 실행

searchInputEl.addEventListener('focus', function () {
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

searchInputEl.addEventListener('blur', function () { // blur focus가 해제 됐을때 의미
  searchEl.classList.remove('focused'); // focuse 제거
  searchInputEl.setAttribute('placeholder', ''); // 비어 있는상태 ''
})

// FOOTER
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2025