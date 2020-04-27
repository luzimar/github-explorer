import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.text};
  margin-top: 70px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.card};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    border-right: 0;
    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
  margin-bottom: 20px;

  a {
    background: ${({ theme }) => theme.card};
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: ${({ theme }) => theme.cardTitle};
      }
      p {
        font-size: 18px;
        color: ${({ theme }) => theme.cardDescription};
        margin-top: 4px;
      }
    }
    svg {
      color: ${({ theme }) => theme.text};
      margin-left: auto;
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;