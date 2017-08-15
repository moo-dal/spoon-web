export const actionCreator = (type) => (
  (payload = {}, meta = {}) => ({
    type,
    payload,
    meta,
  })
)