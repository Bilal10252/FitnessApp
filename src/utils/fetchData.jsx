const url = 'https://exercisedb.p.rapidapi.com/exercises';
const options = {
	method: 'GET',
	headers: {
		// 17f5cd48cemshd47b8bb5f9cf54fp16f09bjsnebc2f8984263 - arshadbilal1025 account
		// 3eab29036amsh06806f472744ffdp1d8452jsn0a3bde9eda30 - sabaarshad.isl account
		// db029cd5fdmsh58059616388fba7p1a5211jsn8cf7efa15157 - hinasheryar account
		'X-RapidAPI-Key': "db029cd5fdmsh58059616388fba7p1a5211jsn8cf7efa15157",
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};



let fetchData = async (urlAddition) => {
    let response = await fetch(`${url}${urlAddition}`, options);
    let data = await response.json();
    return data;
}


const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com/';
const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3eab29036amsh06806f472744ffdp1d8452jsn0a3bde9eda30',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchYoutubeData = async (urlAddition) => {

	let response =	await fetch(`${youtubeUrl}${urlAddition}`, youtubeOptions);
	let data     =	await response.json();
	return data;

}
export default fetchData;