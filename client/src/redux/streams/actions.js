const actions = {
  FETCH_DATA: 'FETCH_DATA',
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  READ_STREAM: 'READ_STREAM',
  WRITE_STREAM: 'WRITE_STREAM',
  writeStream: arg => ({
    type: actions.WRITE_STREAM,
    arg
  }),
}

export default actions;