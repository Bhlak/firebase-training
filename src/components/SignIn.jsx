import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SignIn({ admitUser }) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    admitUser({ mail: mail, password: password });
  };

  return (
    <Container>
      <FormStyle onSubmit={handleSubmit}>
        <input
          onChange={(e) => setMail(e.target.value)}
          type="email"
          value={mail}
        />
        <input onChange={(e) => setPassword(e.target.value)} type="password" />
        <button>Sign In</button>
        <h4>
          New User? <Link to={"/signup"}>Sign Up</Link>
        </h4>
      </FormStyle>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormStyle = styled.form`
  width: 35%;
  height: 30%;
  box-shadow: 1px 1px 1px lightgray, -1px -1px 1px lightgray;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;
  button {
    align-self: flex-end;
    width: 30%;
  }
  input {
    outline: none;
  }
`;

export default SignIn;
