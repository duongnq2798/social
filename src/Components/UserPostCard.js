// Core Import
import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
// Import Lib
import PropTypes from 'prop-types';
// Svg Import
import Online from '../../assets/icon/svg/online.svg';
import Dot from '../../assets/icon/svg/dot.svg';
import More from '../../assets/icon/svg/more.svg';
// Style Import
import styles from './Styles/UserPostCardStyle';

const UserPostCard = ({
  photoUri,
  userName,
  locationname,
  timeUploadPost,
  onlineOrOffline,
}) => {
  const [isOnline, setIsOnline] = useState(onlineOrOffline);
  // Determine online user status: Online or Offline
  useEffect(() => {
    setIsOnline(onlineOrOffline);
  }, [onlineOrOffline]);

  return (
    <View style={styles.container}>
      <View style={styles.viewImageGroup}>
        <Image style={styles.image} source={{uri: photoUri}} />
        {isOnline ? <Online style={styles.online} /> : null}
      </View>

      <View style={styles.viewInfoUser}>
        <View>
          <Text style={styles.userName}>{userName}</Text>
          <View style={styles.locationTime}>
            <Text style={styles.textLocationTime}>{locationname}</Text>
            <Dot style={styles.dot} />
            <Text style={styles.textLocationTime}>{timeUploadPost}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <More />
        </TouchableOpacity>
      </View>
    </View>
  );
};

UserPostCard.propTypes = {
  photoUri: PropTypes.string,
  userName: PropTypes.string,
  locationname: PropTypes.string,
  timeUploadPost: PropTypes.string,
  onlineOrOffline: PropTypes.bool,
};

export default UserPostCard;
