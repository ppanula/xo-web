import _ from 'intl'
import ActionButton from 'action-button'
import map from 'lodash/map'
import React from 'react'
import Tooltip from 'tooltip'
import {
  ButtonGroup
} from 'react-bootstrap-4/lib'
import {
  noop
} from 'utils'

const ActionBar = ({ actions, param }) => (
  <ButtonGroup>
    {map(actions, (button, index) => {
      if (!button) {
        return
      }

      const { handler, handlerParam = param, label, icon, redirectOnSuccess } = button
      return <Tooltip key={index} content={_(label)}>
        <ActionButton
          key={index}
          btnStyle='secondary'
          handler={handler || noop}
          handlerParam={handlerParam}
          icon={icon}
          redirectOnSuccess={redirectOnSuccess}
          size='large'
        />
      </Tooltip>
    })}
  </ButtonGroup>
)
ActionBar.propTypes = {
  actions: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      label: React.PropTypes.string.isRequired,
      icon: React.PropTypes.string.isRequired,
      handler: React.PropTypes.func,
      redirectOnSuccess: React.PropTypes.string
    })
  ).isRequired,
  display: React.PropTypes.oneOf(['icon', 'text', 'both'])
}
export { ActionBar as default }
