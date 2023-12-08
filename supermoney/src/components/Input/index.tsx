import React, { useCallback } from 'react'
import { Input as InputAntD } from 'antd';
import useInput from '../../hooks/useInput';


function Input({ ...restArgs }: any) {
  const { inputs, onChange } = useInput('')

  const memonizedChange = useCallback(onChange , [inputs, onChange])
  //console.log('INPUT HOOK OF', fieldName, inputs)

  return <InputAntD value={inputs} onChange={memonizedChange} {...restArgs}/>
}

export default React.memo(Input)