import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  header {
    top: 0;
  }
  main {
    margin: 15rem clamp(2rem, 14vw, 5.6rem) 0;

    flex-grow: 1;

    > div:nth-child(1) {
      a {
        font-size: 2.4rem;

        svg {
          width: 3.2rem;
          height: 3.2rem;
        }
      }
    }
  }

  footer {
    margin-top: 5.4rem;
  }

  @media screen and (min-width: 769px) {
    main {
      margin: 12.8rem auto 0;
      padding-inline: 7%;

      > div:nth-child(2) {
        flex-direction: row;
        gap: 4.8rem;

        > div:first-child {
          img {
            width: clamp(34rem, 37vw, 39rem);
            height: clamp(34rem, 37vw, 39rem);

            margin-top: 0;
          }

          margin-top: 4.2rem;
        }

        > div:last-child {
          max-width: 68.7rem;
          align-items: start;

          h3 {
            text-align: start;
            font-size: 4rem;
          }

          p {
            font-size: 2.4rem;
            text-align: start;
          }

          > div:nth-child(3) {
            justify-content: left;
          }

          >button:last-child {
            width: 13.1rem;
            padding: 1.2rem 2.4rem;
          }

          > div:nth-child(4) {
            > div:first-child {
              button {
                width: 2.4rem;
                height: 2.4rem;

                svg {
                  width: 2.4rem;
                  height: 2.4rem;
                }
              }

              input {
                font-size: 2rem;
              }
            }

             > button {
              width: max-content;

              font-size: 1.4rem;
              line-height: 2.4rem;

              padding: 1.2rem 2.4rem;
            }
          }
          
        }
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2.4rem;

  > div:first-child {
    > img {
      width: clamp(20rem, 63vw, 26.3rem);
      height: clamp(20rem, 63vw, 26.3rem);

      border-radius: 50%;

      margin-top: 1.6rem;
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 2.4rem;

    h3 {
      font-size: 2.7rem;
      font-weight: 500;
      line-height: 140%;
      text-align: center;
    }

    p {
      text-align: center;
      line-height: 140%;
    }

    > div:nth-child(3) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2.4rem;

      margin-bottom: 2.4rem;
    }

    > div:nth-child(4) {
      width: 100%;

      display: flex;
      align-items: center;
      gap: 1.6rem;

      > div:nth-child(1) {
        input {
          font-size: 2.2rem;
          font-weight: 700;
          line-height: 160%;
        }

        > button {
          width: 2.7rem;
          height: 2.7rem;

          svg {
            width: 2.7rem;
            height: 2.7rem;
          }
        }

        > button:nth-child(3) {
          margin-left: 0.4rem;
        }
      }

      > button {
        font-size: 1rem;
        padding: 0.8rem;
        line-height: 1.6rem;
      }
    }
  }
`
