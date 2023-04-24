import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLOURS, Items, Brands } from '../database/Database';
import { Button, SearchBar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScrollCard from '../components/ScrollCard';
import Chat from './Chat';
import { HomeTabsScreenProps } from '../router/routes';

const Inbox = ({ navigation }: HomeTabsScreenProps<'Inbox'>) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.paleGrey,
      }}
    >
      <StatusBar backgroundColor={COLOURS.paleGrey} barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginHorizontal: '5%',
            marginVertical: '10%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              fontSize: 48,
              color: COLOURS.black,
              fontWeight: '900',
            }}
          >
            Messages
          </Text>
        </View>

        {/* SearchBar */}
        <View
          style={{
            paddingHorizontal: '5%',
          }}
        >
          {/*@ts-ignore */}
          <SearchBar
            placeholder="Search for items or members"
            platform="android"
            containerStyle={{
              backgroundColor: COLOURS.paleGrey,
            }}
            inputContainerStyle={{
              backgroundColor: COLOURS.white,
              borderRadius: 50,
              padding: 3,
              paddingHorizontal: 10,

              shadowColor: COLOURS.black,
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 12,
            }}
            inputStyle={{
              fontSize: 16,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: '5%',
            paddingTop: '5%',
          }}
        >
          <Button title="CHAT" onPress={() => navigation.navigate('Chat')} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Inbox;
