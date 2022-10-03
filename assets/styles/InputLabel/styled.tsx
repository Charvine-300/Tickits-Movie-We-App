import styled from 'styled-components';
import { TextProps } from '../../types';
import { font, theme } from '../../variables';

export const InputLabel = styled.label<TextProps>`
  font-size: ${font.sizes.base};
  color: ${(props) => props.color || theme.white[100]};
  font-weight: ${font.weights.medium};
  text-align: left;
  margin: 0.5rem 0;
  font-family: ${(props) => props.family === 'primary' ? font.family.primary : font.family.secondary};
`;