import React from "react";
import Form from "./components/Form";
import TodoItems from "./components/TodoItems";
import "./App.css";
import {Container } from "@material-ui/core"

function App() {
  return (
    <Container maxWidth="xs" style={{marginTop: "1em"}}>
      <Form />
      <TodoItems />
    </Container>
  );
}

export default App;
