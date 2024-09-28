import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    height: 64,
    paddingHorizontal: 8,
    backgroundColor: colors.gray500,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray400,
  },
  checkbox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: colors.blue,
  },
  checked: {
    backgroundColor: colors.purple,
    borderColor: colors.purple,
  },
  checkmark: {
    color: colors.gray100,
    fontSize: 12,
  },
  text: {
    flex: 1,
    flexShrink: 1,
    color: colors.gray100,
    fontSize: 14,
  },
  textChecked: {
    textDecorationLine: 'line-through',
    color: colors.gray300,
  },
  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
  }
});
