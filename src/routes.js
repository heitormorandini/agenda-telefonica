import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import HomeAgenda from '~/modules/Agenda/pages/Home';
import EditProfile from '~/modules/Agenda/pages/Profile';

export default createAppContainer(
  createSwitchNavigator({
    HomeAgenda,
    EditProfile
  })
)
