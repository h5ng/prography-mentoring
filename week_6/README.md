# CRAWLING

### chrome network tab

![network-tab](./chrome-network.png)

- 크롤링을 하기 위해서는 여러가지 툴이 있다. fiddler , wireshark 등등
- 크롬은 웹 http 패킷 디버깅을 할 수 있는 네트워크 탭을 제공한다
- 네트워크탭을 키고 새로고침을 누르게 되면 해당 페이지를 로딩하면서 발생한 네트워크 요소를 모두 Recording해준다.
- 안보이면 다시 새로고침 한번더
- 왼쪽 위에 빨간색 버튼은 현재 Recording중이라는 상태이며 한번 더 누르게되면 회색으로 변하고 더이상 캡쳐를 하지 않게 된다.
- 그 옆에 사선이 그어진 버튼은 현재 Recording 되어있는 패킷을 삭제하는 버튼이다.
- 그옆에 깔때기 버튼은 필터 버튼으로 각종 필터를 제공하여 원하는 패킷만 볼 수 있게 만들어준다.
    - 기본적으로 ALL 이 선택되어져 있으며, 앞에 검색창에서도 검색할 수 있다.
    - Keyword
    - domain
    - has-response-header
    - is
    - larger-than
    - method
    - mime-type
    - scheme
    - set-cookie-name
    - set-cookie-value
    - set-cookie-domain
    - status-code
    - 예를 들어 method:POST라고 입력하면 HTTP METHOD가 POST인 패킷만 보이게 된다. (Keyword: value)
    - 필터중 XHR은 웹브라우저와 웹 서버간의 데이터 전송하는 객체를 보여준다.

![XHR](./XHR.png)

- 패킷을 클릭하게 되면 Headers, Preview, Responsem Cookies, Timing 의 5개 탭이 보이게 된다
- Headers 탭에는 패킷의 헤더정보와 response reqeust 헤더정보를 알 수 있고 송신한 정보까지 볼 수 있다.
- Preview는 데이터를 미리보기하여 보여준다
- Response는 Json data나 XML데이터가 넘어온 그대로 볼 수 있다.
- Cookie탭에는 Request/Response 쿠키정보 조회가 가능하다

### chrome element tab
- HTML의 element를 확인할 수 있음
- 해당 element의 우클릭을 하게 되면 copy tab에 copy XPath를 통해 XPath를 알 수 있음
    - XPath란 W3C 표준으로 언어문서의 구조를 통해 경로로 해당 Element에 접근할 수 있게함
- CSS를 보면서 수정할 수 있음

### chrome source tab

![source](./chrome-source.png)

- source tab에서는 문서를 직접 수정할 수 있음 ( 임시적으로)
- break point를 걸어 js가 어떻게 작동되는지 확인 가능
- 어디 부분에서 ajax fetch를 하는지, submit을 하는지 모를 경우에는 Event Listener Breakpoints 섹션에서 확인할 수 있다. 자동으로 중단됨


### Crwaling
- 개발자도구에서 <F12>를 누르고 Elements탭에 들어가서 자기가 따오고싶은 정보에 대해 우클릭 후 copy XPath를 클릭한 후 해당 정보를 이용한다.
    - 네이버 실검 뽑아올때 이용
- 자기가 가져올 정보가 ajax를 통해 가져오는 정보면 Network탭에서 어떤 패킷인지 확인후 해당 request의 헤더와 body를 똑같이 맞춰준다. 그 후 response를 파싱하여 사용



### 참고 사이트

- [실습](https://subicura.com/2018/02/14/javascript-debugging.html)
