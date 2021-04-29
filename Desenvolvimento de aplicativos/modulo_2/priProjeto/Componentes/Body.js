import React from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';

const Body = () => {
    return (
        <View>
        <View style= {styles.View}>
        < Text  style={styles.textStyle}> Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam quae deleniti illum maxime, aspernatur distinctio!Ducimus debitis non, voluptas id porro enim, eius vel, totam necessitatibus optio eos autem saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam quae deleniti illum maxime, aspernatur distinctio!Ducimus debitis non, voluptas id porro enim, eius vel, totam necessitatibus optio eos autem saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam quae deleniti illum maxime, aspernatur distinctio!Ducimus debitis non, voluptas id porro enim, eius vel, totam necessitatibus optio eos autem saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam quae deleniti illum maxime, aspernatur distinctio!Ducimus debitis non, voluptas id porro enim, eius vel, totam necessitatibus optio eos autem saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam quae deleniti illum maxime, aspernatur distinctio!Ducimus debitis non, voluptas id porro enim, eius vel, totam necessitatibus optio eos autem saepe. </Text>
            < Image style = {
               styles.imageStyle
            }
            source = {
                    {
                uri: 'https://reactnative.dev/img/tiny_logo.png',
                
            }}/>
            </View>
                <View style = {
                        styles.View
                    }>
                    <Text style = {
                        styles.textStyle
                    } > Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam quae deleniti illum maxime, aspernatur distinctio!Ducimus debitis non, voluptas id porro enim, eius vel, totam necessitatibus optio eos autem saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam quae deleniti illum maxime, aspernatur distinctio!Ducimus debitis non, voluptas id porro enim, eius vel, totam necessitatibus optio eos autem saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam quae deleniti illum maxime, aspernatur distinctio!Ducimus debitis non, voluptas id porro enim, eius vel, totam necessitatibus optio eos autem saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam quae deleniti illum maxime, aspernatur distinctio!Ducimus debitis non, voluptas id porro enim, eius vel, totam necessitatibus optio eos autem saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam quae deleniti illum maxime, aspernatur distinctio!Ducimus debitis non, voluptas id porro enim, eius vel, totam necessitatibus optio eos autem saepe. </Text> <Image style = {
                        styles.imageStyle
                    }
                source = {
                    {
                        uri: 'https://reactnative.dev/img/tiny_logo.png',

                    }
                }
                /> </View>
            </View>
     
    );
}
const styles = StyleSheet.create({
    View: {
        flex: 1, flexDirection: 'row', flexWrap: 'wrap', padding: 30,
    },
    textStyle: {
       width: '70%', paddingLeft: 20, paddingRight: 20
    },
    imageStyle: {
        width: 90,
            height: 90,
    }

});
export default Body;

