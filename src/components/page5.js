import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';

// 어떤 개발자가 되고 싶나
class Page5 extends Component {
  render() {
    return (
      <div className="page-5">
        <ButtonBack className="to-top">
          <span className="fa fa-angle-double-up" aria-hidden="true"></span>
        </ButtonBack>
        <div className="container-fluid">
          <div className="page-5-content">
            <h4>돈 많이 주시면
            <br />더 열심히
            <br />일하겠습니다
            {/* <br />개발자가 되고 싶습니다. */}
            </h4>
            <br />
            <br />
            {/* <p className="running-emoji">  </p> */}
            <div className="box"></div>
          </div>
        </div>
        <ButtonNext className="to-bottom">
          <span className="fa fa-angle-double-down" aria-hidden="true"></span>
        </ButtonNext>
      </div>
    );
  }
}

export default Page5;
