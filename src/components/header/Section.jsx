import styled from 'styled-components'
import { imagePath } from '../../utils/asset-utils'

const background = imagePath('coffeeshop-interior.jpg')
export const HeaderSection = styled.section`
  height: 95vh;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align:center;
  padding:10rem;
`

export const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    to right bottom, 
    rgba(40,10,0,0.8), 
    rgba(90,26,0,0.4)),
    url(${background});
  background-size: cover;
  animation: zoom-in 13s ease-out 0s 1 forwards;
  z-index:-1;
`
export const GreetingBox = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  img {
    max-height: 50vh;
  }

  h3 {
    color: var(--c-light-grey);
    display: block;
    font-size: 3rem;
  }
`