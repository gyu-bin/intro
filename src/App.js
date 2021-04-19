import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonNext } from 'pure-react-carousel';

import Page2 from './components/page2';
import Page3 from './components/page3';
import Page4 from './components/page4';
import Page5 from './components/page5';
import Page6 from './components/page6';
import './App.css';

class App extends Component {
  // 실행되는 브라우저 width 값에 따라 터치 / 클릭 안내메시지 구분
  offsetWidth() { //레이아웃 폭 설정.
    if (window.document.body.offsetWidth < 768) {
      return <span className="touch-guide">터치하여 계속 보기</span>
    } else {
      return <span className="touch-guide">클릭하여 계속 보기</span>
    }
  };
  // guideMsg() {
  //   if (window.document.body.offsetWidth < 768) {
  //     return <span className="fa fa-exclamation-circle guide-msg" aria-hidden="true"> 상단 또는 하단 영역을 터치하여 계속 보기</span>
  //   } else {
  //     return <span className="fa fa-exclamation-circle guide-msg" aria-hidden="true"> 상단 또는 하단 영역을 클릭하여 계속 보기</span>
  //   }
  // };
  render() {
    return (
      <div className="App">
        <CarouselProvider
          visibleSlides={1} //한 번에 표시 할 슬라이드 수입니다. 이 숫자는 <= totalSlides 여야합니다.
          orientation="vertical"
          totalSlides={6} //전체 슬라이드 수와 동일하게
          step={1}
          touchEnabled={false} //터치 이벤트를 사용하려면 true로 설정하십시오.
        >
          <Slider>
            <Slide index={0}>
              <div className="page-1">
                {/* <span className="fa fa-check-circle react-msg" aria-hidden="true"> 본 사이트는 React로 제작되었습니다.</span> */}
                <div className="container-fluid">
                  <div className="page-1-content">
                    <p className="page-1-p">안녕하세요! 코딩이 너무 재미있는!</p>
                    <h1>Developer <strong>문규빈</strong>의 포트폴리오 입니다.</h1>

                  </div>
                  <ButtonNext className="to-bottom-first">
                    {this.offsetWidth()}
                    <br />
                    <span className="fa fa-angle-double-down" aria-hidden="true"></span>
                  </ButtonNext>
                </div>
              </div>
            </Slide>

            <Slide index={1}>
              <Page2 />
            </Slide>

            <Slide index={2}>
              <Page3 />
            </Slide>

            <Slide index={3}>
              <Page4 />
            </Slide>

            <Slide index={4}>
              <Page5 />
            </Slide>

            <Slide index={5}>
              <Page6 />
            </Slide>

          </Slider>
        </CarouselProvider>
      </div >
    );
  }
}

export default App;