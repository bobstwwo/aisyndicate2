<template>
  <div class="auth-main">
    <header class="header">
      <div class="logo">
        <logo />
      </div>
      <div class="exit">
        <div class="exit__icon">X</div>
        <div class="exit__text">Вход</div>
      </div>
    </header>
    <main class="main">
      <div class="main__top">
        <div class="auth">
          <form ref="login">
            <div class="email ma">
              <input
                placeholder="Никнейм или email"
                type="text"
                v-model="login_email"
              />
            </div>
            <div class="password ma">
              <input
                placeholder="Пароль"
                type="password"
                v-model="login_password"
              />
            </div>
            <div @click="$refs.login.submit()" class="login-button">
              <!-- <input type="submit" /> -->
              <span>Войти</span>
              <div class="forgot-password">Забыли пароль?</div>
            </div>
          </form>
        </div>
        <div class="social">
          <div class="social-title"><span>Войти с помощью:</span></div>
          <div class="social-networks">
            <div class="social-networks-el">
              <img src="@/assets/images/facebook.png" alt="" />
            </div>
            <div class="social-networks-el">
              <img src="@/assets/images/google-plus.png" alt="" />
            </div>
            <div class="social-networks-el">
              <img src="@/assets/images/twitter.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="main__bottom">
        <div class="registration">
          <div class="registration-title">
            <span>Впервые с AI Syndicate?</span>
          </div>
          <div class="registration-subtitle"><span>Регистрация</span></div>
          <form ref="reg">
            <div class="name ma">
              <input placeholder="Имя" type="text" v-model="reg_name" />
            </div>
            <div class="surname ma">
              <input placeholder="Фамилия" type="text" />
            </div>
            <div class="nickname ma">
              <input placeholder="Никнейм" type="text" />
            </div>
            <div class="birthday ma">
              <input
                placeholder="Дата рождения в формате дд/мм/гггг"
                type="text"
              />
            </div>
            <div class="country ma">
              <input placeholder="Страна" type="text" />
            </div>
            <div class="email ma">
              <input placeholder="Email" type="text" v-model="reg_email" />
            </div>
            <div class="password ma">
              <input
                placeholder="Пароль"
                type="password"
                v-model="reg_password"
              />
            </div>
            <div @click="$refs.reg.submit()" class="registration-button">
              <span>Завершить регистрацию</span>
              <!-- <input type="submit" /> -->
            </div>
          </form>
        </div>
        <div class="possibilities">
          <div class="possibilities-text">
            <span>
              После успешной регистрации вы получите намного больше возможностей
              с AI Syndicate
            </span>
          </div>
          <div class="possibilities-image">
            <img src="@/assets/images/group.png" alt="" />
          </div>
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
      login_email: '',
      login_password: '',
      reg_name: '',
      reg_email: '',
      reg_password: '',
    };
  },
  methods: {
    async registerSubmit() {
      try {
        var data = {
          email: this.reg_email,
          password: this.reg_password,
          name: this.reg_name,
        };
        await this.$store.dispatch('register', data);
        this.$router.push('/dashboard');
      } catch (error) {
        alert(error);
      }
    },
    async loginSubmit() {
      try {
        var data = {
          email: this.login_email,
          password: this.login_password,
        };

        await this.$store.dispatch('login', data);
        this.$router.push('/dashboard');
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: 'Red Rose';
}
.auth-main {
  height: 100vh;
}
.main {
  padding: 54px 36px;
  &__top {
    display: flex;
    justify-content: flex-end;
  }
  &__bottom {
    display: flex;
    justify-content: flex-end;
    margin-top: 28px;
  }
}
.possibilities {
  width: 310px;
  height: 300px;
  background: #e0e0e0;
  padding: 18px 17px;
}
.possibilities-text {
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  color: #383838;
}
.possibilities-image {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.registration-button {
  width: 381px;
  height: 51px;
  background: #383838;
  display: flex;
  align-items: center;
  justify-content: center;
  & span {
    font-size: 26px;
    line-height: 32px;
    color: #ffffff;
  }
}
.registration {
  width: 553px;
  height: 527px;
  background: #e0e0e0;
  margin-right: 18px;
  padding: 25px 29px;
  & input {
    margin: 0 auto;
    width: 496px;
    height: 40px;
    padding: 10px 13px;
    margin-bottom: 11px;
    &::placeholder {
      font-size: 16px;
      line-height: 20px;
      color: #929292;
    }
  }
}
.registration-title {
  font-size: 24px;
  line-height: 30px;
  color: #383838;

  display: flex;
  align-items: center;
  justify-content: center;
}
.registration-subtitle {
  font-size: 18px;
  line-height: 22px;
  color: #383838;

  display: flex;
  align-items: center;
  justify-content: center;
}
.name {
  margin-top: 30px;
}

.social {
  padding: 21px 23px;
}
.social-title {
  display: flex;
  justify-content: center;
  font-size: 24px;
  line-height: 30px;
  color: #383838;
}
.social-networks {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}
.login-button {
  width: 141px;
  height: 51px;
  background: #383838;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  & span {
    font-size: 26px;
    line-height: 32px;
    color: #ffffff;
  }
}
.forgot-password {
  position: absolute;
  top: 14px;
  right: -160px;

  font-size: 21px;
  line-height: 26px;
  color: #383838;
}
.auth {
  background: #e0e0e0;
  width: 553px;
  height: 229px;
  margin-right: 18px;
  padding: 37px 28px;
  & input {
    margin: 0 auto;
    width: 496px;
    height: 40px;
    padding: 10px 13px;
    margin-bottom: 11px;
    &::placeholder {
      font-size: 16px;
      line-height: 20px;
      color: #929292;
    }
  }
}
.social {
  background: #e0e0e0;
  width: 310px;
  height: 228px;
}
.header {
  display: flex;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid black;
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
.footer {
  padding: 41px 32px;
  background: #e0e0e0;

  display: flex;
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
