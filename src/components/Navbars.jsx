import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbars({setCategory}) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Navbar.Brand href="#home">
            <p className="btn btn-outline-light mb-0 fw-bold">
              Deep <span className="badge text-bg-light">News</span>
            </p>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setCategory("general")}>General</Nav.Link>
            <Nav.Link onClick={() => setCategory("technology")}>
              Technology
            </Nav.Link>
            <Nav.Link onClick={() => setCategory("business")}>
              Bussiness
            </Nav.Link>
            <Nav.Link onClick={() => setCategory("entertainment")}>
              Entertainment
            </Nav.Link>
            <Nav.Link onClick={() => setCategory("health")}>Health</Nav.Link>
            <Nav.Link onClick={() => setCategory("science")}>Science</Nav.Link>
            <Nav.Link onClick={() => setCategory("sports")}>Sports</Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </>
  );
}

export default Navbars;
