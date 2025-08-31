// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { // onYouTubeIframeAPIReady 이 이름은 절대 바꾸면 안됨 
  // <div id="player"></div> --> html에서 작성한 부분의 player임
  new YT.Player('player', { //player라는 id값을 찾음
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상  ID 목록
    },
    events: {
      onReady: function (event) { // onReday라는 속성을 만들고 익명의 함수를 할당 객체 데이터 내부에 함수 데이터가 할당되어 있는 속성을 메소드라고 한다.
        event.target.mute() //event라는 매개변수에는 target이라는 속성이 들어 있는거 여기서 target은 지금 영상되고 있는 영상 그자체를 의미
        // mute는 음소거라는 의미
      }
    }
  });
}
        // 함수 괄호안에 있는거는 매개변수라고 하고 여기서는 event가 매개변수이지
        // 즉 여기서는 onReady라는 메서드가 실행되면 어떻게 처리를 할거냐