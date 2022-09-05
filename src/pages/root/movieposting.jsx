import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

const MoviePosting = () => {
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

  const Jump = styled.div`
    margin-left: 45%;
  `;
  return (
    <>
      <ListContainer>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="title"
            placeholder="Which movie you'd like to recommend?"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>URL</Form.Label>
          <Form.Control type="URL" placeholder="https://" />
        </Form.Group>

        <Form.Group className="mb-5">
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="Content"
            placeholder="Tell us why you recommend it."
          />
        </Form.Group>
        <Jump>
          <Link to="/browse">
            <Button variant="light" type="submit">
              Submit
            </Button>
          </Link>
          <Link to="/browse">
            <Button variant="light" type="submit">
              Cancel
            </Button>
          </Link>
        </Jump>
      </ListContainer>
    </>
  );
};

export default MoviePosting;
