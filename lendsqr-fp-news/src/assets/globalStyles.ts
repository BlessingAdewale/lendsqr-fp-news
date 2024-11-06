import { StyleSheet } from 'react-native';
import { layout } from '@utils';
// import { theme } from '@constants';

export const globalStyles = StyleSheet.create({
  // wrapper: { flex: 1, backgroundColor: theme.colors.background },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  columnCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnBetween: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  columnAround: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
 columnStart: {
  flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ColumnEnd: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: layout.pixelSizeHorizontal(20),
  },
  textHello: {
    fontSize: layout.fontPixel(40),
    color: '#ef4046',
    fontWeight: 'bold',
    marginBottom: layout.pixelSizeVertical(18),
    marginTop: layout.pixelSizeVertical(90),
    fontFamily: 'SpaceGrotesk_700Bold'
  },
  textThere: {
    fontSize: layout.fontPixel(40),
    color: '#010101',
      fontFamily: 'DMSans_500Medium'
  },
  textCreate: {
    color: 'gray',
    fontSize: layout.fontPixel(15),
    marginBottom: layout.pixelSizeVertical(20),
      fontFamily: 'DMSans_500Medium'
  },
  leftContent: {
    paddingRight: layout.pixelSizeHorizontal(7),
  },
  textTerms: {
    color: '#ef4046',
  },
  horizontalRule: {
    flex: 1,
    height: layout.heightPixel(1),
    borderRadius: layout.fontPixel(5),
    backgroundColor: '#fff',
  },
  orSignUpWith: {
    color: 'gray',
    textAlign: 'center',
    fontSize: layout.fontPixel(17),
    paddingHorizontal: layout.pixelSizeHorizontal(20),
      fontFamily: 'SpaceGrotesk_600SemiBold'
      
  },
  bottomText: {
    marginTop: layout.pixelSizeVertical(50),
    textAlign: 'center',
    fontSize: layout.fontPixel(13),
    color: '#010101',
     fontFamily: 'SpaceGrotesk_400Regular'
  },
});
