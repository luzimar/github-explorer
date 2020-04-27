import styled from 'styled-components';

export const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  overflow: hidden;
  position: relative;
  width: 100px;
  height: 40px;

  svg {
    height: 30px;
    width: 2.5rem;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ theme }) =>
        theme.lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }

    &:nth-child(2) {
      transform: ${({ theme }) =>
        theme.lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;
