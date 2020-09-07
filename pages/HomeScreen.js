
import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
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
            Home Screen
          </Text>
          {/*
          <Button
           onPress={() => navigation.navigate('SettingScreenStack')}
            title="Go to Setting Screen"
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

export default HomeScreen;