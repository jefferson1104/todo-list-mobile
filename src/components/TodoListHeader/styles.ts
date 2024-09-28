import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentBox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  counterBox: {
    backgroundColor: colors.gray400,
    borderRadius: 8,
    width: 24,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    color: colors.gray100,
    fontWeight: 'bold',
    fontSize: 12,
  },
  createdText: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 14,
  },
  completedText: {
    color: colors.purple,
    fontWeight: 'bold',
    fontSize: 14,
  }
});
