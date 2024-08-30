import styled from 'styled-components/native';
import { theme } from '../../navigation/theme';

export const styles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: theme.colors.card,
    color: theme.colors.text,
  },
};
