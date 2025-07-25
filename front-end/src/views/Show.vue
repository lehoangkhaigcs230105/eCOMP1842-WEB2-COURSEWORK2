<template>
  <div>
    <h1>Show Word</h1>

    <!-- German -->
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="germany flag"></i> German
      </div>
      <input type="text" readonly :value="word.german" />
    </div>

    <!-- English -->
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="united kingdom flag"></i> English
      </div>
      <input type="text" readonly :value="word.english" />
    </div>

    <!-- Vietnamese -->
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="vietnam flag"></i> Vietnamese
      </div>
      <input type="text" readonly :value="word.vietnamese" />
    </div>

    <!-- Russian -->
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="russia flag"></i> Russian
      </div>
      <input type="text" readonly :value="word.russian" />
    </div>

    <!-- Chinese -->
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="china flag"></i> Chinese
      </div>
      <input type="text" readonly :value="word.chinese" />
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="japan flag"></i> Japan
      </div>
      <input type="text" readonly :value="word.japanese" />
    </div>
    <div class="actions">
      <router-link :to="{ name: 'edit', params: { id: $route.params.id } }">
        Edit word
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
  name: 'show',
  data() {
    return {
      word: {}
    };
  },
  async mounted() {
    this.word = await api.getWord(this.$route.params.id);
  }
};
</script>

<style scoped>
.ui.labeled.input.fluid {
  margin-bottom: 16px;
  max-width: 600px;
  width: 100%;
}

.ui.label {
  min-width: 120px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}

input[readonly] {
  background-color: #f9f9f9;
  color: #333;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 1em;
  width: 100%;
  border-radius: 4px;
}

.actions {
  margin-top: 24px;
}

.actions a {
  display: inline-block;
  padding: 10px 16px;
  background-color: #2185d0;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.actions a:hover {
  background-color: #1678c2;
}
#app>div.narbar{
  background-color: aqua;
}
</style>
