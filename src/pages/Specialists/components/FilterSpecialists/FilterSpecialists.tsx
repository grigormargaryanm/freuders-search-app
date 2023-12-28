import { FC } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useAppSelector } from '../../../../hooks'
import { age, profSpeciality, rating, sex } from '../../../../constants/filtervalues'
import { ISpecialistsRequest } from '../../../../types/ISpecialist'
import { Button, FormSelect } from '../../../../ui/components'
import { ButtonWrapper, FieldsWrapper, AgeWrapper } from './styles'

type FilterProps = {
  handleFilterData: (data: FieldValues) => void
  filter: ISpecialistsRequest
}
const FilterSpecialists: FC<FilterProps> = ({ handleFilterData, filter }) => {
  const { topics } = useAppSelector((state) => state.specialists)
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleFilterData(data)
  }

  const { handleSubmit, control } = useForm<FieldValues>({
    defaultValues: {
      sex: filter.sex || '',
      ageFrom: filter.ageFrom || 18,
      ageTo: filter.ageTo || 99,
      profSpeciality: filter.profSpeciality || '',
      subjectId: filter.subjectId || '',
      ratingRange:
        filter?.ratingFrom && filter?.ratingTo ? `${filter?.ratingFrom}-${filter?.ratingTo}` : '',
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldsWrapper>
        <FormSelect
          control={control}
          name='sex'
          placeholder='Любого пола'
          label='Я ищу психолога'
          data={sex}
        />
        <AgeWrapper>
          <FormSelect control={control} name='ageFrom' label='В возрасте' prefix='От' data={age} />
          <FormSelect control={control} name='ageTo' prefix='До' data={age} />
        </AgeWrapper>
        <FormSelect
          control={control}
          name='subjectId'
          placeholder='Любая тема'
          label='Тема'
          data={topics}
        />
        <FormSelect
          control={control}
          name='profSpeciality'
          placeholder='Все варианты'
          label='Квалификация'
          data={profSpeciality}
        />
        <FormSelect
          control={control}
          name='ratingRange'
          placeholder='Любая тема'
          label='Тема'
          data={rating}
        />
        <ButtonWrapper>
          <Button type='submit' text='Показать анкеты' />
        </ButtonWrapper>
      </FieldsWrapper>
    </form>
  )
}

export default FilterSpecialists
