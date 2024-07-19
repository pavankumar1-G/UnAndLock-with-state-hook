// Write your code here
import {useState} from 'react'

import {
  UnlockAndLockAppContainer,
  ConentContainer,
  LockAndUnlockImage,
  UnAndLockStatus,
  UnAndLockButtonContainer,
  UnAndLockButton,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setUnAndLock] = useState(true)

  const onClickButton = () => {
    setUnAndLock(prevState => !prevState)
  }

  const unAndLock = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altLockText = isLocked ? 'lock' : 'unlock'
  const unAndLockStatus = isLocked
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'

  const buttonText = isLocked ? 'Unlock' : 'Lock'

  return (
    <UnlockAndLockAppContainer>
      <ConentContainer>
        <LockAndUnlockImage src={unAndLock} alt={altLockText} />
        <UnAndLockStatus>{unAndLockStatus}</UnAndLockStatus>
        <UnAndLockButtonContainer>
          <UnAndLockButton type="button" onClick={onClickButton}>
            {buttonText}
          </UnAndLockButton>
        </UnAndLockButtonContainer>
      </ConentContainer>
    </UnlockAndLockAppContainer>
  )
}
export default Unlock
