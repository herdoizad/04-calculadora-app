import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">50 x 50</ThemeText>
        <ThemeText variant="h2">2500</ThemeText>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="AC"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("AC")}
        />
        <CalculatorButton
          label="+/-"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("+/-")}
        />
        <CalculatorButton
          label="del"
          blackText
          color={Colors.lightGray}
          onPress={() => console.log("del")}
        />
        <CalculatorButton
          label="÷"
          blackText
          color={Colors.orange}
          onPress={() => console.log("÷")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="7"
          blackText={false}
          color={Colors.darkGray}
          onPress={() => console.log("AC")}
        />
        <CalculatorButton
          label="8"
          blackText={false}
          color={Colors.darkGray}
          onPress={() => console.log("+/-")}
        />
        <CalculatorButton
          label="9"
          blackText={false}
          color={Colors.darkGray}
          onPress={() => console.log("del")}
        />
        <CalculatorButton
          label="x"
          blackText={false}
          color={Colors.orange}
          onPress={() => console.log("÷")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="4"
          blackText={false}
          color={Colors.darkGray}
          onPress={() => console.log("AC")}
        />
        <CalculatorButton
          label="5"
          blackText={false}
          color={Colors.darkGray}
          onPress={() => console.log("+/-")}
        />
        <CalculatorButton
          label="6"
          blackText={false}
          color={Colors.darkGray}
          onPress={() => console.log("del")}
        />
        <CalculatorButton
          label="-"
          blackText={false}
          color={Colors.orange}
          onPress={() => console.log("÷")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          blackText={false}
          color={Colors.darkGray}
          onPress={() => console.log("AC")}
        />
        <CalculatorButton
          label="2"
          blackText={false}
          color={Colors.darkGray}
          onPress={() => console.log("+/-")}
        />
        <CalculatorButton
          label="3"
          blackText={false}
          color={Colors.darkGray}
          onPress={() => console.log("del")}
        />
        <CalculatorButton
          label="+"
          blackText={false}
          color={Colors.orange}
          onPress={() => console.log("÷")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          blackText={false}
          doubleSize={true}
          color={Colors.darkGray}
          onPress={() => console.log("AC")}
        />
        <CalculatorButton
          label="."
          blackText={false}
          color={Colors.darkGray}
          onPress={() => console.log("+/-")}
        />
        <CalculatorButton
          label="="
          blackText={false}
          color={Colors.orange}
          onPress={() => console.log("÷")}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
