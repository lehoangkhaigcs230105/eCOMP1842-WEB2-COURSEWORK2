<template>
  <div>
    <h1>Words</h1>
    <div class="ui icon input search-bar">
      <input
        type="text"
        placeholder="Search English..."
        v-model="searchQuery"
      />
      <i class="search icon"></i>
    </div>
    <table id="words" class="ui celled compact table">
      <thead>
        <tr>
          <th>English</th>
          <th>German</th>
          <th>Vietnamese</th>
          <th>Russian</th>
          <th>Chinese (Pinyin)</th>
          <th>Japanese</th>
          <th colspan="3"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(word, i) in filteredWords" :key="i">
          <td>{{ word.english }}</td>
          <td>{{ word.german }}</td>
          <td>{{ word.vietnamese }}</td>
          <td>{{ word.russian }}</td>
          <td>{{ word.chinese }}</td>
          <td>{{ word.japanese }}</td>
          <td width="75" class="center aligned">
            <router-link :to="{ name: 'show', params: { id: word._id } }">Show</router-link>
          </td>
          <td width="75" class="center aligned">
            <router-link :to="{ name: 'edit', params: { id: word._id } }">Edit</router-link>
          </td>
          <td width="75" class="center aligned" @click.prevent="onDestroy(word._id)">
            <a :href="`/words/${word._id}`">Destroy</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import router from '@/router';
import { api } from '../helpers/helpers';

export default {
  name: 'words',
  data() {
    return {
      words: [],
      searchQuery: ''
    };
  },
  computed: {
    filteredWords() {
      if (!this.searchQuery) return this.words;
      const keyword = this.searchQuery.toLowerCase();
      return this.words.filter(word =>
         Object.values(word)
        .join(' ')
        .toLowerCase()
        .includes(keyword)
        
      );
    }
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;
      await api.deleteWord(id);
      this.flash('Word deleted successfully!', 'success');
      this.words = this.words.filter(word => word._id !== id);
    }
  },
  async mounted() {
    this.words = await api.getWords();
  }
};
</script>

<style scoped>
.search-bar {
  margin-bottom: 1em;
  width: 100%;
  max-width: 300px;
}
</style>
