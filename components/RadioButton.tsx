// import React, { useState } from "react";
// import { View, TouchableOpacity, Text } from "react-native";

// interface Props {
//   options: string[];
//   selectedOption: string;
// }

// const RadioButton: React.FC<Props> = ({ options, selectedOption }) => {
//   const [selected, setSelected] = useState();

//   return (
//     <View>
//       {options.map((option, index) => {
//         return (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.button,
//               { backgroundColor: option === selected ? "blue" : "white" },
//             ]}
//             onPress={() => {
//               setSelected(option);
//             }}
//           >
//             <Text>{option}</Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };

// const styles = {
//   button: {
//     padding: 10,
//     margin: 5,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: "blue",
//   },
// };

// export default RadioButton;
