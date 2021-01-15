import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
// Custom: Style, Component
import styles from './Styles/HeaderStyle';
// Icon
import MessageIcon from '../../assets/icon/svg/message.svg';
import Logo from '../../assets/icon/svg/Logo.svg';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <MessageIcon />
      </TouchableOpacity>
      <TouchableOpacity>
        <Logo />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={require('../../assets/icon/drawable-xxhdpi/michael-dam-4.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
