import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CheckServices from '../screens/checkServices';
import Second from '../screens/second';
import Accel from '../screens/accel';
import Parte from '../screens/parte2';
import StoreDetails from '../screens/storeDetails';
import SelectStore from '../screens/selectStore';
import MyEvents from '../screens/myEvents';

const screens = {
  MyEvents: {
    screen: MyEvents,
  },

  SelectStore: {
    screen: SelectStore,
  },
  StoreDetails: {
    screen: StoreDetails,
  },

  CheckServices: {
    screen: CheckServices,
  },
  Parte: {
    screen: Parte,
  },
  Accel: {
    screen: Accel,
  },
  Second: {
    screen: Second,
  }
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);


