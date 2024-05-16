import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

import Colors from '../shared/constants/Colors';
import Font from '../shared/constants/Font';
import FontSize from '../shared/constants/FontSize';
import Spacing from '../shared/constants/Spacing';

const AppTextInput: React.FC<TextInputProps> = ({...otherProps}) => {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
      style={[
        {
          fontFamily: Font['poppins-regular'],
          fontSize: FontSize.small,
          padding: Spacing * 2,
          backgroundColor: Colors.lightPrimary,
          borderRadius: Spacing,
          marginVertical: Spacing,
        },
        focused && {
          borderWidth: 3,
          borderColor: Colors.primary,
          shadowOffset: {width: 4, height: Spacing},
          shadowColor: Colors.primary,
          shadowOpacity: 0.2,
          shadowRadius: Spacing,
        },
      ]}
      {...otherProps}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({});
