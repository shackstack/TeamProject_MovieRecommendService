import React from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const MoviePosting = () => {
  return (
    <>
      <Form>
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
        <div>
          <Link to="/">
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Link>
          <Link to="/">
            <Button variant="dark" type="Cancel">
              Cancel
            </Button>
          </Link>
        </div>
      </Form>
      <Home />
    </>
  );
};

export default MoviePosting;
