import styled from "styled-components";


export const SkillsTitle = styled.h2`
  font-size: ${props=> props.theme.sizes.xl};
  margin-left: 2%;
`
export const ListSkills = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x;
  scroll-snap-type: x proximity;
  gap: 30px;
`
