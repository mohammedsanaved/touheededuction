import styled from "styled-components";
export const Styles = styled.div`
  .CardHeader {
    display: flex;
    justify-content: center;
    font-size: 36px;
    font-weight: 700;
    color: #000;
    margin-bottom:73px;
  }
  .cards {
    padding: 78px 0 85px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cardsRow {
    justify-content: center;
    row-gap:70px;
  }

  @media screen and (min-width: 800px) {
    .cardsRow{
      gap:10px;
    }

  }


`;
