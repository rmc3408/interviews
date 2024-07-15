export const removeQuantity = (st, foundIdx, id) => {
  let removedState = [...st];
  const removedAmountItem = removedState[foundIdx].amount - 1
  if (removedAmountItem === 0) {
    const filteredItems = removedState.filter(item => item.id !== id)
    removedState = [...filteredItems]
  } else {
    removedState.splice(foundIdx, 1, { ...removedState[foundIdx], amount: removedAmountItem })
  }
  return removedState
}

export const addQuantity = (st, foundIdx) => {
  let addedState = [...st]
  const addedAmountItem = addedState[foundIdx].amount + 1
  addedState.splice(foundIdx, 1, { ...addedState[foundIdx], amount: addedAmountItem })
  return addedState
}