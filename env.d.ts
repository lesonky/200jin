declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
const  component: DefineComponent<{}, {}, any>;
  export default component;
}


