<template>
  <div class="home">
    <header class="header">
      <div class="logo">
        <logo />
      </div>
      <div class="exit">
        <div class="exit__icon">X</div>
        <div class="exit__text">
          <router-link to="/auth">Вход</router-link>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="menu">
        <ul>
          <li>О проекте</li>
          <li>О нас</li>
          <li>Наши стартап проекты</li>
          <li>Личный кабинет инвестора</li>
          <li>Контакты</li>
          <li>Языки</li>
        </ul>
      </div>
      <div class="information">
        <div class="information__left wd">
          <div class="information-title">Избранный проект</div>
          <div class="information__left-image">
            <img src="@/assets/images/image-1.png" alt="Избранный проект" />
          </div>
          <div class="information__left-content">
            <h3>Автомобильный сервис</h3>
            <div>Размер инвестиций: 39 911 000 р</div>
            <div>Дата публикации: 12.04.2021</div>
          </div>
        </div>
        <div class="information__border"></div>
        <div class="information__right wd">
          <div class="information-title">Рекомендованые для вас</div>
          <div class="information__right-content">
            <div
              v-for="(item, index) in recomented"
              :key="index"
              class="information__right-content-el"
            >
              <div class="content-el__left">
                <img :src="item.img" alt="" />
              </div>
              <div class="content-el__right">
                <div class="content-el__right-title">
                  <h5>{{ item.title }}</h5>
                </div>
                <div class="content-el__right-amount">
                  Размер инвестиций: {{ item.amount }} р
                </div>
                <div class="content-el__right-voices">
                  Голосов: {{ item.voices }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about">
        <div class="about-title"><h4>О Сайте</h4></div>
        <div class="about-content">
          <span>
            Любой пользователь, зарегистрировавшись на проекте, может разместить
            на проекте идею своего AI стартап проекта. Все зарегистрированные
            пользователи проекта AI Syndicate голосуют. Проекты, набравшие
            большее число голосов, проходят экспертизу нашими специалистами.
            Проекты, одобренные нашими специалистами, выставляются на
            краудинвестинг по системе Инвестиционных Лотов. (ИЛ)
          </span>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="footer__logo mr"><logo /></div>
      <div class="footer__about mr">
        <div class="footer-title">ABOUT</div>
        <div>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
      <div class="footer__support mr">
        <div class="footer-title">SUPPORT</div>
        <div>
          <ul>
            <li>Help Center</li>
            <li>Our Rules</li>
            <li>Creator Resources</li>
          </ul>
        </div>
      </div>
      <div class="footer__more mr">
        <div class="footer-title">MORE FROM AI SYNDICATE</div>
        <div>
          <ul>
            <li>Meet The Team</li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from '@/components/Images/Logo.vue';
export default {
  name: 'Home',
  components: {
    Logo,
  },
  data() {
    return {
      recomented: [
        {
          img: require(`@/assets/images/image-2.png`),
          title: 'Барбершоп',
          amount: 7080000,
          voices: 121,
        },
        {
          img: require(`@/assets/images/image-3.png`),
          title: 'Интернет-магазин',
          amount: 700000,
          voices: 58,
        },
        {
          img: require(`@/assets/images/image-4.png`),
          title: 'Электрогормебель',
          amount: 3000000,
          voices: 14,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: Red Rose;
}
.header {
  display: flex;
  justify-content: center;
  position: relative;
}
.home {
  max-width: 1280px;
  height: 100vh;
  margin: 0 auto;
}
.exit {
  position: absolute;
  right: 81px;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  &__icon {
    margin-right: 20px;
  }
}
.menu {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  & ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    & li {
      display: inline-block;
      padding: 12px 0;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.information {
  padding: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid black;
}
.information-title {
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 16px;
  color: #7e7e7e;
}
.information__border {
  width: 2px;
  height: 320px;
  background: #8b8b8b;
}
.information__left-content {
  & > h3 {
    margin: 15px 0 8px 0;
  }
  & > div {
    font-size: 15px;
    line-height: 19px;
    color: #4f4f4f;
  }
}
.information__right-content-el {
  display: flex;
}
.content-el__left {
  margin: 0 17px 0 0;
}
.content-el__right-title {
  font-size: 20px;
  line-height: 25px;
  color: #4f4f4f;
}
.content-el__right-amount .content-el__right-voices {
  font-size: 15px;
  line-height: 19px;
  color: #4f4f4f;
}
.content-el__left {
  & img {
    width: 90px;
    height: 90px;
  }
}
.wd {
  width: 478px;
}
.about {
  padding: 28px 50px;
}
.about-title {
  margin-bottom: 13px;
}
.footer {
  padding: 41px 32px;
  background: #e0e0e0;
  display: flex;
  // justify-content: space-between;
  align-items: flex-start;
  & ul {
    list-style-type: none;
    & li {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.footer-title {
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  color: #000000;
}
.mr {
  margin-right: 40px;
}
</style>
