import * as actions from '../App/Actions/UiActions'
import * as types from '../App/Actions/Types'

describe('actions', () => {
  it('should create an action to toggle drawer', () => {
    const expectedAction = {
      type: types.DRAWER_TOGGLE,
    }
    expect(actions.drawerToggle()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to open drawer', () => {
    const expectedAction = {
      type: types.DRAWER_OPEN,
    }
    expect(actions.drawerOpen()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to close drawer', () => {
    const expectedAction = {
      type: types.DRAWER_CLOSE,
    }
    expect(actions.drawerClose()).toEqual(expectedAction)
  })
})
