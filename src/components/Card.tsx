import styled from "styled-components";

import { noOp } from "../services";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;
  height: 150px;
  border: 10px solid black;
  border-radius: 10px;
  font-family: "Permanent Marker", cursive;
  cursor: pointer;
`;

const Question = styled.div`
  color: gray;
  text-align: center;
`;

const Response = styled.div`
  color: purple;
  text-align: center;
`;

type CardProps = {
  response: string;
  question?: string;
  onClick?: () => void;
};

export const Card = ({ question, response, onClick = noOp }: CardProps) => {
  return (
    <Container onClick={onClick}>
      {question && <Question>{question}</Question>}
      <Response>{response}</Response>
    </Container>
  );
};
