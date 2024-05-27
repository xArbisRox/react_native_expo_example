import {Image, TouchableWithoutFeedback} from 'react-native';
import MyImage from '@/assets/images/custom_image.jpeg'

export default StaticImage;

function StaticImage() {
    return <TouchableWithoutFeedback
        onPress={() => {
            alert("short press")
        }}
        onLongPress={() => {
            alert("long press")
        }}>
        <Image source={MyImage}></Image>
    </TouchableWithoutFeedback>
}