import { Text, View} from "react-native";
import { Button } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';



export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        Musica de amor nunca mais
      </Text>
      <Button
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ["#FF9800", "#F44336"],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}>
         Linear Gradient
      </Button>
    </View>
  );
}
