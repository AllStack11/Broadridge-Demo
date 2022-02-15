import {Container} from 'react-bootstrap'
import {Nav,Navbar, NavDropdown,Form, FormControl,Button} from 'react-bootstrap'


const AppHeader = () => {
  return (
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Design Component Library</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="https://docs.microsoft.com/en-us/adaptive-cards/rendering-cards/getting-started">Documentation</Nav.Link>
        <NavDropdown title="Components" id="navbarScrollingDropdown">
          <NavDropdown.Item href="https://adaptivecards.io/designer/">Tickers</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Calendars</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Reminders</NavDropdown.Item>
          <NavDropdown.Item href="/formsPage">Forms</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Component XYZ</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Services" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action2">Exports</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Tickers</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Charting</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Forms</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Service XYZ</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="calendar widget"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
};

export default AppHeader;