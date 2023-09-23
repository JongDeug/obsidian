# WSl 2 npm 속도 문제

---

Category : wsl2

## 문제 직면

현재 WSL(Window Subsystem for Linux) 2를 사용하여 개발을 하고 있다. 그런데 npm을 사용하면 프로젝트를 시작하는데 시간이 너무 오래 걸렸다. (과장해서 체감상 5분) 처음에는 당연한건줄 알았다. 팀플을 하다가 다른 친구들의 npm 실행 시간을 보게 되었는데, 내 환경이 비정상적이라는 것을 깨달았다. 그래서 문제를 해결하기 위해서 구글링을 했다.

## 문제 해결

/mnt/c 라는 곳에서 프로젝트를 개발했는데 이곳은 window의 C드라이브이다. WSL2는 window 드라이브에 액세스할 경우 매우 느리다고 한다. 그래서 프로젝트 환경을 ~/src로 옮겨서 실행했더니 속도가 굉장히 굉장히 빨라졌다 ㄷㄷ

// 해결 스크립트

[https://stackoverflow.com/questions/68972448/why-is-wsl-extremely-slow-when-compared-with-native-windows-npm-yarn-processing](https://stackoverflow.com/questions/68972448/why-is-wsl-extremely-slow-when-compared-with-native-windows-npm-yarn-processing)