
import React, { Component } from 'react';
import type {Node} from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native'

import LeftSide from './components/forms/LeftSide'

export default class App extends Component {

  render() {

    return (
      <SafeAreaView>
        <LeftSide />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  
})

