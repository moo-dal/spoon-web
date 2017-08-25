/* External dependencies */
import uuid from 'uuid'

export function actionCreator(requestType) {
  return (payload, meta = {}) => ({
    uuid: uuid.v4(),
    type: requestType,
    payload,
    meta,
  })
}

export function actionCreatorWithPromise(requestType) {
  return (payload, meta = {}) => ({
    uuid: uuid.v4(),
    type: requestType,
    meta: {
      ...meta,
      lifecycle: {
        resolve: `${requestType}_SUCCESS`,
        reject: `${requestType}_ERROR`,
      },
    },
    payload,
  })
}
