import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CheckServices from "../screens/checkServices";
import StoreDetails from "../screens/storeDetails";
import SelectStore from "../screens/selectStore";
import MyEvents from "../screens/myEvents";
import EventDetails from "../screens/eventDetails";

const screens = {
  MyEvents: {
    screen: MyEvents,
    navigationOptions: {
      title: "Meus eventos",
      headerStyle: {
        backgroundColor: "#4c1690",
      },
      headerTitleStyle: { color: "white" },
    },
  },
  EventDetails: {
    screen: EventDetails,
    navigationOptions: {
      title: "Detalhes do evento",
      headerStyle: {
        backgroundColor: "#4c1690",
      },
      headerTitleStyle: { color: "white" },
    },
  },
  SelectStore: {
    screen: SelectStore,
    navigationOptions: {
      title: "Selecionar fornecedor",
      headerStyle: {
        backgroundColor: "#4c1690",
      },
      headerTitleStyle: { color: "white" },
    },
  },
  StoreDetails: {
    screen: StoreDetails,
    navigationOptions: {
      title: "Detalhes do fornecedor",
      headerStyle: {
        backgroundColor: "#4c1690",
      },
      headerTitleStyle: { color: "white" },
    },
  },

  CheckServices: {
    screen: CheckServices,
    navigationOptions: {
      title: "Adicionar serviços",
      headerStyle: {
        backgroundColor: "#4c1690",
      },
      headerTitleStyle: { color: "white" },
    },
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
