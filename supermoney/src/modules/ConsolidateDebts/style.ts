import styled from 'styled-components'


export const AddingMoreDebt = styled.h4`
  color: #06A9DB;
  font-size: 16px;
  font-weight: 400;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "top top"
    "total month";
  width: 662px;
  height: 404px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.00) inset;
  border: 1px solid #C9C9C9;
`

export const ContainerInput = styled.div`
  grid-area: top;
  color: #06A9DB;
  padding: 17px 24px;
  box-sizing: border-box;
  height: 246px;
`

export const ContainerTotal = styled.div`
  grid-area: total;
  height: 158px;
  border-top: 1px solid #C9C9C9;
  padding: 0;
  
  & div > p {
    display: inline-block;
    font-size: 16px;
    width: 64%;
    padding-left: 24px;
  }
  & div > span {
    display: inline-block;
    font-size: 20px;
    width: 20%;
  }
  & div:first-child > span {
    font-weight: 600;
    color: #06A9DB;
    font-size: 20px;
  }

  & div:last-child {
    background-color: #f0fbf6;
  }
  
  & div:last-child > p, div:last-child > span {
    font-weight: 600;
  }

  & div:last-child > span {
    color: #00B290;
    font-size: 22px;
  }

`

export const ContainerMonth = styled.div`
  grid-area: month;
  height: 158px;
  border-top: 1px solid #C9C9C9;
  border-left: 1px solid #C9C9C9;
  padding: 0;

  & div > p {
    display: inline-block;
    font-size: 16px;
    width: 64%;
    padding-left: 24px;
  }
  & div > span {
    display: inline-block;
    font-size: 20px;
    width: 20%;
  }
  & div:first-child > span {
    font-weight: 600;
    color: #06A9DB;
    font-size: 20px;
  }

  & div:last-child {
    background-color: #f0fbf6;
  }
  
  & div:last-child > p, div:last-child > span {
    font-weight: 600;
  }

  & div:last-child > span {
    color: #00B290;
    font-size: 22px;
  }
`

export const Title = styled.h1`
  font-size: 14px;
  font-weight: 600;
  color: #0D0B2D;
`;

export const SubTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  color: #504F54;
`;