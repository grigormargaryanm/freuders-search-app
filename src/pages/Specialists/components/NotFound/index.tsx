import { Image, NotFoundWrapper, StyledText } from './styles'

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <Image src='/assets/empty_search_icon.svg' alt='empty' />
      <StyledText>К сожалению, нет анкет с такими параметрами</StyledText>
    </NotFoundWrapper>
  )
}

export default NotFound
