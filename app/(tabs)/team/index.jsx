import * as React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import Background from "../../../components/custom/Gradient";
import CustomDropdown from "../../../components/custom/Dropdown";
import CustomCheckbox from "../../../components/custom/Checkbox";
import GamesDataTable from "../../../components/custom/team/GamesDataTable";
import baseStyles from "@/components/custom/Style";

const GamesPage = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    filterContainer: {
      marginTop: "10%",
      marginBottom: "10%",
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    seasonSelect: {
      flexBasis: "35%",
    },
    checkboxContainer: {
      flexBasis: "35%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: theme.colors.surface,
    },
  });

  // Dropdown section
  const seasonList = [
    {
      label: "2022/2023",
      value: "2022",
    },
    {
      label: "2023/2024",
      value: "2023",
    },
    {
      label: "2024/2025",
      value: "2024",
    },
  ];
  const [season, setSeason] = useState("2023");
  const [showDropDown, setShowDropDown] = useState(false);

  // Checkbox section
  const [playChecked, setPlayChecked] = useState(false);
  const [multipleChecked, setMultipleChecked] = useState(false);

  return (
    <View style={[baseStyles.container, { justifyContent: "start" }]}>
      <Background />
      <View style={styles.filterContainer}>
        <CustomDropdown
          label="Season"
          mode="outline"
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={season}
          setValue={setSeason}
          list={seasonList}
          style={styles.seasonSelect}
        />
        <View style={styles.checkboxContainer}>
          <CustomCheckbox
            label={"Multiple?"}
            checked={multipleChecked}
            setChecked={setMultipleChecked}
          />
          <CustomCheckbox
            label={"Played?"}
            checked={playChecked}
            setChecked={setPlayChecked}
          />
        </View>
      </View>
      <GamesDataTable />
    </View>
  );
};

export default GamesPage;
