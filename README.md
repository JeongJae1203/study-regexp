# 정규 표현식 (RegExp)
* 문자열을 검색하고 대체하는 데 사용 가능한 일종의 형식 언어(패턴)

* 정규식, Regular Expression

* 테스트 사이트
	- https://regex101.com
	- https://regexr.com

* 테스트 환경에 따라 사용 불가능한 표현식이 있기 때문에 반드시, 언어를 확인할 것

* 생성자 함수 방식
	- RegExp 생성자 함수 호출하여 사용

* 리터럴(Literal) 방식
	- `/`로 감싸진 패턴을 리터럴로 사용

* 이스케이프 문자(Escape Character)
	- `\` 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자
	- 정규식에만 해당


## 역할
* 문자 검색 (search)

* 문자 대체 (replace)

* 문자 추출 (extract)


## 테스트 사이트
- https://regexr.com


## 정규식 생성
```js
// 생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')

// 리터럴
// /표현/옵션
// /[a-z]/gi
```


## 예제 문자
```js
const str = `
	010-1234-5678
	thesecon@gmail.com
	https://www.omdbapi.com/?apikey=7035c60c&s=frozen
	The quick brown fox jumps over the lazy dog.
	abbcccdddd
`;
```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부 (Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열 (Array) 반환
replace | `문자열.replace(정규식, 대체 문자)` | 일치하는 문자를 대체


## 플래그(옵션)

플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분 않고 일치(ignore case)
m | 여러 줄 일치(multi line)


## 패턴(표현)

패턴 | 설명
--|--
^ab | 줄(Line) 시작에 있는 ab와 일치
ab$ | 줄(Line) 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치
ab? | b가 없거나 b와 일치
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5개 이하 (3 ~ 5개) 연속 일치