import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  main {
    margin: 12.5rem clamp(1.2rem, 7vw, 8rem) 5.3rem;

    flex-grow: 1;

    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 10px #0d161b inset !important;
      -webkit-text-fill-color: #c4c4cc !important;
    }

    div:nth-child(1) {
      a {
        margin-bottom: 2.4rem;
      }
    }
  }

  @media screen and (min-width: 769px) {
    main {
      > div:nth-child(1) {
        font-size: 2.4rem;

        a {
          > svg {
            width: 3.2rem;
            height: 3.2rem;
          }
        }
      }

      > form {
        gap: 3.2rem;

        > div:nth-child(2) {
          width: 100%;
          flex-direction: row;
          align-items: center;

          > label {
            width: 25%;
          }

          > div:nth-child(2) {
            width: 43%;
          }

          > div:nth-child(3) {
            width: 30%;
            select {
              background-color: ${({ theme }) => theme.COLORS.DARK.DARK_800};
            }
          }

        }
        
        > div:nth-child(3) {
          flex-direction: row;
          align-items: flex-end;
          
          > div:nth-child(1) {
            width: 75%;
          }
          
          > div:nth-child(2) {
            width: 25%;
          }
        }
        
        > div:nth-child(5) {
          align-self: self-end;

          button:first-child {
            width: 13.5rem;
          }

          button:nth-child(2) {
            width: 17.2rem;
          }
        }

        > button:last-child {
          width: 17.2rem;
          align-self: self-end;

          padding: 1.2rem 2.4rem;
        }
      }
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  label {
    color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_400};
  }

  h3 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > label {
      > span {
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_400};
      }

      > div {
        height: 4.8rem;

        display: flex;
        align-items: center;
        gap: 0.8rem;

        font-family: 'Poppins', sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_100};

        padding: 1.2rem 3.2rem;
        margin-top: 1.6rem;
        background: ${({ theme }) => theme.COLORS.DARK.DARK_800};

        border-radius: 0.5rem;

        svg {
          min-width: 2.8rem;
          min-height: 2.8rem;
        }

        input {
          display: none;
        }
      }
    }

    > div:nth-child(2) {
      > div {
        background: ${({ theme }) => theme.COLORS.DARK.DARK_800};
        margin-top: 1.6rem;
      }
    }

    > div:nth-child(3) {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      label:nth-child(4) {
        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_400};
      }

      select {
        height: 4.8rem;

        appearance: none;
        -webkit-appearance: none;

        background-image: url("data:image/svg+xml,%3Csvg width='24' height='25' viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.4545 8.75358C4.89384 8.31424 5.60616 8.31424 6.0455 8.75358L12 14.7081L17.9545 8.75358C18.3938 8.31424 19.1062 8.31424 19.5455 8.75358C19.9848 9.19292 19.9848 9.90523 19.5455 10.3446L12.7955 17.0946C12.3562 17.5339 11.6438 17.5339 11.2045 17.0946L4.4545 10.3446C4.01517 9.90523 4.01517 9.19292 4.4545 8.75358Z' fill='%23C4C4CC'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: right 16px top 50%;

        background-color: ${({ theme }) => theme.COLORS.DARK.DARK_900};

        border-radius: 0.5rem;
        border: none;
        padding: 1.6rem;

        color: ${({ theme }) => theme.COLORS.LIGHT.LIGHT_400};
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 160%;

        outline: none;
      }
    }
  }

  > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      > div {
        display: flex;
        flex-wrap: wrap;
        gap: 1.6rem;
        margin: 0;
        padding: 0.8rem;

        background-color: ${({ theme }) => theme.COLORS.DARK.DARK_800};
        border-radius: 0.5rem;
      }
    }

    > div:nth-child(2) {
      div {
        background: ${({ theme }) => theme.COLORS.DARK.DARK_800};

        margin-top: 1.6rem;

        input::-webkit-inner-spin-button,
        input::-webkit-outer-spin-button {
          -webkit-appearance: none;
          appearance: none;
        }
      }
    }
  }

  > div:nth-child(4) {
    textarea {
      margin-top: 1.6rem;
    }
  }

  > div:nth-child(5) {
    display: flex;
    gap: 3.2rem;

    > button {
      padding-inline: 2.4rem;
    }

    button:first-child {
      width: 48%;
      background-color: ${({ theme }) => theme.COLORS.DARK.DARK_800};
    }

    button:nth-child(2) {
      width: 52%;
    }
  }
`
