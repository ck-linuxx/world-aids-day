import Image from "next/image"
import styled from "styled-components"

import { NavBar } from "../NavBar"

export const Main = () => {
  const Container = styled.div`
    display:flex;
  `;

  return (
    <Container>
      <NavBar />
    </Container>
  )
}