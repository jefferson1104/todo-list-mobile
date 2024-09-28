import { View, Image, Text } from "react-native";

import { styles } from "./styles";

export function TodoListEmpty() {
  // Renders
  return (
    <View style={styles.container}>
    <Image
      source={require('../../assets/empty.png')}
      style={{ width: 56, height: 56 }}
    />
    <Text style={styles.description}>
      <Text style={styles.descriptionBold}>
        You don't have any tasks registered yet{'\n'}
      </Text>
      Create tasks and organize your to-do items
    </Text>
  </View>
  );
}
