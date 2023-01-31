import { NavigationContainer } from "@react-navigation/native";
import { stackRoutes as StackRoutes } from "./stack";

export function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
