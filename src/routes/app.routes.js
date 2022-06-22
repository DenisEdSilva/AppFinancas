import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import New from '../pages/New';
import CustomDrawer from '../components/CustomDrawer';

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
	return (
		<AppDrawer.Navigator
			drawerContent={(props) => <CustomDrawer {...props} />}
			screenOptions={{
				headerShown: false,
				drawerStyle: {
					backgroundColor: '#171717',

				},
				drawerLabelStyle: {
					fontWeight: 'bold',
				},
				drawerActiveTintColor: '#fff',
				drawerActiveBackgroundColor: '#00b94a',
				drawerInactiveBackgroundColor: '#000',
				drawerInactiveTintColor: '#DDD',
				drawerItemStyle: {
					marginVertical: 5,
				}
			}}

		>
			<AppDrawer.Screen name="Pagina Inicial" component={Home} />
			<AppDrawer.Screen name="Registrar" component={New} />
			<AppDrawer.Screen name="Perfil" component={Profile} />
		</AppDrawer.Navigator>
	)
}
