import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingTop: 48,
    borderTopWidth: 2,
    borderTopColor: colors.gray500,
  },
  description: {
    color: colors.gray300,
    fontSize: 16,
    textAlign: 'center',
  },
  descriptionBold: {
    fontWeight: 'bold',
  },
});
