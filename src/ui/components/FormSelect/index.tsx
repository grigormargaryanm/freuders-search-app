import { FC } from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'
import { ITopic } from '../../../types/ITopic'
import { FilterDataType } from '../../../types/Filter'
import { Label, PrefixWrapper, Select, SelectWrapper, Wrapper } from './styles'

/* eslint-disable  @typescript-eslint/no-explicit-any */
type SelectPropsType = {
  control: Control<FieldValues, any>
  name: string
  label?: string
  placeholder?: string
  prefix?: string
  data: ITopic[] | FilterDataType[]
}
const FormSelect: FC<SelectPropsType> = ({
  control,
  name,
  label,
  placeholder = '',
  prefix,
  data,
}) => {
  const isTopic = (data: ITopic | FilterDataType): data is ITopic => {
    return 'name' in data
  }
  const renderOptions = (data: ITopic[] | FilterDataType[]) => {
    return (
      <>
        {data.map((item) => {
          if (isTopic(item)) {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            )
          } else {
            return (
              <option value={item.value} key={item.value}>
                {item.title}
              </option>
            )
          }
        })}
      </>
    )
  }
  return (
    <SelectWrapper $hasPrefix={!!prefix}>
      {label && <Label $hasPrefix={!!prefix}>{label}</Label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Wrapper>
            {prefix && <PrefixWrapper>{prefix}</PrefixWrapper>}
            <Select {...field}>
              {placeholder && <option value=''>{placeholder}</option>}
              {renderOptions(data)}
            </Select>
          </Wrapper>
        )}
      />
    </SelectWrapper>
  )
}

export default FormSelect
