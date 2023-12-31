import styled from 'styled-components'

export const SelectWrapper = styled.div<{ $hasPrefix: boolean }>`
  display: flex;
  flex-direction: column;
  @media (min-width: 568px) and (max-width: 768px) {
    width: ${(props) => props.$hasPrefix && '50%'};
  }

  @media (max-width: 568px) {
    flex-direction: ${(props) => props.$hasPrefix && 'row'};
  }
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const PrefixWrapper = styled.span`
  margin-left: 12px;
  margin-right: 12px;

  @media (min-width: 768px) and (max-width: 1200px) {
    margin-left: 8px;
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    margin-left: 8px;
    margin-right: 8px;
    font-size: 12px;
  }
`

export const Label = styled.label<{ $hasPrefix: boolean }>`
  margin-left: 8px;
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 568px) {
    margin-bottom: ${(props) => props.$hasPrefix && '0'};
    display: flex;
    align-items: center;
  }
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
  width: 100%;
  min-width: 88px;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 0.65rem auto;

  @media (min-width: 768px) and (max-width: 1200px) {
    font-size: 16px;
    height: 48px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    height: 40px;
  }
  @media (max-width: 568px) {
    min-width: 60px;
  }
`
