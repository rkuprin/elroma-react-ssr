import React, { Component } from 'react'
import styled from 'styled-components'

import Btn from "./Button";

const ModalCtaText = styled.div`
  text-align: center;
`
const FormGroup = styled.div`
&:not(:last-child) {
  margin-bottom: 3rem;
`

export default class PhoneForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.input)
  }

  render() {
    return (
      <ModalCtaText>
        <h2>Любой напиток бесплатно</h2>
        <p>Оставьте свой номер телефона и получите купон на бесплатный напиток!</p>
        <form onSubmit={this.onSubmit}>
          <FormGroup>
            <label htmlFor="tel">Телефон: 8</label>
            <input id="tel" type="tel" name="phone" value={this.state.input} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Btn primary type="submit">Отправить</Btn>
          </FormGroup>
        </form>
      </ModalCtaText>
    )
  }
}

