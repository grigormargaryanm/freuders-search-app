import styled, { css } from 'styled-components'

const subjectGeneralStyled = css`
  font-style: italic;
  font-size: 18px;
  color: #666;

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 992px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
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
  background: #fff;

  @media (max-width: 992px) {
    height: 44px;
    width: 44px;
    top: 8px;
    left: 8px;
  }

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
  }

  @media (max-width: 568px) {
    height: 28px;
    width: 28px;
    top: 4px;
    left: 4px;
  }
`
export const StyledText = styled.span<{
  $fs?: number
  $isNew?: boolean
}>`
  font-size: ${(props) => (props.$fs ? `${props.$fs}px` : '8px')};
  color: #000;

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: ${(props) => (props.$isNew ? '16px' : props.$fs ? '20px' : '8px')};
  }

  @media (min-width: 569px) and (max-width: 767px) {
    font-size: ${(props) => (props.$isNew ? '12px' : props.$fs ? '16px' : '8px')};
  }

  @media (max-width: 568px) {
    font-size: ${(props) => (props.$isNew ? '8px' : props.$fs ? '14px' : '4px')};
  }
`

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`
export const PersonalInfo = styled.div`
  margin-top: 16px;

  @media (max-width: 768px) {
    margin-top: 12px;
  }

  @media (max-width: 768px) {
    margin-top: 8px;
  }
`

export const SubjectWrapper = styled.div`
  margin-top: 8px;

  @media (max-width: 768px) {
    margin-top: 2px;
  }
`
export const DefaultSubject = styled.span`
  ${subjectGeneralStyled}
`
export const SubjectCount = styled.span`
  ${subjectGeneralStyled};
  opacity: 0.5;
  margin-left: 8px;

  @media (max-width: 568px) {
    display: none;
  }
`
export const ActivityTime = styled.span`
  ${subjectGeneralStyled};
  opacity: 0.5;
  margin-top: 8px;
  display: block;

  @media (max-width: 568px) {
    display: none;
  }
`
export const OnlineBadge = styled.div`
  width: 12px;
  height: 12px;
  background: #37b86b;
  border-radius: 50%;
  display: inline-block;
`
