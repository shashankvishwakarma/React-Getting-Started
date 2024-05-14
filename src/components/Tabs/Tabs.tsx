// @ts-ignore
export default function Tabs({children, buttons, ButtonsContainer = 'menu'}) {
  //const ButtonsContainer = buttonsContainer
  // @ts-ignore
  return (
      <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
      </>
  )
}