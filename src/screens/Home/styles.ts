import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray600,
  },
  header: {
    height: 173,
    width: '100%',
    backgroundColor: colors.gray700,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    padding: 24
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    gap: 4,
    marginTop: -50,
  },
  input: {
    flex: 1,
    height: 54,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: colors.gray100,
    backgroundColor: colors.gray500,
    borderWidth: 1,
    borderColor: colors.gray500,
  },
  inputFocused: {
    borderColor: colors.purpleDark,
  },
  buttonText: {
    color: colors.gray100,
    fontSize: 18,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 8,
    backgroundColor: colors.blueDark,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
