import * as React from 'react';
import { HStack, IconButton, Icon, Text, Box, StatusBar, Center } from "native-base";
import { StyleSheet } from 'react-native';

export const Navbar = () => {


  return (
    <Center> 
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack style={styles.container }  bg="violet.600" px="1" py="3" justifyContent="space-between" alignItems="center">
        <HStack alignItems="stretch">
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
      </HStack>
    </Center>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: '300px',
    borderBottomRightRadius: '300px',
    padding:'1em',
  },
});
