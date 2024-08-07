const mongoose = require('mongoose')
const { Schema } = mongoose;
const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);


// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const taskSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   completed: {
//     type: Boolean,
//     required: true,
//     default: false,
//   },
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   // priority: {
//   //   type: String,
//   //   enum: ['high', 'medium', 'low'],
//   //   default: 'medium',
//   // },
//   dayOfWeek: {
//     type: String,
//     enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//     required: true,
//   },
// }, { timestamps: true });

// module.exports = mongoose.model('Task', taskSchema);
