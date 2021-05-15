import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity } from 'react-native';

class Main extends Component {
    constructor() {
        super()
        this.state = {
            arrData: ["", ""]
        }
    }

    onFood = () =>{
        alert("Pressed Food")
    }
    onGallery = () =>{
        alert("Pressed Gallery")
    }
    onDetails = () =>{
        alert("Pressed Details")
    }
    onClasses = () =>{
        alert("Pressed Classes")
    }
    onBook =() =>{
        alert ( "Flight Booked")
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.45}}>
                    <Image source={require('./assets/logo.jpg')} style={{ height: 350, width: 400 }} />
                </View>

                <View style={{ flex: 0.1, backgroundColor: '#DC143C', borderRadius: 25, margin: 20 }}>
                <View style = {{flex : 1 , flexDirection : 'row'}}>
                <View style = {{flex : 3}}>
                    <Text style={{ fontSize: 20,textAlign : 'center', marginTop : 20,color: 'white', fontWeight: 'bold' }}>INDIA --> UNITED KINGDOM</Text>
                    </View>
                    <View style = {{flex : 1, alignItems : 'flex-end' , marginRight : 30 , marginTop : 10 }}>
                       <Image source = {require('./assets/globe.png')}  style = {{height : 50 , width : 50}}    />
                    </View>
                    
                </View>
     </View>
                <View style={{ flex: 0, flexDirection: 'row' }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', paddingLeft: 30, fontFamily: 'serif' }}>AIR INDIA</Text>
                    </View>
                    <View style={{ flex: 0.3 }}>
                        <Image source={require('./assets/star.png')} style={{ height: 30, width: 30, marginTop: 2 }} />
                    </View>
                    <View style={{ flex: 0.4 }}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', fontFamily: 'serif' }}>4.5</Text>
                    </View>
                </View>

                <View style={{ flex: 0, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }} >
                        <TouchableOpacity onPress = {this.onDetails}>
                            <Text style={styles.texts}>Details</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress = {this.onGallery}>
                            <Text style={styles.texts}>Gallery</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress = {this.onClasses}>
                            <Text style={styles.texts}>Classes</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress = {this.onFood}>
                            <Text style={styles.texts}>Foods</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{ flex: 0.3 }}>
                    <FlatList
                        horizontal
                        data={this.state.arrData}
                        pagingEnabled
                        scrollEnabled
                        snapToAlignment='center'
                        decelerationRate={'fast'}
                        renderItem={({ item, index }) =>
                            <View >
                            <View style = {{flex : 1.5}}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', fontFamily: 'serif', padding: 30 }}>We Have Best Flights in Country , Our Service {'\n'}are Always Best We have also refund policy if{'\n'}customer dont like our service then they will {'\n'}get refunded</Text>

                            </View>
                            <View style = {{flex :1 , flexDirection : 'row'}}>
                            <View style = {{flex : 0.5}}>
                            <Image source = {require('./assets/food.png')} style = {{height : 30 , width : 30 , marginLeft : 23}}  />
                            </View>
                            <View style = {{flex : 0.5}}>
                            <Image source = {require('./assets/wifi.png')} style = {{height : 30 , width : 30 }}  />
                            </View>
                            <View style = {{flex : 0.5}}>
                            <Image source = {require('./assets/seat.png')} style = {{height : 30 , width : 30 }}  />
                            </View>
                            <View style = {{flex : 5}}>
                            <Image source = {require('./assets/gallery.png')} style = {{height : 30 , width : 30 }}  />
                            </View>
                            </View>
                            </View>

                        }
                    />


                </View>



<View style = {{flex : 0.07 , backgroundColor : 'green' , margin : 20 , justifyContent : 'center' , borderRadius : 20}}>

<TouchableOpacity onPress = {this.onBook}>
<Text style = {{textAlign : 'center' , fontFamily : 'serif' , color :'white' , fontSize : 18}} > BOOK NOW</Text>

</TouchableOpacity>



</View>



            </View>
        )
    }
}

export default Main;

const styles = StyleSheet.create({
    texts: {

        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        color: 'gray',
        fontFamily: 'serif'


    }
});