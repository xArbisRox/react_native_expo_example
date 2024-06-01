import DropDown from "react-native-paper-dropdown";

const CustomDropdown = ({
  label,
  mode,
  visible,
  showDropDown,
  onDismiss,
  value,
  setValue,
  list,
  multiselect,
  style
}) => {
  if (multiselect) {
    return (
      <DropDown
        label={label}
        mode={mode}
        visible={visible}
        showDropDown={showDropDown}
        onDismiss={onDismiss}
        value={value}
        setValue={setValue}
        list={list}
        multiSelect
        style={style}
      />
    );
  }
  return (
    <DropDown
      label={label}
      mode={mode}
      visible={visible}
      showDropDown={showDropDown}
      onDismiss={onDismiss}
      value={value}
      setValue={setValue}
      list={list}
    />
  );
};
export default CustomDropdown;
