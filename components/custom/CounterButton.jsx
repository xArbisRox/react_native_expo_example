import {useEffect, useState} from "react";
import {Button} from "react-native";

export default CounterButton;

function CounterButton() {
    const [counter, setCounter] = useState('0')
    useEffect(() => {
        alert("Counter changed!")
    }, [counter]);
    const handlePress = () => {
        setCounter((parseInt(counter) + 1).toString())
    }
    return (
        <Button title={counter}
                onPress={handlePress}></Button>
    )
}