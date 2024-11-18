import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Fontisto } from "@expo/vector-icons"; // Importa el set de íconos de Fontisto
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text } from "react-native"; // Cambia la importación a "react-native"
import { DrawerItemList } from "@react-navigation/drawer";

export default function Lagout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerPosition: "left",
          drawerType: "front",
          drawerStyle: {
            backgroundColor: "#021520",
            width: 250,
          },
          drawerInactiveBackgroundColor: "#021520",
          drawerLabelStyle: {
            color: "white",
          },
        }}
        drawerContent={(props) => {
          return (
            <SafeAreaView>
              <View
                style={{
                  height: 200,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#021520",
                  paddingBottom: 12,
                }}
              >
                <Image
                  source={require("../assets/images/newlogo.png")}
                  resizeMode="contain"
                  style={{
                    height: 130,
                    width: 130,
                    borderRadius: 999,
                  }}
                />
                <Text
                  style={{
                    fontSize: 22,
                    color: "white",
                    fontWeight: "bold",
                    marginTop: 8,
                    marginBottom: 8,
                  }}
                >
                  Astech soluciones
                </Text>
              </View>
              {/* Asegúrate de pasar 'props' correctamente a DrawerItemList */}
              <DrawerItemList {...props} />
            </SafeAreaView>
          );
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            drawerIcon: () => (
              <Fontisto
                name="home" // Nombre del ícono en Fontisto
                size={24}
                color="white"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "Profile",
            drawerIcon: () => (
              <Fontisto
                name="person" // Cambia el ícono según el set de Fontisto
                size={24}
                color="white"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="healthmeter"
          options={{
            drawerLabel: "Health Meter",
            drawerIcon: () => (
              <Fontisto
                name="sentry" // Cambia el ícono según el set de Fontisto
                size={24}
                color="white"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="bookinghistory"
          options={{
            drawerLabel: "Booking History",
            drawerIcon: () => (
              <Fontisto
                name="desktop" // Cambia el ícono según el set de Fontisto
                size={24}
                color="white"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="dboticacredits"
          options={{
            drawerLabel: "Dbotica Credits",
            drawerIcon: () => (
              <Fontisto
                name="comment"
                size={24}
                color="white"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="orderhistory"
          options={{
            drawerLabel: "Order History",
            drawerIcon: () => (
              <Fontisto
                name="comment"
                size={24}
                color="white"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="about"
          options={{
            drawerLabel: "About",
            drawerIcon: () => (
              <Fontisto
                name="comment"
                size={24}
                color="white"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="lagout"
          options={{
            drawerLabel: "Lagout",
            drawerIcon: () => (
              <Fontisto
                name="comment"
                size={24}
                color="white"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="referearn"
          options={{
            drawerLabel: "Referearn",
            drawerIcon: () => (
              <Fontisto
                name="comment"
                size={24}
                color="white"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "Settings",
            drawerIcon: () => (
              <Fontisto
                name="comment"
                size={24}
                color="white"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="exit"
          options={{
            drawerLabel: "exit",
            drawerIcon: () => (
              <Fontisto
                name="comment"
                size={24}
                color="white"
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
