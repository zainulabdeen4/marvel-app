import {Image, Modal, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {errorActions} from '../../redux/ErrorReducer';
import Button from '../Button';
import {warning} from '../../assets/Images';

const ErrorModal = () => {
  const {
    container,
    modal,
    messageStyle,
    buttonContainer,
    warningStyle,
    customBtnStyle,
  } = styles;
  const {visible, errorMessage, retryAction} = useSelector(
    (state: RootState) => state.ErrorReducer,
  );
  const dispatch = useDispatch();
  const hideModal = () => dispatch({type: errorActions.HIDE_ERROR});
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={hideModal}>
      <View style={container}>
        <View style={modal}>
          <Image source={warning} style={warningStyle} />
          <Text style={messageStyle}>{errorMessage}</Text>
          <View style={buttonContainer}>
            {retryAction && (
              <Button
                title="Retry"
                onPress={retryAction}
                customContainer={customBtnStyle}
              />
            )}

            <Button
              title="Close"
              onPress={hideModal}
              customContainer={customBtnStyle}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModal;
