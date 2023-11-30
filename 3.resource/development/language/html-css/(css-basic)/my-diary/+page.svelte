<script>
    import user from "$lib/img/portrait.png";
</script>

<header class="header">
    <div class="header-inner">
        <div class="logo">
            <h1><a href="#none">HAGD</a></h1>
        </div>
        <div class="menu">
            <ul class="menu__ul">
                <li><a href="#yesterday">어제의 일기</a></li>
                <li><a href="#today">오늘의 일기</a></li>
                <li><a href="#tommorrow">내일의 일기</a></li>
            </ul>
        </div>
        <div class="user">
            <img src={user} alt="" width="32" height="32">
        </div>
    </div>
</header>
<!--//header-->

<div class="container">
    <div class="wrapper">
        <div class="wrapper__head">
            <h1 class="wrapper__head__title">
                나만의 일기장
            </h1>
            <p class="wrapper__head__sub-title">
                나만의 일기장 입니다! <br>
                원하는 색과 사이즈로 일기장을 커스텀 해보세요.
                <span id="point">
                    Have a Good Day. 😀
                </span>
            </p>
        </div>
        <div class="wrapper__body">
            <div class="wrapper__body__content">
                <p class="diary-title">
                    📌종환이의 일기
                </p>
                <p>
                    오늘은 <span id="content1">김치찜</span>을 먹었다. <span id="content2">치즈 계란말이</span>도 같이 나오는 세트였다. <br>
                    맛있어서 정신없이 먹다 보니 배가 너무 불러서 힘들었다. <br>
                    내일은 <span id="content3">과식하지 말아야겠다!!</span>
                </p>
                <p class="diary-date">
                    2023-11-29 <br>
                    날씨 흐림
                </p>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .container {
    background-color: #eeeeee;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 50px 0;

    .wrapper {
      background-color: white;
      padding: 40px 30px;
      width: 600px;
      // height를 지정하면 원치않은 방향으로 갈 수 있음
      border: 2px solid gray;
      border-radius: 10px;

      &__head {
        border-bottom: 1px dashed;
        padding-bottom: 20px;

        &__title {
          background-color: orange;
          color: white;
          text-align: center;
          padding: 5px;
          margin-bottom: 10px;
        }

        .wrapper__head__sub-title {
          padding: 10px 0;

          #point {
            margin-top: 10px;
            display: block;
            color: orange;
            font-weight: 600;
            text-decoration: underline;
          }
        }
      }

      .wrapper__body {
        margin-top: 15px;
        padding: 20px 30px;
        border: 2px solid #dddddd;

        .wrapper__body__content {
          .diary-title {
            font-size: 18px;
            font-weight: 600;
            background-color: #dddddd;
            margin-bottom: 20px;
          }

          #content1 {
            color: red;
          }

          #content2 {
            color: orange;
          }

          #content3 {
            font-style: italic;
            color: blue;
            font-weight: 600;
          }

          .diary-date {
            font-size: 15px;
            text-align: end;
          }
        }
      }
    }
  }

  .header {
    height: 80px;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: center;

    .header-inner {
      width: 900px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        width: 100px;
        h1 a {
          text-decoration: none;
          color: orange;
        }
      }
      .menu {
        .menu__ul {
          display: flex;
          li {
            list-style: none;
            a {
              display: block;
              padding: 10px 20px;
              text-decoration: none;
              color: black;
            }
          }
        }
      }
      .user {
        width: 100px;
      }
    }
  }
</style>