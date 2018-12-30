import * as React from 'react';

interface TitleProps {
  name?: string;
}
interface TitleState {
  name?: string;
}

class Title extends React.PureComponent<TitleProps, TitleState> {

  public render() {
    const titleImg = require('../../images/title.png')
    return <img src={titleImg} />;
  }

}

export default Title;