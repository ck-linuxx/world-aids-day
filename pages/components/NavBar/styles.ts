import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 6.25rem;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  background: #FFF;
  
  padding-top: 2rem;

  > img {
    height: 1.75rem;
    width: 1.75rem;
  }  

  img:hover{
    cursor: pointer;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 4.1875rem;
  gap: 1.5rem;

  > img {
    height: 1.75rem;
    width: 1.75rem;

  }
  
  > img:hover{
    cursor: pointer;
  }
`;