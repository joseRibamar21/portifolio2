import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  color: #000610;
  gap: 20px;
  padding: 40px;
  margin-top: 20px;
  margin-bottom: 40px;
`

export const Button = styled.div`
  display: flex;
  background-color: #000610;
  border-radius: 30px;
  justify-content: center;
  font-size: ${props=> props.theme.sizes.xl};
  font-weight: 800;
  color: ${props=> props.theme.colors.text};
  width: 100%;
  padding: 10px 10px 10px 10px
`
export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
