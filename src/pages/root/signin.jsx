import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { REST_API } from "src/apis/config";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogIn = async () => {
    console.log(username, password);
    await REST_API.post({ username, password });
  };

  return (
    <ListContainer>
      <Head>Sign-in</Head>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="ID"
          placeholder="Enter ID"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>

      <Button
        variant="light"
        type="submit"
        onClick={() => {
          onClickLogIn();
        }}>
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
