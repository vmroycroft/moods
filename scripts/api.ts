const baseUrl = 'http://localhost:5000';

const api = {
	get: async () => {
		try {
			const response = await fetch(`${baseUrl}/moods`, {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			});
	
			const data = await response.json();
    	return data;
		} catch (error) {
			console.error(error);
		}
	},
	save: async (mood: String) => {
		try {
			const response = await fetch(`${baseUrl}/moods`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: mood
				})
			});
	
			const data = await response.json();
    	return data;
		} catch (error) {
			console.error(error);
		}
	}
};


export default api;