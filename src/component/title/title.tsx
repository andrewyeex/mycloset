import * as React from 'react';

interface TitleProps {
  name?: string;
}
interface TitleState {
  name?: string;
}

class Title extends React.PureComponent<TitleProps, TitleState> {
  private titleImg = require('../../images/title.png')
  public render() {
    return <img src={this.titleImg} />;
  }

}

export default Title;