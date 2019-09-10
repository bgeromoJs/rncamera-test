import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Orientation from 'react-native-orientation';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ScreenCamera01 extends Component {
  componentDidMount() {
    // this locks the view to Portrait Mode

    // this locks the view to Landscape Mode
    // Orientation.lockToLandscape();

    // this unlocks any previous locks to all Orientations
    Orientation.unlockAllOrientations();

    Orientation.addOrientationListener(this._orientationDidChange);
  }

  state = {
    lock: false,
  };

  _orientationDidChange = orientation => {
    if (orientation === 'LANDSCAPE') {
      this.setState({lock: true});
    } else {
      this.setState({lock: false});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({barcodes}) => {
            console.log(barcodes);
          }}
        />
        {this.state.lock ? (
          <View style={styles.capture}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ListView')}
              style={styles.captureButton}>
              <Icon name="photo-camera" size={32} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.rotate}>
            <Icon name="screen-rotation" size={50} color="#FFF" />
          </View>
        )}
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rotate: {
    backgroundColor: '#fff',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    padding: 15,
    paddingHorizontal: 20,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 40,
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    padding: 15,
    paddingHorizontal: 20,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 40,
  },
  capture: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },
});
