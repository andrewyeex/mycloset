import * as React from 'react';

interface HamburgerPageProps {
  name?: string;
}
interface HamburgerPageState {
  name?: string;
}

class HamburgerPage extends React.PureComponent<HamburgerPageProps, HamburgerPageState> {
  public render() {
    return <div>HamburgerPage</div>;
  }
}

export default HamburgerPage;
