import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather'

import {
	Container,
	ButtonMenu
} from './style'

export default function Header() {
	const navigation = useNavigation();

	return (
		<Container>
			<ButtonMenu onPress={() => navigation.toggleDrawer()}>
				<Feather name="menu" color="#fff" size={30} />
			</ButtonMenu>
		</Container>
	);
}