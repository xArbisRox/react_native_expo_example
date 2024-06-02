import * as React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import Background from "../../../components/custom/Gradient";
import CustomDropdown from "../../../components/custom/Dropdown";
// import CustomCheckbox from "../../../components/custom/Checkbox";
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
    selectDropdown: {
      flexBasis: "35%", // not correctly passed to CustomDropdown
    },
/*
    checkboxContainer: {
      flexBasis: "35%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: theme.colors.surface,
    },
*/
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
  const [showSeasonDropDown, setShowSeasonDropDown] = useState(false);

  // Checkbox section
  const teamList = [
    {
      label: "TSG Münster I",
      value: "id_12345",
    },
    {
      label: "TSG Münster II",
      value: "id_54321",
    },
    {
      label: "TSG Münster III",
      value: "id_67890",
    },
  ];

  const [team, setTeam] = useState("id_12345");
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);

  return (
    <View style={[baseStyles.container, { justifyContent: "start" }]}>
      <Background />
      <View style={styles.filterContainer}>
        <CustomDropdown
          label="Season"
          mode="outline"
          visible={showSeasonDropDown}
          showDropDown={() => setShowSeasonDropDown(true)}
          onDismiss={() => setShowSeasonDropDown(false)}
          value={season}
          setValue={setSeason}
          list={seasonList}
          style={styles.selectDropdown}
        />
        <CustomDropdown
            label="Team"
            mode="outline"
            visible={showTeamDropdown}
            showDropDown={() => setShowTeamDropdown(true)}
            onDismiss={() => setShowTeamDropdown(false)}
            value={team}
            setValue={setTeam}
            list={teamList}
            style={styles.selectDropdown}
          ></CustomDropdown>
      </View>
      <GamesDataTable />
    </View>
  );
};

export default GamesPage;
