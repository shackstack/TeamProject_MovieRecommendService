import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { REST_API } from "src/apis/config";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");
  const [nickname, setNickname] = useState("");

  const onClickSignUp = async () => {
    await REST_API.post({ username, password, pwdCheck, nickname });
    console.log(username, password, pwdCheck, nickname);
  };

  return (
    <>
      <ListContainer>
        <Head>Sign-up</Head>
        <Form.Group className="mb-3" controlId="formBasicID">
          <Form.Label>ID</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter ID"
              aria-label="Enter ID"
              aria-describedby="basic-addon2"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Button variant="outline-light" id="button-addon2">
              중복검사
            </Button>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNickName">
          <Form.Label>Nickname</Form.Label>
          <Form.Control
            type="Nickname"
            placeholder="Enter Nickname"
            onChange={(e) => {
              setNickname(e.target.value);
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password Check</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password Check"
            onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
        </Form.Group>

        <Submitbtn>
          <Link to="/login">
            <Button
              variant="light"
              type="submit"
              onClick={() => {
                onClickSignUp();
              }}>
              Submit
            </Button>
          </Link>
        </Submitbtn>
      </ListContainer>
    </>
  );
};

export default SignUp;

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
