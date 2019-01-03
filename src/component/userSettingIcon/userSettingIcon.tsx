import * as React from 'react';
import './userSettingIcon.css'

interface UserSettingIconProps {
  name?: string;
}
interface UserSettingIconState {
  name?: string;
}

class UserSettingIcon extends React.PureComponent<UserSettingIconProps, UserSettingIconState> {
  private userImg = require('../../images/andrew.png');
  public render() {
    return <img id="userImg" src={this.userImg} alt="image of user" />;
  }

}

export default UserSettingIcon;
