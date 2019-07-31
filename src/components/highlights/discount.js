import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utills/MyButton';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
    console.log(this.state.discountStart);
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }
  render() {
    return (
      <div>
        <div className='discount_wrapper'>
          <Fade onReveal={() => this.porcentage()}>
            <div className='discount_porcentage'>
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className='discount_description'>
              <h3>Purchase tickets before 20th October.</h3>
              <p>
                Duis nisi minim aliquip commodo excepteur esse ut. Incididunt
                sint adipisicing ad sint laboris id duis dolor consectetur elit
                nulla.
              </p>
              <MyButton
                text='Purchase'
                bck='#ffa800'
                color='#ffffff'
                link='http://google.com'
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
