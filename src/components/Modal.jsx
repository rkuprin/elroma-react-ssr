import React from "react"
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { imagePath } from '../utils/asset-utils'
import PhoneForm from './PhoneForm'

const img = imagePath('popup-cups.jpg')

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff73;
  transition: all .2s;
`
const ModalBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff73;
`
const ModalBox = styled.div`
  width: 60vw;
  height: 50vh;
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--c-light-grey);
  display: flex;
  border-radius: 4px;
  box-shadow: 0 1rem 3rem rgba(0,0,0,.2);
  overflow: hidden;
  z-index:100;
`

const ModalImg = styled.img`
  width: 30rem;
  height: auto;
  background-image: url(${img});
  background-size: cover;
`

const ModalCta = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`


export const Modal = ({ onClick }) => {
  return (
    <ModalWrapper>
      <ModalBg onClick={onClick} />
      <ModalBox>
        <ModalImg />
        <ModalCta>
          <PhoneForm />
        </ModalCta>
      </ModalBox>
    </ModalWrapper>
  )
}

Modal.propTypes = {
  onClick: PropTypes.func
}
