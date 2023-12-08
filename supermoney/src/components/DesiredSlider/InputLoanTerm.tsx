import * as S from './style'
import { Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';

const marks: SliderMarks = {
  12: '12 mo.',
  60: '60mo.',
};

interface InputLoanTermProps {
  onChange: (value: number) => void
  value: number
}

function InputLoanTerm({ onChange, value }: InputLoanTermProps) {
  return (
    <S.Wrapper>
      <div>
        <S.Title>Desired Loan Term</S.Title>
        <S.InputValue>{value} months</S.InputValue>
      </div>
    <div>
      <Slider
        min={12}
        max={60}
        marks={marks}
        tooltip={{ formatter: null }} 
        defaultValue={value} 
         onChange={onChange} />
    </div>
  </S.Wrapper>
  )
}

export default InputLoanTerm