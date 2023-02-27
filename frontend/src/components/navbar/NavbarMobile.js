import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    NativeBaseProvider,
    Button,
    Box,
    HamburgerIcon,
    Pressable,
    Heading,
    VStack,
    Text,
    Center,
    HStack,
    Divider,
    Icon,
} from "native-base";
import AboutUsIcon from '../../assets/images/AboutUsIcon';
import ScheduleIcon from '../../assets/images/ScheduleIcon';
import ActivitiesIcon from '../../assets/images/ActivitiesIcon';
import SpeakersIcon from '../../assets/images/SpeakersIcon';
//import Icon from 'react-native-vector-icons/AntDesign';

global.__reanimatedWorkletInit = () => { };
const Drawer = createDrawerNavigator();
function Component(props) {
    return (
        <Center>
            <Text mt="12" fontSize="18">
                This is {props.route.name} page.
            </Text>
        </Center>
    );
}

const getIcon = (screenName) => {
    switch (screenName) {
        case "Organização":
            return AboutUsIcon;
        case "Horário":
            return ScheduleIcon;
        case "Atividades":
            return ActivitiesIcon;
        case "Oradores":
            return SpeakersIcon;
        default:
            return undefined;
    }
};

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} safeArea>
            <VStack space="6" my="2" mx="1">
                <VStack divider={<Divider />} space="4">
                    <VStack space="3">
                        {props.state.routeNames.map((name, index) => (
                            <Pressable
                                px="5"
                                py="3"
                                rounded="md"
                                bg={"transparent"}
                                onPress={(event) => {
                                    props.navigation.navigate(name);
                                }}
                            >
                                <HStack space="7" alignItems="center">
                                    <Icon
                                        color={"gray.500"}
                                        size="5"
                                        as={<MaterialCommunityIcons name={getIcon(name)} />}
                                    />
                                    <Text
                                        fontWeight="500"
                                        color={"gray.700"}
                                    >
                                        {name}
                                    </Text>
                                </HStack>
                            </Pressable>
                        ))}
                    </VStack>
                </VStack>
            </VStack>
        </DrawerContentScrollView>
    );
}
function MyDrawer() {
    return (
        <Box safeArea flex={1}>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name="Inbox" component={Component} />
                <Drawer.Screen name="Outbox" component={Component} />
                <Drawer.Screen name="Favorites" component={Component} />
                <Drawer.Screen name="Archive" component={Component} />
                <Drawer.Screen name="Trash" component={Component} />
                <Drawer.Screen name="Spam" component={Component} />
            </Drawer.Navigator>
        </Box>
    );
}
export default function NavbarMobile() {
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <MyDrawer />
            </NativeBaseProvider>
        </NavigationContainer>
    );
}
