import {Container} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import '../styles/MainFooter.css'

const MainFooter = () => {
  return (
      <Navbar expand="lg" variant="dark" className="mainFooter" >
        <Container>
          <Navbar.Brand href="#">Broadridge Footer</Navbar.Brand>
        </Container>
      </Navbar>
  )
};

export default MainFooter;