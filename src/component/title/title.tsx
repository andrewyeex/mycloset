import * as React from 'react';

class Title extends React.PureComponent< {}, {} > {
  private titleImg = require('../../images/title.png')
  public render() {
    return <img src={this.titleImg} />;
  }

}

export default Title;