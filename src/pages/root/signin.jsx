import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

import { Link } from "react-router-dom";

function SignIn() {
  const ListContainer = styled.form`
    width: 100%;
    height: 100%;
    max-width: ${window.innerWidth}px;
    min-height: ${window.innerHeight}px;
    background-color: ${({ theme }) => theme.color.background};
    padding: 6rem 3rem;
    flex-wrap: wrap;
    color: white;
  `;

  const Head = styled.h1`
    margin-bottom: 50px;
  `;
  return (
    <ListContainer>
      <Head>Sign-in</Head>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="light" type="submit">
        Log-in
      </Button>
      <Link to="/login/signup">
        <Button variant="light" type="submit">
          Sign-up
        </Button>
      </Link>
    </ListContainer>
  );
}

export default SignIn;
