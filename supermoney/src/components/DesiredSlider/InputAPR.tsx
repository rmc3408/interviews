import * as S from './style'
import { Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';

const marks: SliderMarks = {
  4: '4%',
  36: '36%',
};

interface InputAPRProps {
  onChange: (value: number) => void
  value: number
}

function InputAPR({ onChange, value }: InputAPRProps) {

  return (
    <S.Wrapper>
      <div>
        <S.Title>Desired APR</S.Title>
        <S.InputValue>{value}.00%</S.InputValue>
      </div>
      <div>
        <Slider
          min={4}
          max={36}
          marks={marks}
          tooltip={{ formatter: null }}
          defaultValue={value}
          onChange={onChange} />
      </div>
    </S.Wrapper>
  )
}

export default InputAPR