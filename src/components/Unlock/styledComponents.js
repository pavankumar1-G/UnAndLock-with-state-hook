// Style your elements here
import styled from 'styled-components'

export const UnlockAndLockAppContainer = styled.div`
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  min-height: 100vh;
`
export const ConentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LockAndUnlockImage = styled.img`
  height: 120px;
  @media screen and (min-width: 768px) {
    height: 200px;
  }
`
export const UnAndLockStatus = styled.p`
  color: #e2e8f0;
  font-size: 18px;
  font-family: Roboto;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const UnAndLockButtonContainer = styled.div`
  margin-top: 100px;
  @media screen and (min-width: 768px) {
    margin-top: 180px;
  }
`
export const UnAndLockButton = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 8px;
  background-color: #06b6d4;
  color: #ffffff;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border: none;
  @media screen and (min-width: 768px) {
    height: 60px;
    width: 150px;
    font-size: 22px;
  }
`
