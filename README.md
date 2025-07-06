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