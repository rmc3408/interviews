import React, { createRef } from 'react'
import * as TestUtils from 'react-dom/test-utils'
import CheckboxWithLabel from '.'

test('CheckboxWithLabel changes the text after click', () => {
  const checkboxLabelRef: React.RefObject<HTMLLabelElement> = createRef()
  const checkboxInputRef: React.RefObject<HTMLInputElement> = createRef()

  // Render a checkbox with label in the document
  TestUtils.renderIntoDocument(
    <CheckboxWithLabel
      labelRef={checkboxLabelRef}
      inputRef={checkboxInputRef}
      labelOn='On'
      labelOff='Off'
    />,
  )

  const labelNode = checkboxLabelRef.current!
  const inputNode = checkboxInputRef.current as Element

  // Verify that it's Off by default
  expect(labelNode.textContent).toBe('Off')

  // Simulate a click and verify that it is now On
  TestUtils.Simulate.change(inputNode)
  expect(labelNode.textContent).toBe('On')
})
