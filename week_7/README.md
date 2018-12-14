# JWT
### 왜 JWT 인가?
최근에는 jwt와 oauth를 활용한 토큰기반의 인증방식이 주로 사용되고 있다.
이전에 사용되던 쿠키와 세션에는 보안문제라든지 여러문제들이 있기 때문이다.
- 쿠키의 문제
    - 브라우저에 사용자 정보가 기록되어 보안에 취약
    - 위변조의 가능성이 높음

- 세션의 문제
    - 서버의 메모리에 적재
    - 트래픽이 많은 웹사이트일경우 부하 생김
    - 세션 정보가 중간에 탈취당할 수 있음

### jwt와 oauth
- oauth
    - sns로 로그인하기, 페이스북,구글 등등
    - 다른 어플리케이션으로 사용자 인증을 인가해줌
    - oauth 인증을 허가하는 서버에서 토큰 발급 -> 권한 부여
    - 여러 사용자 인증방식들을 표준화한 인증방식

- jwt
    - 사용자 정보를 json에 담아 암호화후 http헤더에 추가
    - 서버에서 해싱 작업 -> string 토큰 생성
	- HMAC(hash-based Message Authentication)
	- 데이터 무결성 보장
    - 서버에 저장되지 않는 방식으로 서버부하가 없음
    - [공식문서](https://jwt.io/introduction/)
    - jwt의 구조
	![jwt 구조](https://cdn.auth0.com/blog/legacy-app-auth/legacy-app-auth-5.png)
	- Header
	    - typ : 토큰타입
	    - alg : 해싱 알고리즘
	- Payload
	    - 토큰에 대한 정보
	    - claim으로 값 표현
		- registered clain
		    - iss, exp, sub, aud 등이 있다.
		    - 미리 정의된 claim
		- public claim
		    - 공개적인 claim, URI방식으로작성
		- private claim
		    - 서로 동의된 custom claim
	- Signature
	    -  header와 payload의 인코딩 값을 .으로 연결후 secret key 로 해싱	    


### jsonwebtoken 라이브러리 사용해보기
- [github](https://github.com/auth0/node-jsonwebtoken)
- 구현 자체가 쉽다
- 핵심
    - sign 메소드
	```javascript
	const jwt = require('jsonwebtoken')
	let token = jwt.sign({foo:'bar'},'secret-key')
	//jwt.sign(payload, secret-key, [options, callback]
	```
	- payload
	claim에 대한 정보에는 중요한 정보를 넣지 않는다. ( 암호화 x)
	- secret-key
	모듈을 import하는 방식으로 노출을 하지 않는다.
	- 토큰에 대한 정보
	유효시간
	- 콜백함수
	콜백함수를 쓰지 않으면 동기, 쓰면 비동기
    - verify 메소드
	```javscript
	const decode = jwt.verify(token, secret_key)
	```	
	- token을 풀어줌 , 미들웨어에서 사용하면 됨
- 만든 token으로 [jwt debugger](http://jwt.io/) 들어가서 토큰 분석해보기

