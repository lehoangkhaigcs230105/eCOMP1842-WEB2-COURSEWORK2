<template>
  <div>
    <h1>Vocabulary Test</h1>

    <div v-if="currentWord">
      <p><strong>Translate this word to:</strong></p>

      <div class="ui form">
        <div class="field">
          <label>Choose target language</label>
          <select v-model="selectedLanguage" class="ui dropdown">
            <option value="german">German</option>
            <option value="vietnamese">Vietnamese</option>
            <option value="russian">Russian</option>
            <option value="chinese">Chinese</option>
            <option value="japanese">Japanese</option>
          </select>
        </div>
      </div>

      <p class="word-to-translate">English: {{ currentWord.english }}</p>

      <input
        v-model="userAnswer"
        type="text"
        :placeholder="`Enter ${selectedLanguage} translation`"
        @keyup.enter="checkAnswer"
      />

      <button class="ui primary button" @click="checkAnswer">Check</button>

      <div v-if="result !== null" :class="['ui message', result ? 'positive' : 'negative']">
        {{ resultMessage }}
        <p><strong>Correct:</strong> {{ currentWord[selectedLanguage] }}</p>

        <table class="ui celled table">
          <thead>
            <tr>
              <th>Language</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>English</td>
              <td>{{ currentWord.english }}</td>
            </tr>
            <tr>
              <td>German</td>
              <td>{{ currentWord.german }}</td>
            </tr>
            <tr>
              <td>Vietnamese</td>
              <td>{{ currentWord.vietnamese }}</td>
            </tr>
            <tr>
              <td>Russian</td>
              <td>{{ currentWord.russian }}</td>
            </tr>
            <tr>
              <td>Chinese</td>
              <td>{{ currentWord.chinese }}</td>
            </tr>
            <tr>
              <td>Japanese</td>
              <td>{{ currentWord.japanese }}</td>
            </tr>
          </tbody>
        </table>

        <button class="ui button" @click="nextWord">Next</button>
      </div>
    </div>

    <div v-else class="ui warning message">
      <p>No words available.</p>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
  name: 'test',
  data() {
    return {
      words: [],
      currentWord: null,
      userAnswer: '',
      result: null,
      selectedLanguage: 'german'
    };
  },
  computed: {
    resultMessage() {
      if (this.result === true) return '✅ Correct!';
      if (this.result === false) return '❌ Incorrect. Try again!';
      return '';
    }
  },
  methods: {
    async fetchWords() {
      this.words = await api.getWords();
      this.nextWord();
    },
    nextWord() {
      this.userAnswer = '';
      this.result = null;
      const index = Math.floor(Math.random() * this.words.length);
      this.currentWord = this.words[index];
    },
    checkAnswer() {
      if (!this.currentWord || !this.selectedLanguage) return;
      const correct = (this.currentWord[this.selectedLanguage] || '').trim().toLowerCase();
      const answer = this.userAnswer.trim().toLowerCase();
      this.result = correct === answer;
    }
  },
  async mounted() {
    await this.fetchWords();
  }
};
</script>

<style scoped>
.word-to-translate {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
}
input {
  margin-top: 0.5em;
  margin-bottom: 1em;
  padding: 0.5em;
  font-size: 1em;
  width: 100%;
  max-width: 400px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
select.ui.dropdown {
  margin-top: 0.5em;
  margin-bottom: 1em;
  padding: 0.5em;
  font-size: 1em;
  border-radius: 5px;
}
.ui.celled.table {
  margin-top: 1em;
  font-size: 1em;
}
</style>
