import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: calc(3rem);
`

export const CardTecnology = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  min-width: 200px;
  font-weight: 800;
  flex-direction: row;
  align-items: center;
  gap: calc(3rem);
  padding: 16px;
  /* From https://css.glass */
  background: rgba(56, 56, 56, 0.47);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.6px);
  -webkit-backdrop-filter: blur(5.6px);
  border: 1px solid rgba(56, 56, 56, 0.66);
`
