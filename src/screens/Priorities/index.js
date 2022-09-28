import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const PrioritiesScreen = props => {

  return (
    <View style={styles.container}>
        <View style = {styles.bottom}>
            <TouchableOpacity
                style = {styles.button}
                onPress = {() => console.log('Priority Added!')}
                >
                <Text 
                    style = {styles.buttonText}>Add Priority</Text>
                </TouchableOpacity>
        </View>
    </View>
  );
};

export default PrioritiesScreen;