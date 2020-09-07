
import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const SettingScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Setting Screen
          </Text>
           {/*
          <Button
            onPress={() => navigation.navigate('HomeScreenStack')}
            title="Go to Home Stack"
          />
          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            title="Go to Home Screen"
          />
          <Button
            onPress={() => navigation.navigate('ExploreScreen')}
            title="Go to Explore Screen"
          />
          */}
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
           Ejemplo React Navigate Hamburgesa
        </Text>
        <Text
          style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
         virgilio.delacruz@anahuac.mx
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default SettingScreen;