import { theme, font } from '../../variables';
import styled from 'styled-components';
import { TextProps } from '../../types';

export const InputBase = styled.input<TextProps>`
  width: 100%;
  border: none;
  background: transparent;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  margin: 15px 0px;
  outline: 0;
  border: 1px solid ${theme.white[100]};
  font-size: ${font.sizes.sm};
  font-weight: ${font.weights.normal};
  color: ${theme.white[200]};
  font-family: ${(props) => props.family === 'primary' ? font.family.primary : font.family.secondary}
`;
