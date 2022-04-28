import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BreakingBad = props => {
  const [loading, isLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  //   async function movies() {
  //     try {
  //       isLoading(true);
  //       const response = await fetch(
  //         'https://breakingbadapi.com/api/characters',
  //         {
  //           method: 'GET',
  //           headers: {
  //             Accept: 'application/json',
  //             'Content-Type': 'application/json',
  //           },
  //         },
  //       );
  //       const result = await response.json();
  //       if (result) {
  //         setData(result);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     isLoading(false);
  //   }

  //   React.useEffect(() => movies, []);

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', async () => {
      try {
        isLoading(true);
        const response = await fetch(
          'https://breakingbadapi.com/api/characters',
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          },
        );
        const result = await response.json();
        if (result) {
          setData(result);
        }
      } catch (e) {
        console.log(e);
      }
      isLoading(false);
    });

    return unsubscribe;
  }, [props.navigation]);

  if (loading) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: width,
          height: height,
        }}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }

  return (
    <View style={styles.background}>
      <ScrollView>
        {data ? (
          data.map((item, index) => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Details', item)}
              style={{
                marginTop: height * 0.05,
                width: width * 0.9,
                height: height * 0.1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: scale(1),
              }}
              key={index}>
              <Image
                source={{uri: `${item.img}`}}
                resizeMode="contain"
                style={{width: width * 0.25, height: width * 0.17}}
              />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <View>No result</View>
        )}
      </ScrollView>
    </View>
  );
};

export default BreakingBad;

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
