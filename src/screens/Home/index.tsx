import { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { ITodoItem } from '../../interfaces/todo-item';

import { TodoListHeader } from '../../components/TodoListHeader';
import { TodoListItem } from '../../components/TodoListItem';

import { styles } from './styles';
import { TodoListEmpty } from '../../components/TodoListEmpty';

export function Home() {
  // States
  const [todoDescription, setTodoDescription] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);

  // Constants
  const incompletedItems = todoList.filter((item) => !item.isCompleted).length;
  const completedItems = todoList.filter((item) => item.isCompleted).length;

  // Methods
  const handleTodoAdd = () => {
    if (!todoDescription) {
      return;
    }

    const newTodo: ITodoItem = {
      id: Math.random().toString(36).substr(2, 9),
      description: todoDescription,
      isCompleted: false,
    };

    setTodoList([...todoList, newTodo]);
    setTodoDescription('');
  };

  const handleTodoToggle = (id: string) => {
    const updatedTodoList = todoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      }

      return item;
    });

    setTodoList(updatedTodoList);
  };

  const handleTodoDelete = (id: string) => {
    const updatedTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedTodoList);
  };

  // Renders
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/logo.png')}
          style={{ width: 110, height: 32 }}
        />
      </View>

      <View style={styles.content}>
        {/* Form */}
        <View style={styles.form}>
          <TextInput
            style={[
              styles.input,
              isInputFocused && styles.inputFocused
            ]}
            placeholder='Add a new task'
            placeholderTextColor="#6B6B6B"
            onChangeText={(text) => setTodoDescription(text)}
            value={todoDescription}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
          <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleTodoAdd}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        {/* Todo List Header */}
        <TodoListHeader
          incompletedItems={incompletedItems}
          completedItems={completedItems}
        />

        {/* Todo List */}
        <FlatList
          data={todoList}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 16, gap: 8 }}
          renderItem={({ item }) => (
            <TodoListItem
              item={item}
              onToggle={handleTodoToggle}
              onDelete={handleTodoDelete}
            />
          )}
          ListEmptyComponent={() => (
            <TodoListEmpty />
          )}
        />
      </View>
    </View>
  );
}
