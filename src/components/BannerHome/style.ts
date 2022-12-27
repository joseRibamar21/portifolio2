import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const Image = styled.image`
  width: 100%;
  min-height: 700px;
  object-fit: cover;
  z-index: 0;
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const Row = styled.div`
  position: absolute;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  gap: calc(3rem);
`

export const Column = styled.div`
  display: flex;
  padding: 0px 5px 0px 5px;
  justify-content: center;
  gap: calc(3%);
  flex-direction: column;
`
export const Foto = styled.image`
  width: 20%;
  /* width: 310px;
  height: 386px; */
  min-width: 300px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
