import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	function renderMood({ item }) {
		return <Image key={item._id} source={require(`./${item.name}.png`)} style={{ width: 50, height: 50 }} />;
	}

	useEffect(() => {
		fetch('http://localhost:5000/moods')
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}, []);

	if (isLoading) return <ActivityIndicator />;

	return (
		<SafeAreaView style={styles.container}>
			<FlatList numColumns={7} data={data} renderItem={renderMood} keyExtractor={(item: any) => item._id} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
