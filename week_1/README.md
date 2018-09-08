# nodejs 핵심 개념
- 크롬 v8  엔진으로 빌드된 자바스크립트 런타임( 런타임 : 특정 언어로 만든 프로그램들을 실행할 수 있는 환경)
- 이벤트기반
- 논블로킹 I/O모델
- npm -> 세계에서 가장 큰 오픈소스 라이브러리 생태계

노드는 자바스크립트 application이 서버로서 기능하기 위한 도구 제공 


### 이벤트 기반
이벤트가 발생할 때 미리 지정해둔 작업을 수행하는 방식

미리 지정해둔 방식 -> 이벤트 리스너에 callback function 등록
여러 이벤트가 등록되어 동시에 발생했을때 "이벤트 루프"가 판단하여 순서 결정 ( 함수메모리 호출 스택에 쌓임)

- 이벤트 루프 : 이벤트 발생시 호출할 콜백함수, 순서 관리 결정, 노드 종료될때까지 작업 반복
- 태스크 큐 : 이벤트 발생 후 호출할 콜백함수가 쌓여있는 콜백 큐
- 백그라운드 : 시간이 걸리는 작업, 이벤트 리스너가 대기하는 곳
```
function print(){
    console.log("나는 좀 대기해");
}

console.log("start");
setTimeout(print(),5000);
console.log("end");
```
출력 결과 : 
start<br/>
end<br/>
나는 좀 대기해<br/>

print() => 백그라운드에서 5초 후 태스크 큐에 쌓임


> 오래걸리는 작업을 비동기적으로 효율적이게 처리 가능함 -> 이전 작업이 완료될 때까지 멈추지 않고 다음 작업을 수행함

### 논블로킹 I/O
싱글스레드이므로 노드 프로세스 이외의 다른 컴퓨팅 자원을 사용할 수 있는 I/O 작업이 효율적임

I/O 작업 : 입력 , 출력 ( 파일 시스템 접근, 네트워크 요청 같은 작업)
노드는 싱글 스레드 논블로킹 방식을 채택 후 멀티 프로세싱 방식을 사용함 ( js는 싱글 스레드 특성을 띄고 있어 멀티 프로세싱 사용)

### 노드의 장점과 단점

- 많은 수의 IO도 스레드하나가 감당가능함 - 컴퓨터 자원 적게 사용
- CPU 부하가 큰 작업은 적절하지 않음(블로킹 발생)
- 에러관리 필수
- 웹서버 내장 ( 규모가 작은 서버에 한함)
- <strong>javascript 사용</strong> -> 개발 생산성 높임
- 특화된 서버, 특화된 언어보다 어중간한 성능
- JSON 형식과 호환 쉬움 
- 개수 많으나 작은 데이터 실시간으로주고 받는곳에 많이 사용
- 이미지, 비디오 등 대규모 데이터처리에는 비효율적
- 웹 뿐만 아니라 Electron 으로 툴 개발 가능

# Windows10에서 bash로 nodejs 사용하기

https://www.howtogeek.com/265900/everything-you-can-do-with-windows-10s-new-bash-shell/

설치 이후

apt-get update<br/>
apt-get install -y build-essential<br/>
apt-get install curl<br/>
curl -sL https://deb.nodesource.com/setup_10.x | bash --<br/>
apt-get install -y nodejs


# 참고 사이트

[es6-features](http://es6-features.org/#Constants)
[javascript 지원 현황](https://kangax.github.io/compat-table/es6/)

