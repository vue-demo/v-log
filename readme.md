### Console.log for Vue

```bash
import vLog from 'v-log'

Vue.use(vLog)

```
### Temaplate script
```bash
vue 1.0+
ready(){
  this.$log('hello');   // default
  this.$log('hello',1); // info
  this.$log('hello',2); // warn
}

vue 2.0+
mounted(){
  this.$log('hello');   // default
  this.$log('hello',1); // info
  this.$log('hello',2); // warn
}

```

### Console
- <font color="#000">hello</font>
- <font color="orange">hello</font>
- <font color="#f0f">hello</font>