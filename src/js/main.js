const str = `
	010-1234-5678
	thesecon@gmail.com
	https://www.omdbapi.com/?apikey=7035c60c&s=frozen
	The quick brown fox jumps over the lazy dog.
	abbcccdddd
`;
{
	// 생성자 함수
	// const regexp = new RegExp('the', 'gi');	// g : 플래그, i : 대소문자 구분 X
	// console.log('regexp :: ', str.match(regexp)); // result :: ['the', 'The', 'the']
	
	// 리터럴 방식
	// const regexp = /the/gi;
	// console.log('regexp :: ', str.match(regexp)); // result :: ['the', 'The', 'the']
}
{
	const regexp = /fox/gi;
	// console.log('test :: ', regexp.test(str));	// result :: true
	console.log('replace :: ', str.replace(regexp, 'AAA'));
	// result :: 010-1234-5678
	// thesecon@gmail.com
	// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
	// The quick brown AAA jumps over the lazy dog.
	// abbcccdddd
	
	console.log('str :: ', str);
	// result :: 010-1234-5678
	// thesecon@gmail.com
	// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
	// The quick brown fox jumps over the lazy dog.
	// abbcccdddd
}
{
	// const regexp = /the/;
	// const regexp = /the/g;												// result :: ['the', 'the']
	const regexp = /the/gi;													// result :: ['the', 'The', 'the']
	console.log('match :: ', str.match(regexp));
}
{
	console.log('match . :: ', str.match(/\./gi));		// result :: ['.', '.', '.', '.']
	console.log('match .$ :: ', str.match(/\.$/gi));	// result :: null
	console.log('match .$ multi-line :: ', str.match(/\.$/gim));	// result :: ['.']
}