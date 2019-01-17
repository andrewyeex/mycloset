import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Modal extends React.PureComponent{
  public render = () =>
    ReactDOM.createPortal(
      this.props.children,
      document.getElementById('modal-container') as Element
    )
}

export default Modal;
