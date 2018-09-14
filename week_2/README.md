# RESTful API 및 npm

## REST (REpresentational State Transfer) API
- HTTP 프로토콜을 기반으로 필요한 자원에 접근하는 방식을 정해놓은 아키텍쳐



## API

- 응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스



## REST 원칙

- Uniform Interface
- Stateless
- Cacheable
- Client-Server
- Layered System
- Code on Demand (optional)



## REST URI 설계

- 슬래시(/)는 리소스 사이의 계층구조를 나타내는데 사용한다.
- URI의 마지막에 슬래시가 포함돼서는 안 된다.
- 가독성을 높이기 위해 하이픈(-)을 사용한다.
- 밑줄 문자는 URI에 사용하면 안 된다.
- URI의 경로 부분은 대소문사를 구분하므로 소문자를 사용하는 것이 좋다.
- URI에는 명사 위주로 사용한다.



## Examples

```
GET /cats
GET /getCats (x)

GET /cats/1
GET /cat/1

POST /cat
POST /addCat (x)

DELETE /cat/1
PUT /cat/1
```



