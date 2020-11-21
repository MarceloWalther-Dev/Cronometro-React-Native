import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';


class App extends Component {

  constructor(props) {
    super(props);

    //STATE
    this.state ={
      numero: 0.0,
      btn: 'Play',
      btnRest: 'Restart',
      ultimoTime: null
    }

    // BIND    
    this.play = this.play.bind(this);
    this.restart = this.restart.bind(this);

    //VARIABLES
    this.timer = null;
  }



  play(){

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({btn:"Play"})
    }else{
   this.timer =  setInterval(()=>{
      this.setState({numero: this.state.numero + 0.1})
    }, 100)
    this.setState({btn: "Pause"})
  }
}


  restart(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimoTime: this.state.numero,
      numero:0,
      btn: 'Play'
    })
  }
  

  render() {
    return (
      <View style ={styles.container}>

        <Image
          source={require('./src/cronometro.png')}
          style = {styles.cronometro}
        />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.containerBtn}>

          <TouchableOpacity style={styles.btn} onPress = {this.play}>
            <Text style={styles.btnText}>
              {this.state.btn}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress = {this.restart}>
            <Text style={styles.btnText}>
              {this.state.btnRest}
            </Text>
          </TouchableOpacity>

        </View>
          <View style={styles.timerFinal}>
            <Text style={styles.textTime}>
              {this.state.ultimoTime > 0 ? 'Ultimo tempo : ' + this.state.ultimoTime.toFixed(1) + 's' : ''}
              </Text>
          </View>
        
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
  },
  containerBtn:{
    flexDirection: 'row',
    marginTop:70,
    height: 40
  },
  btn:{
    marginTop: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  }, 
  timerFinal:{
    marginTop:40
  },
  textTime:{
    marginTop:50,
    fontSize:25,
    fontStyle: 'italic',
    color: '#fff'
  }
});

export default App;
