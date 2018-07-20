import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native';
// import About from './components/About'

import { Constants } from 'expo';
import { Button } from 'react-native-elements'; // 0.16.0

import "@expo/vector-icons"; // 5.2.0

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Home'
    }
  constructor(){
    super()
    this.state = {
      aboutText: 'Welcome in About',
      result: 0,
      num1: 0,
    }
  }

  handleChange = (text) => {
    this.setState({
      num1: text
    })
    this.setState({
        num1: text
      })
      let splitText = text.replace(/ /g, '').split('')
      let tmp = []
      let num = ''
      splitText.forEach((data)=>{
        if(!isNaN(data)){
          num += data
        }else{
          tmp.push(num)
          tmp.push(data)
          num = ''
        }
      })
      tmp.push(num)
      console.log(tmp, ' <--- tmp')

      let arr = tmp

      let hasil = 0;
      let result = 0;
      console.log(arr, ' <---- arr ')
      arr.forEach((data, index)=>{
          // console.log(data, ' <---- data')
          let angka1 = arr[index - 1]
          let angka2 = arr[index + 1]
          if(data === '+'){
              // 3
              if(hasil !== 0){
              hasil = Number(hasil) + Number(angka2)
              }else{
              hasil = Number(angka1) + Number(angka2)
              }
          }
          if(data === '-'){
              if(hasil !== 0){
              hasil = Number(hasil) - Number(angka2)
              }else{
              hasil = Number(angka1) - Number(angka2)
              }
          }
          if(data === '*'){
              if(hasil !== 0){
              hasil = Number(hasil) * Number(angka2)
              }else{
              hasil = Number(angka1) * Number(angka2)
              }
          }
          if(data === '/'){
              if(hasil !== 0){
              hasil = Number(hasil) / Number(angka2)
              }else{
              hasil = Number(angka1) / Number(angka2)
              }
          }
          if(!isNaN(data)){
              result =  hasil
          }
      })

      this.setState({
          result: result
      })
    // console.log(this.state.num1, ' <---- nilai text')
  }

  render() {
    const arrOprator = [
      {name: '+', operator: '+', color: 'green'},
      {name: '-', operator: '-', color: '#841584'},
      {name: '*', operator: '*', color: 'blue'},
      {name: '/', operator: '/', color: 'red'}
    ]
    return (
      <View style={styles.container}>
        {/* <About
          text={this.state.aboutText}
        /> */}
        <Button
            title="go to about"
            backgroundColor="aqua"
            containerViewStyle={{width: '50%', marginLeft: 2}}
            onPress={()=> this.props.navigation.navigate('About', {text: ' ini adalah nilai params'})}
        />
        <Text>{'\n'}</Text>
        <Text>Kalkulaktor</Text>
        <Text> Hasil : { this.state.result } </Text>
        <TextInput
          style={styles.inputStyle}
          value={String(this.state.num1)}
          onChangeText={this.handleChange}
        />
        {arrOprator.map((data, key)=>{
          return(
            <View
                key={key}
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
              <Button
                containerViewStyle={{width: '20%', marginLeft: 0}}
                title={data.name}
                backgroundColor={data.color}
                onPress={()=>{
                  const { num1 } = this.state
                  const numBaru = `${num1}${data.operator}`
                  this.setState({
                    num1: numBaru
                  })
                }} />
            </View>
          )
        })}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 'auto',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    color: 'black',
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    margin: 6,
  }
});
