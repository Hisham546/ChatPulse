import { StyleSheet } from 'react-native';

import deviceProps from '../../utilities/deviceProps';
import fontFamily from '../../themes/fontFamily';
import colors from '../../themes/colors';
import fontSize from '../../themes/fontSize';
const { deviceWidth ,deviceHeight} = deviceProps

const styles = StyleSheet.create({
  _code: {
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth * 0.11,
    height:deviceHeight*0.055,
    paddingHorizontal: 5,
   // backgroundColor: 'red',
    flexDirection: 'row'
  },
  longCode:{
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth * 0.15,
    height:deviceHeight*0.055,
    paddingHorizontal: 5,
   // backgroundColor: 'red',
    flexDirection: 'row'
  },

  _modal_view_1: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: '100%',
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
  _modal_view_2: {
    height: '70%',
    width: deviceWidth,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.WHITE,
  },
  _inputConatiner_1: { flexDirection: 'row', alignItems: 'center' },
  _inputConatiner_2: {
    borderRadius: 10,
    flex: 1,
    height: 45,
    alignSelf: 'center',
    paddingLeft: 7,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#DFDFDF',
    marginLeft: 15,
  },
  _inputConatiner_3: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  _search_icon: {
    fontSize: fontSize.h4,
    paddingRight: 5,
    color: colors.GRAY_10,
    opacity: 0.8,
  },
  _input: { flex: 1, fontFamily: fontFamily.REGULAR, color: colors.BLACK },
  _clear_View: {
    borderRadius: 20,
    backgroundColor: '#999999',
    marginRight: 10,
  },
  _clear_icon: {
    fontSize: fontSize.p,
    padding: 3,
    color: colors.WHITE,
  },
  _cancel_text: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontFamily: fontFamily.BOLD,
    color: colors.BLUE_DARK,
    fontSize: fontSize.h5,
  },
  _item: { paddingVertical: 7, paddingLeft: 15 },
  _item_text: {
    color: colors.BLACK,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.P_REGULAR,
  },
  _code_text: {
    fontFamily: fontFamily.P_REGULAR,
    color: colors.WHITE,
    fontSize: fontSize.h6,
    marginRight: '4%',
  

  },
});
export default styles;
