const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VocabSchema = new Schema(
    {
    english: {
      type: String,
      required: 'English world cannot be blank'

    },
    german:{
        type: String,
        required:'German word cannot be blank'
    },
    vietnamese: {
    type: String,
    required: 'Vietnamese word cannot be blank'
  },
  russian: {
    type: String,
    required: 'Russian word cannot be blank'
  },
  chinese: {
    type: String,
    required: 'Chinese word cannot be blank'
  },
  japanese: {
    type: String,
    required: 'Japan word cannot be blank'
  }

},

{collection: 'vocab'}
);
module.exports = mongoose.model('Vocab', VocabSchema);