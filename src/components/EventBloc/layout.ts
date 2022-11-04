import styled from 'styled-components';

export const Event = styled.div<{ duration: number; startingMin: number; color: string}>`
  position: absolute;
  background-color: ${({ color }) => color};
  height: calc((${({ duration }) => duration} * (100vh / 13)) / 60);
  width: 100%;
  margin-top: ${({ startingMin }) => startingMin}px;
`;
