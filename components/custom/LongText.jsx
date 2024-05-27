import {Text} from "react-native";
import {useState} from "react";

export default LongText;

function LongText() {
    const [numberOfLines, setNumberOfLines] = useState(2)
    const handlePress = () => {
        setNumberOfLines(numberOfLines ? undefined : 2)
    }
    return (
        <Text numberOfLines={numberOfLines}
              onPress={handlePress}>This text gets truncated because I set the numberOfLines prop
                                    to 2!
                                    Click the text to show everything!
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Commodi
                                    consequuntur delectus dignissimos eaque facere, ipsam magnam
                                    nulla
                                    officiis suscipit voluptatem. Accusamus, architecto aut autem
                                    cumque
                                    dignissimos eos esse excepturi fuga incidunt ipsam modi nulla
                                    obcaecati
                                    odit omnis pariatur, placeat quae quia quibusdam quod quos
                                    repellendus
                                    reprehenderit tempore ullam vero voluptatibus!</Text>
    )
}