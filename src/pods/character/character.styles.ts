import { css } from '@emotion/css';

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const characterCardContent = css`
  display: flex;
  gap: 50px;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
export const cardImage = css`
  width: 150px;
  height: 150px;
  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
  }
`;
