import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.TINTS.TOMATO_100};
  border-radius: 0.5rem;
  padding: 1.2rem 3.2rem;

  svg {
    width: 2.1rem;
    height: 2.1rem;
    margin-right: 0.54rem;
  }

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};
  border: none;
  
  transition: background-color .3s ease;

  &:disabled {
    background: ${({ theme }) => theme.COLORS.TINTS.TOMATO_400};
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.COLORS.TINTS.TOMATO_200};
  }
`
