import React from 'react';
import { ReactComponent as MoonIcon } from '../../assets/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/sun.svg';
import { ToggleContainer } from './styles';

export default function Toggle({ lightTheme, theme, toggleTheme }) {
  return (
    <ToggleContainer onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
}
