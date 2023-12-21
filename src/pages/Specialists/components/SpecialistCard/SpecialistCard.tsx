import { FC } from 'react'
import { ISpecialist, OnlineStatuses } from '../../../../types/ISpecialist'
import {
  CardWrapper,
  RatingWrapper,
  StyledText,
  Image,
  PersonalInfo,
  DefaultSubject,
  SubjectCount,
  SubjectWrapper,
  OnlineBadge,
} from './styles'
import { getLastActiveTime } from './utils'

type SpecialistType = {
  specialist: ISpecialist
}

const SpecialistCard: FC<SpecialistType> = ({
  specialist: {
    photoUrl,
    rating,
    name,
    age,
    defaultSubjectName,
    subjectsCount,
    onlineStatus,
    lastActivityTime,
    sex,
  },
}) => {
  return (
    <CardWrapper>
      <Image src={photoUrl} />
      <RatingWrapper>
        <StyledText>РЕЙТИНГ</StyledText>
        <StyledText $fs={rating ? 24 : 16}>{rating ? rating : 'NEW'}</StyledText>
      </RatingWrapper>
      <PersonalInfo>
        <StyledText $fs={26}>{`${name}, ${age}`}</StyledText>
        {onlineStatus === OnlineStatuses.ONLINE && <OnlineBadge />}
        <SubjectWrapper>
          <DefaultSubject>{defaultSubjectName}</DefaultSubject>
          {!!subjectsCount && <SubjectCount>{`и еще ${subjectsCount} темы`}</SubjectCount>}
        </SubjectWrapper>
        <SubjectCount>{getLastActiveTime(lastActivityTime, sex)}</SubjectCount>
      </PersonalInfo>
    </CardWrapper>
  )
}

export default SpecialistCard
