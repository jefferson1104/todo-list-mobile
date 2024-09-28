import { View, Text } from "react-native";
import { ClipboardList } from "lucide-react-native";

import { colors } from "../../styles/colors";

import { styles } from "./styles";

export function TodoListEmpty() {
  // Renders
  return (
    <View style={styles.container}>
    <ClipboardList color={colors.gray400} size={56} />
    <Text style={styles.description}>
      <Text style={styles.descriptionBold}>
        You don't have any tasks registered yet{'\n'}
      </Text>
      Create tasks and organize your to-do items
    </Text>
  </View>
  );
}
