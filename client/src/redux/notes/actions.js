const actions = {
  FETCH_DATA: 'FETCH_DATA',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  CREATE_ITEM: 'CREATE_ITEM',
  CREATE_ITEM_SUCCESS: 'CREATE_ITEM_SUCCESS',
  REMOVE_ITEM: 'REMOVE_ITEM',
  REMOVE_ITEM_SUCCESS: 'REMOVE_ITEM_SUCCESS',
  createItem: data => ({
    type: actions.CREATE_ITEM,
    data
  }),
  removeItem: data => ({
    type: actions.REMOVE_ITEM,
    data
  }),
}

export default actions;