import styled from 'styled-components'

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  margin-left: 8px;
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 700;
`

export const Select = styled.select`
  height: 52px;
  font-size: 20px;
  padding: 12px;
  background: #fff;
  border: 1px solid #ccc;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  &&:focus-visible {
    border: 1px solid #ccc !important;
  }
`
