import * as React from 'react';
import './userSettingIcon.css'

interface UserSettingIconProps {
  name?: string;
}
interface UserSettingIconState {
  name?: string;
}

class UserSettingIcon extends React.PureComponent<UserSettingIconProps, UserSettingIconState> {

  public render() {
    const userImg = require('../../images/andrew.png');
    return <img id="userImg" src={userImg} alt="image of user" />;
  }

}

export default UserSettingIcon;
