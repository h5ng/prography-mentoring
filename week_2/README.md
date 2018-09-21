# RESTful API 및 npm

## NPM 
- Node Package Manager

***

### Package
- 대부분의 package가 NPM에 등록되어 있음
- 패키지 관리를 위해 package.json 파일 필요 ( npm init)

<strong>package.json 파일 설정</strong>
```
package name:
version:
description:
entry point:
test command:
git repositery
keywords:
author:
license:

```
- script property안에는 여러 script를 넣어 사용할 수 있음( start, test ..)
- package 설치하면 dependencies 라는 속성이 생성됨
- node_modules라는 폴더도 생성됨
> node_modules는 삭제되어도 package.json만 있으면 npm install(npm i)로 설치할 수 있음 
- 패키지와 의존관계에 있는 패키지도 다 설치됨 
> 해당 패키지 목록은 package-lock.json에 저장됨
- 개발용 패키지를 설치할 때는 npm install --save-dev 로 설치함 ( npm i -D)
> devDependencues 속성에 포함됨

- 전역 설치할 수 있으나 package.json에 포함되지않아 npm install 시에 설치안되어 찾기 어려움

### package version
- SemVer - Semantic versioninig
> major.minor.patch
- major 버전은 하위호환 되지 않도록 많이 바꿨을때
- minor 버전은 기능 업데이트 정도 되었을때
- patch 버전은 버그 수정하였을 때
- @^ (major 버전 미만)
- @~ (minor 버전 미만)
- @latest 최신버전 설치

***

- npm outdated 
> current 와 wanted가 다르다면 npm update 를 통해 업데이트 할 수 있음
- npm search ( package.json에 설정한 keyword)
- npm version [] - package.json 버전관리
- [npm-command](https://docs.npmjs.com/)

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

## IP


