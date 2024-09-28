import { View, Text } from "react-native";
import { styles } from "./styles";

interface ITodoListHeaderProps {
  incompletedItems: number;
  completedItems: number;
}

export function TodoListHeader({ incompletedItems, completedItems }: ITodoListHeaderProps) {
  // Renders
  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <Text style={styles.createdText}>
          Created
        </Text>

        <View style={styles.counterBox}>
          <Text style={styles.counterText}>
            {incompletedItems}
          </Text>
        </View>
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.completedText}>
          Completed
        </Text>

        <View style={styles.counterBox}>
          <Text style={styles.counterText}>
            {completedItems}
          </Text>
        </View>
      </View>
    </View>
  );
}
