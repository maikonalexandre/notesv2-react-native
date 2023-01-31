import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Create } from "../screens/create";
import { Home } from "../screens/home";
import { Update } from "../screens/update";

const { Screen, Navigator } = createNativeStackNavigator();

export function stackRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        options={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
        component={Home}
      />
      <Screen
        name="create"
        options={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
        component={Create}
      />
      <Screen
        name="update"
        options={{
          headerShown: false,
          animation: "fade_from_bottom",
        }}
        component={Update}
      />
    </Navigator>
  );
}
