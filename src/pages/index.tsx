import { useState, useEffect } from "react";
import styled from "styled-components";

import { Card as CardComponent, Counter } from "../components";
import {
  inc,
  toggle,
  Card,
  fetchRandomCard,
  Sides,
  getRandom,
} from "../services";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  padding: 50px;
`;

const Title = styled.h1``;

const Answers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Button = styled.button`
  padding: 20px;
  margin: 0 50px;
`;

const Label = styled.div`
  margin-bottom: 10px;
`;

const StyledCounter = styled(Counter)``;

const randomSide = (): Sides => getRandom(["recto", "verso"]);

function HomePage() {
  const [card, setCard] = useState<Card | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [side, setSide] = useState<"recto" | "verso">(randomSide());
  const [isQuestionSide, setIsQuestionSide] = useState<boolean>(true);
  const [counter, setCounter] = useState<{ total: number; value: number }>({
    total: 0,
    value: 0,
  });

  useEffect(() => {
    fetchRandomCard().then((card) => {
      if (card) {
        setCard(card);
      }
      setIsLoading(false);
    });
  }, []);

  const swapSide = (side: Sides): Sides => {
    const parser: { [k in Sides]: Sides } = {
      recto: "verso",
      verso: "recto",
    };

    return parser[side];
  };

  const handleOnClick = () => {
    setSide(swapSide);
    setIsQuestionSide(toggle);
  };

  return (
    <Container>
      <Title>Let&apos;s play !</Title>
      <StyledCounter {...counter} />

      {!isLoading && card && (
        <CardComponent
          question={isQuestionSide ? card[side].question : undefined}
          response={card[side].response}
          onClick={handleOnClick}
        />
      )}

      {!isQuestionSide && (
        <Answers>
          <Label>Has you got the right answer?</Label>
          <div>
            <Button
              onClick={() => {
                setCounter((counter) => ({
                  value: inc(counter.value),
                  total: inc(counter.total),
                }));
                setIsLoading(true);
                fetchRandomCard().then((card) => {
                  if (card) {
                    setCard(card);
                  }
                  setIsLoading(false);
                });
                setIsQuestionSide(true);
                setSide(randomSide);
              }}
            >
              Yes
            </Button>
            <Button
              onClick={() => {
                setCounter((counter) => ({
                  ...counter,
                  total: inc(counter.total),
                }));
                setIsLoading(true);
                fetchRandomCard().then((card) => {
                  if (card) {
                    setCard(card);
                  }
                  setIsLoading(false);
                });
                setIsQuestionSide(true);
                setSide(randomSide);
              }}
            >
              No
            </Button>
          </div>
        </Answers>
      )}
    </Container>
  );
}

export default HomePage;
