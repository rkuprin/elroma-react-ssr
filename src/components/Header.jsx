import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { HeaderSection, HeaderBackground, GreetingBox } from './header/Section'
import Btn from './Button'
import { Modal } from './Modal'
import { imagePath } from '../utils/asset-utils'

const logo = imagePath('logo-white.png')
const sprite = imagePath('sprite.svg')


export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      togglePopup: false
    }
  }

  handleClick = () => {
    console.log(this.state.togglePopup)
    this.setState({ togglePopup: !this.state.togglePopup })
  }


  render() {
    return (
      <HeaderSection>
        <HeaderBackground />
        <GreetingBox>
          <img src={logo} alt="Logo el Roma" />
          <h3>Проходите, давайте знакомится!</h3>
          <Btn onClick={this.handleClick} white icon>
            Попробовать
            &nbsp;
            <svg>
              <use href={sprite + '#icon-cup'}></use>
            </svg>
            &nbsp;
            бесплатно
          </Btn>
        </GreetingBox>
        {this.state.togglePopup && ReactDOM.createPortal(<Modal onClick={this.handleClick} >Your Data Goes Here</Modal>, document.getElementById('modal'))}
      </HeaderSection>
    )
  }
}


