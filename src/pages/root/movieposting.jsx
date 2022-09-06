import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { movieListing } from "src/store/reducers/moviecreater";

const MoviePosting = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const [star, setStar] = useState("");

  const submitForm = () => {
    dispatch(movieListing({ title, url, content, star }));
  };

  useEffect(() => {});

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
          <option value="" selected>
            How much do you want to recommend?
          </option>
          <option value="⭐">⭐</option>
          <option value="⭐⭐">⭐⭐</option>
          <option value="⭐⭐⭐">⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
        </select>
        <Jump>
          <Link to="/browse">
            <Button variant="light" type="submit" onClick={() => submitForm()}>
              Submit
            </Button>
          </Link>
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
