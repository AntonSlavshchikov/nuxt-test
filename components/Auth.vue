<template>
   <modal
    name="auth-modal"
    transition="pop-out"
    height="100%"
    width="100%"
    :max-width="400"
    :max-height="250"
    :adaptive="true"
    :scrollable="true"
    :pivot-y="0.5"
    :reset="true"
    classes="v--modal-customer-cart"
 >
    <div class="auth__window">
        <div class="auth">
            <input type="text" class="auth__input" placeholder="Логин" v-model="login">
            <input type="password" class="auth__input" placeholder="Пароль" v-model="password">
            <MyButton @click.native="setAuth" :disabled='isDisabled'>Войти</MyButton>
        </div>
    </div>
  </modal>
</template>

<script>
    import {mapMutations} from "vuex";
    import MyButton from '@/components/UI/MyButton.vue';

    export default {
        components: {MyButton},
        name: 'Auth',
        data () {
            return {
                login: '',
                password: ''
            }
        },
        methods: {
            ...mapMutations({
                authState: 'authState'
            }),
            setAuth () {
                this.authState(true);
                this.login = '';
                this.password = '';
                this.$modal.hide('auth-modal')
            }
        },
        computed : {
            isDisabled() {
                if(this.login && this.password){
                    return false;
                }
                else{
                    return true;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .auth__window{
        width: 100%;
    }

    .auth{
        margin: 50px 20px;
    }

    .auth__input{
        width: 100%;
        border: none;
        background: rgba(235, 232, 232, 0.712);

        padding: 15px;
        border-radius: 10px;

        font-size: 20px;
        color: #00adb5;

        margin-bottom: 15px;
    }

    .auth__btn{
        display: block;
        background: #393e46;
        border: none;
        padding: 8px;

        color: #eee;
        text-transform: uppercase;
        border-radius: 5px;
        cursor: pointer;

        margin: 0 auto;

        transition: all 0.2s linear;

        &:hover {
            background: lighten($color: #393e46, $amount: 10);
        }
    }
</style>