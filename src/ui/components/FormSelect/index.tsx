import { FC, ReactNode } from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'
import { Label, PrefixWrapper, Select, SelectWrapper, Wrapper } from './styles'

/* eslint-disable  @typescript-eslint/no-explicit-any */
type SelectPropsType = {
  control: Control<FieldValues, any>
  name: string
  label?: string
  placeholder?: string
  prefix?: string
  children: ReactNode
}
const FormSelect: FC<SelectPropsType> = ({
  control,
  name,
  label,
  placeholder = '',
  children,
  prefix,
}) => {
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
              {children}
            </Select>
          </Wrapper>
        )}
      />
    </SelectWrapper>
  )
}

export default FormSelect
