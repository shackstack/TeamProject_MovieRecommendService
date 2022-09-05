import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

function SignUp() {
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

  const Submitbtn = styled.div`
    margin-left: 94%;
  `;

  return (
    <>
      <ListContainer>
        <Head>Sign-up</Head>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter Email"
              aria-label="Enter Email"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-light" id="button-addon2">
              중복검사
            </Button>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNickName">
          <Form.Label>NickName</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter Nickname"
              aria-label="Enter Nickname"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-light" id="button-addon2">
              중복검사
            </Button>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Submitbtn>
          <Button variant="light" type="submit">
            Submit
          </Button>
        </Submitbtn>
      </ListContainer>
    </>
  );
}

export default SignUp;
