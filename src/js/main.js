const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
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
{
	console.log('match 끝 부분 d :: ', str.match(/d$/g)); // result :: null
	// 이유 : 끝나는 ` 앞에 d로 끝나지 않기 때문에 null 반환
	console.log('match 끝 부분 d multi-line :: ', str.match(/d$/gm));	// result :: ['d']
	console.log('match 시작 부분 t multi-line :: ', str.match(/^t/gm));	// result :: ['t']
	console.log('match 시작 부분 t 대소문자 X multi-line :: ', str.match(/^t/gim));	// result :: ['t', 'T']
}
{
	console.log('match . :: ', str.match(/./g));								// result :: 모든 데이터 배열로 출력
	console.log('match http :: ', str.match(/http/g));					// result :: ['http']
	console.log('match h..p :: ', str.match(/h..p/g));					// result :: ['http']
	console.log('match fox :: ', str.match(/fox/g));						// result :: ['fox']
	console.log('match fox | dog :: ', str.match(/fox|dog/g));	// result :: ['fox', 'dog']
	console.log('match https :: ', str.match(/https/g));				// result :: ['https']
	console.log('match https? :: ', str.match(/https?/g));			// result :: ['https', 'http']
}
{
	console.log('match d :: ', str.match(/d/));
	console.log('match d{2} :: ', str.match(/d{2}/));						// result :: ['dd']
	console.log('match d{2} all :: ', str.match(/d{2}/g));			// result :: ['dd', 'dd']
	console.log('match d{2,} all :: ', str.match(/d{2,}/g));		// result :: ['dddd']
	console.log('match d{2,3} all :: ', str.match(/d{2,3}/g));	// result :: ['ddd']
	console.log('match w{2,3} all :: ', str.match(/\w{2,3}/g));	// result :: 모든 2 ~ 3개의 단어 출력
	console.log('match 숫자, 알파벳 포함 {2,3} all :: ', str.match(/\b\w{2,3}\b/g));	
	// result :: ['010', 'com', 'www', 'com', 'The', 'fox', 'the', 'dog']
}
{
	console.log('match f, o, x :: ', str.match(/[fox]/g));
	console.log('match 0 - 9 :: ', str.match(/[0-9]/g));
	console.log('match 0 - 9 1자리 이상 :: ', str.match(/[0-9]{1,}/g));
	console.log('match 가 - 힣 한글 :: ', str.match(/[가-힣]{1,}/g));	
	// result :: ['동해물과', '백두산이', '마르고', '닳도록']
}
{
	const h = `   the hello   word     !
	
	`;

	console.log('match 단어 전체 :: ', str.match(/\w/g));
	console.log('match 문자 경계 :: ', str.match(/\b/g));
	console.log('match ?? :: ', str.match(/\bf\w{1,}\b/g));	// result :: ['frozen', 'fox']
	console.log('match 숫자 전체 :: ', str.match(/\d/g));
	console.log('match 숫자 1자리 이상 :: ', str.match(/\d{1,}/g));
	console.log('match 공백, 탭 :: ', str.match(/\s/g));
	console.log('match 공백, 탭 :: ', h.match(/\s/g));
	console.log('공백 문자 관련 삭제 :: ', h.replace(/\s/g, ''));	// result :: thehelloword!
}

const str2 = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;
{
	console.log('str2 match @ 앞쪽 일치 1개 이상 7개 이하 :: ', str2.match(/.{1,7}(?=\@)/g)); // result :: ['hesecon']
	console.log('str2 match @ 뒤쪽 일치 1개 이상 :: ', str2.match(/(?<=\@).{1,}/g)); // result :: ['gmail.com']
}