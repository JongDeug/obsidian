# Mysql, Mongodb 명령어 정리

---

Category : 리눅스 명령어

# 문제 직면

---

Mysql, Mongodb를 WSL에서 실행하는데 명령어를 자주 까먹어서 정리 해야겠다는 생각이 들었다.

# 문제 해결

---

## [Mysql]

### command

DB 시작 : sudo service mysql start

DB 로그인 : sudo mysql -u root -p

포트 확인 : show global variables like 'port';

### privacy

[privacy](https://www.notion.so/privacy-6675c559ee784ed4a00cda668e68a27b?pvs=21)

## [MongoDB]

### command

Dependency Error :

sudo dpkg --remove --force-remove-reinstreq <package name>

ex) sudo dpkg --remove --force-remove-reinstreq mongodb-org-database (강제)

DB 시작 :

sudo service mongodb start

### install(wsl)

[https://docs.microsoft.com/ko-kr/windows/wsl/tutorials/wsl-database](https://docs.microsoft.com/ko-kr/windows/wsl/tutorials/wsl-database)

### uninstall(wsl)

`dpkg -l | grep mongodb` =>  mongodb 파일 찾기

[https://www.mongodb.com/basics/uninstall-mongodb](https://www.mongodb.com/basics/uninstall-mongodb)

cd /etc/apt/sources.list.d

기존 list 파일 삭제