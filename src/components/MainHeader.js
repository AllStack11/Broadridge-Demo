import {Container} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import '../styles/MainHeader.css'

const MainHeader = () => {
  return (
    
      <Navbar expand="lg" variant="dark" className="mainHeader">
        <Container>
          <Navbar.Brand className="title" href="#">
            <img src="https://media-exp1.licdn.com/dms/image/C560BAQGvafGzD3TCSA/company-logo_200_200/0/1624989384488?e=2159024400&v=beta&t=UArCYAMm7kpYEbFZCCXnby074OH-6zWrrAWUy71Ga7A" width="50" height="50" className="d-inline-block align-top" alt="React Bootstrap logo"/>
            {' '}
            Broadridge GTO - Digital Asset Library 
          </Navbar.Brand>
        </Container>
      </Navbar>
    
  )
};

export default MainHeader;