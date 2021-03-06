import isFunction from 'lodash/isFunction'

// ===================================================================

const createAction = (() => {
  const { defineProperty } = Object
  const noop = function () {
    if (arguments.length) {
      throw new Error('this action expects no payload!')
    }
  }

  return (type, payloadCreator = noop) => {
    const createActionObject = payload => {
      // Thunks
      if (isFunction(payload)) {
        return payload
      }

      return payload === undefined
        ? { type }
        : { type, payload }
    }

    return defineProperty(
      (...args) => createActionObject(payloadCreator(...args)),
      'toString',
      { value: () => type }
    )
  }
})()

// ===================================================================

export const selectLang = createAction('SELECT_LANG', lang => lang)

// ===================================================================

export const connected = createAction('CONNECTED')
export const disconnected = createAction('DISCONNECTED')

export const updateObjects = createAction('UPDATE_OBJECTS', updates => updates)
export const updatePermissions = createAction('UPDATE_PERMISSIONS', permissions => permissions)

export const signedIn = createAction('SIGNED_IN', user => user)
export const signedOut = createAction('SIGNED_OUT')

export const xoaUpdaterState = createAction('XOA_UPDATER_STATE', state => state)
export const xoaTrialState = createAction('XOA_TRIAL_STATE', state => state)
export const xoaUpdaterLog = createAction('XOA_UPDATER_LOG', log => log)
export const xoaRegisterState = createAction('XOA_REGISTER_STATE', registration => registration)
export const xoaConfiguration = createAction('XOA_CONFIGURATION', configuration => configuration)
