import styled, { css } from 'styled-components';
import { font, theme } from '../../variables';
import { ButtonProps, ColorTheme, ColorThemeWeight } from '../../types';
//import { objectKeys } from '../../../utils/functions';



export const BaseButton = styled.button<ButtonProps>`
  ${({ variant, color = 'white' }) => {
    const colorDuplicate = color as keyof ColorTheme;
    const col: string = Object.keys(theme).includes(color)
      ? theme[colorDuplicate][100 as never]
      : color;

    switch (variant) {
      case 'solid':
        return css`
          border: none;
          color: ${col};
          svg,
          path,
          * {
            stroke: ${col};
            color: ${col};
          }
        `;
      case 'outlined':
        return css`
          background: transparent;
          color: ${color};
          svg,
          path,
          * {
            color: ${col};
          }
        `;
      case 'text':
        return css`
        background: transparent;
          border: none;
          svg,
          path,
          * {
            color: ${col};
          }
        `;
      default:
        return css`
          border: none;
          color: ${col};
          svg,
          path,
          * {
            color: ${col};
            stroke: ${col};
          }
        `;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: ${(props) => props.bg || 'white'};
  border-radius: ${(props) => props.radius || '0'};
  margin: ${(props) => props.margin || '0.5rem 0'};
  font-family: ${(props) => 
    props.family === 'primary' ? font.family.primary : font.family.secondary
  };
  font-size: ${font.sizes.base};
  font-weight: ${font.weights.semibold};
  width: ${props => props.width || '100%'};
  cursor: pointer;
  :active {
    transform: scale(0.97);
    transition: all 0.5s;
  }
`;

export const IconButton = styled(BaseButton) <
  ButtonProps & { toolTipTitle?: string }
  >`
  padding: 0;
  // height: ${({ size }) => size || '3.3125rem'};
  width: ${({ size }) => size || '3.3125rem'};

  ${({ color }) => {
    return css`
      svg,
      path,
      * {
        color: ${theme[color as keyof ColorTheme ?? 'white'][500 as never]};
        stroke: ${theme[color as keyof ColorTheme ?? 'white'][500 as never]};
      }
    `;
  }};

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1rem;
  &:hover {
    ${({ toolTipTitle }) => {
    return (
      toolTipTitle &&
      css`
          &::after {
            font-size: ${font.sizes.xs};
            content: '${toolTipTitle ?? ''}';
            width: max-content;
            position: absolute;
            top: -2.5rem;
            background-color: ${theme.grey[500]};
            font-weight: ${font.weights.bold};
            color: ${theme.white[100]};
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
          }
        `
    );
  }}
  }
`;



