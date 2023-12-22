import React, { useState } from 'react'
import './input.scss';
import { Button, Icon, Input, InputDomRef, SuggestionItem, Ui5CustomEvent } from '@ui5/webcomponents-react';
import '@ui5/webcomponents/dist/features/InputSuggestions.js';
import { useLazyGetTitlesQuery } from '../../store/slices/titles.slice';
import { useAppDispatch } from '../../store/storeHooks';
import { create } from '../../store/slices/fav.slice'
import { InputSuggestionItemSelectEventDetail } from '@ui5/webcomponents/dist/Input';


interface InputAutocompleteProps {
  setMovieName: (name: string) => void
}
function InputAutocomplete({ setMovieName }: InputAutocompleteProps) {
  const [ onChangeValue, setOnChange] = useState('')
  const [ getTitles, { data, isSuccess } ] = useLazyGetTitlesQuery()
  const dispatch = useAppDispatch()


  function handleSelectComplete(e: Ui5CustomEvent<InputDomRef, InputSuggestionItemSelectEventDetail>) {
    const value: string = e.target.value!
    setMovieName(value)
    dispatch(create(value))
  }

  function handleChanging(e: Ui5CustomEvent<InputDomRef, never>) {
    const { value } = e.target
    if (value && value.length > 2) {
      getTitles(value)
    }
  }

  function handleOnSearch() {
    const isOnList = data.findIndex((item: any) => item.title === onChangeValue)
    if (isOnList > -1) {
      setMovieName(onChangeValue)
      dispatch(create(onChangeValue))
    } else {
      alert('Data not Found')
    }
  }

  function handleReset() {
    setMovieName('')
    setOnChange('')
  }

  return (
    <div className='input-container'>
      <Input
        icon={<Icon name="theater" />}
        onInput={handleChanging}
        onChange={(e: any) => setOnChange(e.target.value)}
        value={onChangeValue}
        onSuggestionItemSelect={handleSelectComplete}
        placeholder="type at least 4 character to show suggestions"
        showSuggestions
        className='input-search'
      >
        {isSuccess && data.map((item: any) => <SuggestionItem key={item.id} text={item.title} />)}
      </Input>
      <div>
        <Button className='input-button' onClick={handleOnSearch}>Search</Button>
        <Button className='input-button' onClick={handleReset}>Reset</Button>
      </div>
    </div>
  )
}

export default InputAutocomplete
