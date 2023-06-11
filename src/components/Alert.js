import React from 'react'
import PropTypes from 'prop-types'

export default function alert(props) {
  return (
    <div>
      ${props.alert} && <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alert.type}</strong>:{props.alert.msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </div>
  )
}
