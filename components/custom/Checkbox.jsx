import { useState } from "react";
import { Checkbox } from "react-native-paper";
import { View, Text } from "react-native";

const CustomCheckbox = ({ label, checked, setChecked }) => {
  return (
    <View>
      <Text>{label}</Text>
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => setChecked(!checked)}
      />
    </View>
  );
};

export default CustomCheckbox;
