import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function Button({ white, primary, icon, onClick, children }) {
  const Btn = styled.button`
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  transition: all .2s;
  position: relative;
  font-size: var(--default-font-size);
  border-width: 0;

  ${white && `
    background-color: var(--c-white);
    color: var(--c-grey-dark);
    &::after {
      background-color: #fff;
    }
  `}

  ${primary && `
    background-color: var(--c-primary);
    color: var(--c-white);
    &::after {
      background-color: var(--c-primary);
    }
  `}

  ${icon && `
    padding: .8rem 2rem 1.5rem 2rem !important;
    color: var(--c-black);
  `}


  &:hover {
    transform: translatey(-.3rem);
    box-shadow: 0 1rem 2rem rgba(var(--c-black), 0.2);
    &::after {
      transform: scaleX(1.1) scaleY(1.15);
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(-.1rem);
    box-shadow: 0 .5rem 1rem rgba(var(--c-black), 0.2);
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    position: absolute;
    top:0;
    left:0;
    z-index: -1;
    transition: all .4s;
  }

  &--animated {
    animation: moveInBottom .5s ease-out .75s;
    animation-fill-mode: backwards;
  }

  svg {
    width: calc(var(--default-font-size) * 2);
    height: calc(var(--default-font-size) * 2);
    fill: currentColor;
    -webkit-transform: translateY(0.4rem);
    transform: translateY(0.4rem);
}
  `
  return (<Btn onClick={onClick}>{children}</Btn>)
}

Button.propTypes = {
  white: PropTypes.bool,
  primary: PropTypes.bool,
  icon: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node
}
