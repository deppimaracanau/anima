import React,  {Component} from "react";
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity
} from 'react-native'
import { tintColor } from "react-native";


class Animations extends Component {
  componentWillMount = () => {
     this.animatedWidth = new Animated.Value(50)
     this.animatedHeight = new Animated.Value(100)
  }
  animatedBox = () => {
     Animated.timing(this.animatedWidth, {
        toValue: 50,
        duration: 100
     }).start()
     Animated.timing(this.animatedHeight, {
        toValue: 50,
        duration: 50
     }).start()
  }
  render() {
     const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight }
     return (
        <TouchableOpacity style = {styles.container} onPress = {this.animatedBox}>
           <Animated.View style = {[styles.box, animatedStyle]}/>
        </TouchableOpacity>
     )
  }
}

export default Animations

const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   box: {
      backgroundColor: 'blue',
      width: 50,
      height: 100,
      
   }
})