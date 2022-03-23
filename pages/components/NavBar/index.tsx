import Image from "next/image"

import { Container, Social } from "./styles"

import MenuImg from "../../../assets/menu.svg"
import facebookImg from "../../../assets/facebook.svg"
import linkedinImg from "../../../assets/linkedin.svg"
import twitterImg from "../../../assets/twitter.svg"

export const NavBar = () => {
  return (
    <Container>
      <Image src={MenuImg} alt="Menu" />

      <Social>
        <Image src={facebookImg} alt="Visite nosso facebook" />
        <Image src={twitterImg} alt="Visite nosso perfil no Twitter" />
        <Image src={linkedinImg} alt="Visite nossa página no linkedIn" />
      </Social>
    </Container>
  )
}