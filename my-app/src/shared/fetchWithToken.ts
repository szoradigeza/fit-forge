
const fetchWithToken = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
	const token = localStorage.getItem('fit-forge-token');

	if (!token) {
		throw new Error('No token found in localStorage');
	}

	const headers: HeadersInit = {
		Authorization: `Bearer ${token}`,
		'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
		...options.headers
	};

	const response = await fetch(`http://localhost:3200${url}`, {
		...options,
		headers
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	return response.json() as Promise<T>;
};

export default fetchWithToken;
