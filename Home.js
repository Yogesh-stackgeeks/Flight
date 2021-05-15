import React, { Component } from 'react';
import { StyleSheet, Text, View , Image, FlatList, Button, TouchableOpacity } from 'react-native';


class Home extends Component{
constructor(){
    super()

this.state = {

arrData : ["" , "" , "" , ""]
}
}
 
onNavigate = (item)=>{

    console.log(item)
}


render(){

return(
<View style = {{flex : 1}}>
<View style = {{flex : 2.5 }}>
<Image source = {require('./assets/air.jpg')}   style = {{height : 500 , width : 500}}      />
</View>
<View style = {{flex : 0.5 }} >
<Text style = {{textAlign : 'center', fontSize : 33 , fontWeight : 'bold' , fontFamily : 'serif'}}>Book Unique Flight{'\n'}And Experience</Text>
</View>
<View style = {{flex : 0.5 }}>
<FlatList
horizontal
data = {this.state.arrData}
pagingEnabled
scrollEnabled
snapToAlignment = 'center'
decelerationRate = {'fast'}
renderItem = {({item , index})=>
<View >
<Text style = {{color : 'gray'   , fontSize : 16 , marginTop : 20 , fontFamily : 'serif' , margin : 90}}>Since 2014 , we've helped more than 500,000{'\n'}people of all ages enjoy the best outdoor{'\n'}experience of their lives</Text>

</View>
}
/>
</View>
<View style = {{flex : 0.2}}>
</View>

<View style = {{flex : 0.5 , alignItems : 'flex-end'}}>
<TouchableOpacity>
<Image source = {require('./assets/next.png')}  style = {{marginRight : 90 , marginTop : 13}}               />
</TouchableOpacity>


</View>


</View>






    
)
}
}

export default Home ;