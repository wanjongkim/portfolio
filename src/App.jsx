import Contact from "./components/Contact"
import Hero from "./components/Hero";
import Works from "./components/Works";
import styled from "styled-components"
import Nav from "./components/Nav";
import "./App.css"

const Container = styled.div`
  scroll-behavior: smooth;
  overflow-y: auto;
  max-height: 100vh;
  background-color: #F5F5F5;
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
