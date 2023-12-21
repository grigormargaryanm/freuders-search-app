import { FC, ReactNode } from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'
import { Label, Select, SelectWrapper } from './styles'

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
    <SelectWrapper>
      {label && <Label htmlFor='selectField'>{label}</Label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
            {prefix && <span style={{ marginLeft: '12px', marginRight: '12px' }}>{prefix}</span>}
            <Select {...field}>
              {placeholder && <option value=''>{placeholder}</option>}
              {children}
            </Select>
          </div>
        )}
      />
    </SelectWrapper>
  )
}

export default FormSelect
