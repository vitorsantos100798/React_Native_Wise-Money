import {TouchableOpacity, View,Text, TouchableOpacityProps} from 'react-native'
import styles from './styles';

type Text = {
  TextButton:string
}


const ButtonField = ({children,...props}:TouchableOpacityProps)=>{
  return(
    <View>
      <TouchableOpacity
      style={styles.button}
      {...props}
      >
        <Text
        style={styles.text}
        >{children}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonField;