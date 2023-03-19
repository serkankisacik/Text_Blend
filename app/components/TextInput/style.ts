import { StyleSheet } from 'react-native';
import size from '../../utils/size';

export default StyleSheet.create({
  input: {
    height: size.xlarge,
    width: size.width * 0.95,
    borderRadius: size.radius,
    backgroundColor: '#fff',
    padding: 5,
    fontSize: size.font,
    minHeight: size.height * 0.75,
    maxHeight: size.height * 0.8,
  },
});
