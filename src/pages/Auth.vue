<template>
    <div class="auth">
        <div class="auth__body">
            <h2 class="auth__body-title">LeadHit</h2>
            <form @submit.prevent="checkForm" class="form">
                <p>
                    <input id="id" :value="id" @input="changeId" placeholder="id сайта"/>
                </p>
                <div v-if="errors.length">
                    <b>Пожалуйста исправьте указанные ошибки:</b>
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                </div>
                <button type="submit">Войти</button>
            </form>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import visitsApi from '@/api/visitsApi';

@Component
export default class Auth extends Vue {
    errors: string[] = [];

    id = '';

    changeId(e: any) {
      this.errors = [];

      this.id = e.target.value;
    }

    async fetchVisits(id: string) {
      try {
        const response = await visitsApi.getVisits(id);
        if (response.message === 'ok') {
          localStorage.setItem('leadhit-site-id', id);
          this.$router.push({ name: 'Analytics' });
        }
      } catch (e) {
        alert(e);
      }
    }

    checkForm() {
      if (!(this.id.length === 24)) {
        this.errors.push('id сайта должен содержать 24 символа');
        return;
      }

      this.fetchVisits(this.id);
    }
}
</script>
<style lang="scss">
  .auth {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F3F4F7;

    &__body {
      width: 400px;
      height: 400px;
      border-radius: 48px;
      background-color: #FCFCFC;
      text-align: center;

      &-title{
        font-size: 36px;
        font-weight: bold;
      }
    }

    .form label{
      margin-right: 10px;
    }
  }
</style>
