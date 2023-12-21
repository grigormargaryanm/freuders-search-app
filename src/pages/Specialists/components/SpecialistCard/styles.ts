import styled, { css } from 'styled-components'

const subjectGeneralStyled = css`
  font-style: italic;
  font-size: 18px;
  color: #666;
`
export const CardWrapper = styled.div`
  position: relative;
`
export const RatingWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  width: 52px;
  height: 52px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background: white;
`
export const StyledText = styled.span<{
  $fs?: number
}>`
  font-size: ${(props) => (props.$fs ? `${props.$fs}px` : '8px')};
  color: #000;
`

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`
export const PersonalInfo = styled.div`
  margin-top: 16px;
`

export const SubjectWrapper = styled.div`
  margin-top: 8px;
`
export const DefaultSubject = styled.span`
  ${subjectGeneralStyled}
`
export const SubjectCount = styled.span`
  ${subjectGeneralStyled};
  opacity: 0.5;
  margin-left: 8px;
`

export const OnlineBadge = styled.div`
  width: 12px;
  height: 12px;
  background: #37b86b;
  border-radius: 50%;
  display: inline-block;
`
