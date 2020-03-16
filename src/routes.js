import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/login';
import Repositories from './pages/repositories';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Repositories,
  }),
);

export default Routes;
