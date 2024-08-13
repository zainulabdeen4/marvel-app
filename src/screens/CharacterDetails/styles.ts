import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../themes/scaling';
import {TextStyles} from '../../themes/typography';

export default (colors: any) =>
  StyleSheet.create({
    mainContainer: {flex: 1},
    container: {
      // flex: 1,
      // height: '100%',
      // width: '100%',
      alignItems: 'center',
      paddingBottom: verticalScale(20),
    },
    coverStyle: {
      ...StyleSheet.absoluteFillObject,
      // width: '100%',
      // height: verticalScale(500),
    },
    DetailContainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,.7)',
      justifyContent: 'flex-end',
      paddingHorizontal: scale(10),
      paddingVertical: scale(10),
      zIndex: 1,
    },
    title: {
      ...TextStyles.heading1,
      color: '#fff',
    },
    description: {
      marginTop: verticalScale(5),
      ...TextStyles.body,
      color: '#fff',
    },
    body: {
      width: '100%',
      paddingHorizontal: scale(10),
      paddingVertical: scale(10),
    },
    ComicsTitle: {
      ...TextStyles.heading1,
      color: colors.text,
      marginBottom: verticalScale(10),
    },
    comicsRow: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginBottom: verticalScale(10),
    },
    bulletPoint: {
      backgroundColor: colors.card,
      height: verticalScale(10),
      width: verticalScale(10),
      borderRadius: verticalScale(5),
      marginRight: scale(10),
    },
    comicName: {
      ...TextStyles.label,
      color: colors.text,
    },
    CoverContainer: {
      width: '100%',
      height: verticalScale(500),
    },
  });
