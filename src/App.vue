<script  lang="tsx">
import {defineComponent} from 'vue'
import HelloWorld from './components/HelloWorld.vue';
import { applyPureReactInVue } from 'veaury'
import App from './react_app/index.jsx'

const HvApp = applyPureReactInVue(App)
export default defineComponent({
	setup(){
		return ()=>(<>
			<div>
				<HvApp></HvApp>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" class="logo" alt="Vite logo" />
				</a>
				<a href="https://vuejs.org/" target="_blank">
					<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
				</a>
			</div>
			<HelloWorld msg="Vite + Vue" />
		</>)
	}
})
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
