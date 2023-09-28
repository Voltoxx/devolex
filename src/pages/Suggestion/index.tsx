import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #fff;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const PageTitle = styled.h1`
  color: #333;
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  color: #333;
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  margin-bottom: 20px;
`;

const TxtArea = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 15px;
  margin-to
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

const Div = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

function Suggestion() {
  return (
    <Container>
      <PageTitle>Faites vos suggestions d'améliorations</PageTitle>
      <Form>
        <Label>Le sujet</Label>
        <Input type="text" />
        <Label>Votre suggestion/bug</Label>
        <TxtArea></TxtArea>
        <Div>
          <input type="checkbox" />
          <label>J'accepte les conditions d'utilisations... blablabla</label>
        </Div>
        <Div>
          <input type="checkbox" />
          <label>J'accepte de recevoir des mails de la part de Devolis</label>
        </Div>
        <SubmitButton>Envoyer</SubmitButton>
      </Form>
    </Container>
  );
}

export default Suggestion;
