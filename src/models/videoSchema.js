const { Schema, model } = require("mongoose");

const videoSchema = new Schema({
  id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: [true, "Title must be required"],
  },
  description: {
    type: String,
    required: [true, "Title must be required"],
  },
  url: {
    type: String,
    required: [true, "url must be required"],
  },
  views: {
    type: String,
    default: "10k",
  },
  duration: {
    type: String,
    default: "3.3",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// video url validation check
videoSchema.path("url").validate((v) => {
  const regex =
    /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
  return regex.test(v);
});

const Video = model('Video',videoSchema)

module.exports = Video
