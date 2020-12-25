import styled from "styled-components";

const Container = styled.div``;

type CounterProps = Record<"value" | "total", number>;

export const Counter = ({ value, total }: CounterProps) => {
  return <Container>{`${value}/${total}`}</Container>;
};
