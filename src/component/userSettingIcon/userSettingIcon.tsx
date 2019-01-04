import * as React from 'react';
import './userSettingIcon.css'

class UserSettingIcon extends React.PureComponent< {}, {} > {
  private userImg = require('../../images/andrew.png');
  public render() {
    return <img id="userImg" src={this.userImg} alt="image of user" />;
  }

}

export default UserSettingIcon;
