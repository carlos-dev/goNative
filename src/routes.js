import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/login';
import Repositories from './pages/repositories';
import Animations from './pages/animations';

const Routes = createAppContainer(
  createSwitchNavigator({
    Animations,
    Login,
    Repositories,
  }),
);

export default Routes;
