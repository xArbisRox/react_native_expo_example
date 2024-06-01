import * as React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { DataTable, useTheme } from "react-native-paper";
import Background from "../../../components/custom/Gradient";
import CustomDropdown from "../../../components/custom/Dropdown";
import CustomCheckbox from "../../../components/custom/Checkbox";
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
      backgroundColor: theme.colors.surfaceVariant,
    },
    datatable: {
      height: "70%",
      backgroundColor: theme.colors.surfaceVariant,
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

  // Datatable section
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );

  const [items] = React.useState([
    {
      key: 1,
      name: "Cupcake",
      calories: 356,
      fat: 16,
    },
    {
      key: 2,
      name: "Eclair",
      calories: 262,
      fat: 16,
    },
    {
      key: 3,
      name: "Frozen yogurt",
      calories: 159,
      fat: 6,
    },
    {
      key: 4,
      name: "Gingerbread",
      calories: 305,
      fat: 3.7,
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

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
      <DataTable style={styles.datatable}>
        <DataTable.Header>
          <DataTable.Title>Dessert</DataTable.Title>
          <DataTable.Title numeric>Calories</DataTable.Title>
          <DataTable.Title numeric>Fat</DataTable.Title>
        </DataTable.Header>

        {items.slice(from, to).map((item) => (
          <DataTable.Row key={item.key}>
            <DataTable.Cell>{item.name}</DataTable.Cell>
            <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
            <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={"Rows per page"}
        />
      </DataTable>
    </View>
  );
};

export default GamesPage;
