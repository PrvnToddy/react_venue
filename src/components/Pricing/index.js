import React, { Component } from 'react';
import MyButton from '../utills/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  state = {
    prices: [750, 1000, 1250],
    positions: ['Low', 'Medium', 'High'],
    desc: [
      'Exercitation occaecat laborum Lorem enim anim cillum in.',
      'Labore adipisicing in cillum ex culpa enim sunt excepteur nisi proident.',
      'Labore velit do aute non ad ut enim quis.'
    ],
    linkto: ['http://sales/a', 'http://sales/b', 'http://sales/a'],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div children='pricing_item'>
          <div className='pricing_inner_wrapper'>
            <div className='pricing_title'>
              <span>₹{this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className='pricing_description'>{this.state.desc[i]}</div>
            <div className='pricing_buttons'>
              <MyButton
                text='Purchase'
                bck='#ffa800'
                color='#ffffff'
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className='bck_black'>
        <div className='pricing_section'>
          <h2>Pricing</h2>
          <div className='pricing_wrapper'>{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
