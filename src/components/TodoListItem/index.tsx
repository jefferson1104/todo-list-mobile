import { View, Text, TouchableOpacity, Image } from "react-native";

import { ITodoItem } from "../../interfaces/todo-item";

import { styles } from "./styles";

interface ITodoListItemProps {
  item: ITodoItem;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TodoListItem ({ item, onToggle, onDelete }: ITodoListItemProps) {
  // Renders
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.checkbox, item.isCompleted && styles.checked]}
        onPress={() => onToggle(item.id)}
      >
        {item.isCompleted && <Text style={styles.checkmark}>✔</Text>}
      </TouchableOpacity>

      <Text
        style={[styles.text, item.isCompleted && styles.textChecked]}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {item.description}
      </Text>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(item.id)}
      >
        <Image
          source={require('../../assets/trash.png')}
          style={{ width: 16, height: 16 }}
        />
      </TouchableOpacity>
    </View>
  )
}
