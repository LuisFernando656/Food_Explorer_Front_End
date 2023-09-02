import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 14.4rem;

  background: ${({theme}) => theme.COLORS.DARK.DARK_800};
  color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_400};
  font-size: 1.6rem;

  border: none;
  resize: none;
  outline: none;

  border-radius: .8rem;
  padding: 1.4rem;

  &::placeholder {
    color: ${({theme}) => theme.COLORS.LIGHT.LIGHT_500}
  }
`