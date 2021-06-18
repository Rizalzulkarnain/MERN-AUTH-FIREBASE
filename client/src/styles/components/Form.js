import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: grid;
  justify-content: center;
  border: 2px solid black;
  border-radius: 7px;
  margin: 5% auto;
  width: fit-content;
  padding: 0 35px 35px 35px;
`;

export const FormDiv = styled.div`
  grid-gap: 5px;

  h3 {
    text-align: center;
  }

  label {
    margin-right: 10px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;
