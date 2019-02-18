/**
 * Request login
 * Exapmle: loginRequested({ email: 'admin@gmail.com', password: 'admin'})
 * @param {object} Params
 * @returns {object}
 */
export const loginRequested = (params) => ({
  type: 'LOGIN_REQUESTED',
  payload: params
})
