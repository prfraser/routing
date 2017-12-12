import React from 'react';

const HelloYou = (props) => (
  <p>Hello {props.match.params.name}!</p>
)

export default HelloYou;