import { StyleSheet } from "react-native";

interface IParams {
  backgroundColor: string;
  textColor: string;
}

export default function Style({ backgroundColor, textColor }: IParams) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginRight: 16
    },
    tag: {
      backgroundColor: backgroundColor,
      padding: 12,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30
    },
    tagText: {
      color: textColor,
      fontFamily: 'DMSans_400Regular',
    }
  });
  return styles;
}