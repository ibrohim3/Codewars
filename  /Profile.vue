<template>
  <section class="profile">
    <div class="user-info">
      <div class="text">
        <h3>Дизайнер</h3>
        <h2><span>Ернар</span> Ибрагимов</h2>
        <p>
          Работаю дизайнером с 1999 года. <br />
          Был опыт в газетах, журналах, типографиях, рекламных агентствах,
          издательских домах... Порядка 8 лет, занимаюсь логотипами и фирменными
          стилями.
        </p>
        <div class="skills-box">
          <div class="skill" v-for="(skill, index) in skills" :key="index">
            {{ skill.name }}
          </div>
        </div>
        <InfoDropdown />
      </div>

      <div class="avatar-box">
        <div class="status">В сети</div>
        <div class="lines">
          <img :src="lines" alt="line image" />
        </div>
        <div class="setting-btn">
          <img :src="settingIcon" alt="setting icon" />
        </div>
        <!-- <div class="dots">
          <img :src="dots" alt="dots image" />
        </div> -->
        <div class="avatar">
          <div>
            <img :src="userImg" alt="user image" />
          </div>
          <div class="stars">
            <img :src="stars" alt="stars" />
          </div>
        </div>
      </div>
    </div>
    <div class="works">
      <h3>Мой ворки</h3>
      <Works />
    </div>
  </section>
</template>
<script>
import userImg from "../../assets/images/user-img.png";
import stars from "../../assets/images/stars.svg";
import settingIcon from "../../assets/images/setting-icon.svg";
import lines from "../../assets/images/lines.svg";
import dots from "../../assets/images/dots.svg";
import InfoDropdown from "./InfoDropdown/InfoDropdown.vue";
import Works from "../../components/Works/Works.vue";
export default {
  components: {
    InfoDropdown,
    Works,
  },
  data() {
    return {
      userImg,
      stars,
      settingIcon,
      lines,
      dots,
      skills: [
        { name: "Figma" },
        { name: "Adobe photoshop" },
        { name: "Adobe illustrator" },
        { name: "Corel draw" },
        { name: "Adobe After Effects" },
        { name: "HTML/CSS" },
      ],
    };
  },
};
</script>
<style scoped>
.profile {
  width: 100%;
  padding: 20px 150px;
  background: #f7f6ff;
}
.user-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user-info .text {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.text h3 {
  font-weight: 600;
  font-size: 24px;
  color: #fba457;
}
.text h2 {
  font-weight: 600;
  font-size: 36px;
}
.text span {
  color: green;
}
.text p {
  width: 500px;
  font-weight: 400;
  font-size: 15px;
  line-height: 120%;
  color: #000000;
}
.skills-box {
  max-width: 580px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
}
.skill {
  height: 37px;
  border-radius: 50px;
  padding: 10px 20px;
  border: 1px solid #f2f0fe;
  font-weight: 400;
  font-size: 15px;
  color: #222222;
}
.avatar-box {
  position: relative;
  top: 10%;
}
.avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stars {
  margin-top: -10%;
}
.control-btns {
  position: absolute;
  display: flex;
  justify-content: space-between;
}
.status {
  height: 44px;
  border-radius: 50px;
  padding: 12px 36px;
  position: absolute;
  top: 40%;
  left: -15%;
  background: #f6fafd;
  box-shadow: 0px 8px 16px 0px #0000000a;
  color: #1dbf73;
  font-weight: 500;
  font-size: 17px;
}
.setting-btn {
  position: absolute;
  right: 10%;
  width: 52px;
  height: 52px;
  border-radius: 10px;
  padding: 16px;
  background: #f6fafd;
  box-shadow: 0px 8px 16px 0px #0000000a;
  cursor: pointer;
}
.lines {
  position: absolute;
  left: 90%;
  top: 20%;
}
</style>
