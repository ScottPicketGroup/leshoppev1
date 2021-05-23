import React from "react"
import styled from "styled-components"
import { P } from "../../../styled-components/GlobalStyles"
import introImg from "../../../../images/placeholders/introLandscape.jpg"
import IntroLandscape from "./images/introLandscape"
const Intro = () => {
  return (
    <IntroContainer>
     <IntroLandscape/>
      
      <IntroText>
    < P bc1 
      > Bienvenue! Welcome to Le Shoppe by Chancery Lane.</P>
        <P bc1>
        Le Shoppe is Scott Pickett’s European-inspired coffee bar and provedore, located at 430 Little Collins St, Melbourne. Adjoining Chancery Lane Bistro, Le Shoppe is proud to continue Melbourne's legacy of historic grocers and corner stores.
        </P>
      </IntroText>
    </IntroContainer>
  )
}

export default Intro

export const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  margin-bottom: 13.5rem;
  @media (max-width: 450px) {
    margin-bottom: 6rem;
  }
`

export const ImgLandScape = styled.img`
  width: 58%;
  

  height: 100%;
  @media (max-width: 450px) {
    width: 75%;
    display: flex;
    order: 1;
  }
`
export const IntroText = styled.div`
  width: 33%;
  height: 100%;
  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 3.5rem;
  }
`
