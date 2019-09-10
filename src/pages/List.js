import React, {Component} from 'react';

import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Orientation from 'react-native-orientation';

export default class List extends Component {
  state = {
    item: [
      {id: '01', name: 'CameraView01'},
      {id: '02', name: 'botao daquilo'},
      {id: '03', name: 'botao fulano'},
    ],
  };

  renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => this.props.navigation.navigate(item.name)}>
      <Text style={styles.buttonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.item}
          keyExtractor={item => item.id.toString()}
          renderItem={this.renderItem}
          onEndReached={this.loadMoreFieldRecords}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },

  button: {
    borderRadius: 4,
    height: 42,
    backgroundColor: '#546CFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderStyle: 'dashed',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});
