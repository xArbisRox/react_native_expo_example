import {Image} from "react-native";

export default NetworkImage

function NetworkImage() {
    return <Image source={{
        width: 300,
        height: 300,
        uri: "https://picsum.photos/300"}}></Image>
}