import Contact from "./components/Contact"
import Hero from "./components/Hero";
import Works from "./components/Works";
import styled from "styled-components"
import Nav from "./components/Nav";
import "./App.css"

const Container = styled.div`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  max-height: 100vh;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Nav />
      <Hero />
      <Works />
      <Contact />
    </Container>
  )
}

export default App
