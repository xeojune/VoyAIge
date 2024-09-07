import styled from "styled-components";

export const RegisterInputWrapper = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
`
export const AuthWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const SuccessContentWrap = styled.div`
  margin-top: 26px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-100px);
`

export const SuccessHeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`
export const SuccessHeader = styled.p`
  font-size: 24px;
  color: #333; /* Adjust the color as needed */
  text-align: center;
`