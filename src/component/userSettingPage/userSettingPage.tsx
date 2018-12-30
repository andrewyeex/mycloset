import * as React from 'react';

interface UserSettingPageProps {
  name?: string;
}
interface UserSettingPageState {
  name?: string;
}

class UserSettingPage extends React.PureComponent<UserSettingPageProps, UserSettingPageState> {
  public render() {
    return <div>UserSettingPage</div>;
  }
}

export default UserSettingPage;