import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { useState } from "react";
import postMovie from "src/apis/axios/moviepost";

const MoviePosting = () => {
  const [title, setTitle] = useState("Top Gun");
  const [image_url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const [star, setStar] = useState("");

  const submitForm = () => {
    if (title === "" || image_url === "" || content === "" || star === "") {
      return alert("다시하세요");
    }
    postMovie({ title, image_url, content, star });
  };

  return (
    <>
      <ListContainer>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="title"
            placeholder="Which movie you'd like to recommend?"
            onChange={(e) => {
              setTitle(e.target.value);
              console.log(title);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>URL</Form.Label>
          <Form.Control
            type="URL"
            placeholder="https://"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="Content"
            placeholder="Tell us why you recommend it."
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Label>Rating</Form.Label>
        <select
          className="form-select"
          id="star"
          onChange={(e) => {
            setStar(e.target.value);
          }}>
          <option defaultValue="">How much do you want to recommend?</option>
          <option value="⭐">⭐</option>
          <option value="⭐⭐">⭐⭐</option>
          <option value="⭐⭐⭐">⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
        </select>
        <Jump>
          <Button variant="light" type="submit" onClick={() => submitForm()}>
            Submit
          </Button>

          <Link to="/browse">
            <Button variant="light" type="cancel">
              Cancel
            </Button>
          </Link>
        </Jump>
      </ListContainer>
    </>
  );
};

export default MoviePosting;

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
