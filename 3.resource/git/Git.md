# git 사용법

## 문제 직면

git과 github를 자주 사용하고 있었지만 git add, commit, push, pull 등 간단한 명령어만 알고 있는 상태였다. 각 명령어의 상세 동작원리를 몰랐고 궁금해서 강의를 듣게 되었다.

## 문제 해결

참고자료 : 코딩애플 무료 git 강의 영상, [https://codingapple.com/course-status/](https://codingapple.com/course-status/)

🎯 git add와 commit
![[1.png]]

staging area

commit을 하기 전 commit할 파일들을 모아두는 곳을 말한다.

staging area에 파일을 넣는 행위를 staging이라하며, git add 명령어를 통해 staging할 수 있다.

repository

commit된 파일의 버전들을 모아두는 곳이다.

🎯 git status

현재 상태를 알려준다.

🎯 git log —all —oneline —graph

commit 기록을 한 눈에 파악이 가능하다. —graph를 사용하면 그래프로 그려준다.

🎯 git diff, git difftool

파일의 어떤 부분이 수정됐는지 확인하기 위해 사용하는 명령어이다.

근데 이거보다 vscode extension을 사용하는게 더 편리한 것 같다.

🎯 git branch

![[2.png]]
git branch 명령어를 사용하면 쉽게 프로젝트의 복사본을 만들 수 있다.

🎯 git switch

git switch 명령어를 통해서 원하는 branch로 이동할 수 있다.

🎯 git merge

![[3.png]]
git merge 명령어를 통해 branch를 합칠 수 있다.

만약 merge conflict가 발생한다면 원하는 코드를 남기고 git add, commit을 해주면 merge가 완성된다.

🎯 다양한 merge 방법

1. 3-way merge
2. fast-forward
3. squash
4. rebase

**3-way merge**
![[4.png]]

branch에 각각 commit이 1회 이상있을 때 merge를 하면 새로운 commit을 자동으로 생성해주는데 이를 3-way merge라고 한다.

**fast-forward merge**

![[5.png]]
신규 branch를 기존 branch에 그냥 종속시키는 것을 말한다. 기준이 되는 branch에 신규 commit이 없으면 자동으로 fast-forward merge가 발동된다.

원하지 않는다면 git merge —no —ff 브랜치을 사용해 3-way merge할 수 있다.

**squash and merge**

![[6.png]]
3-way merge처럼 선을 이어주지 않고, 새 branch에 있던 코드 변경 사항들이 master branch로 순간이동한다.

```jsx
git switch main
git merge --squash 브랜치명
git commit -m '메세지'
```

**rebase and merge**
![[7.png]]

rebase란 새로운 branch 시작점을 다른 commit으로 옮겨주는 행위이다.

그리고 나서 fast-forward merge를 한다.

```jsx
git switch 새로운브랜치
git rebase main

git switch main
git merge 새로운브랜치
```