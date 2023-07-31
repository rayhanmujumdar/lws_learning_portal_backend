const {Schema,model} = require('mongoose')

const assignmentSchema = new Schema({
    title: {
        type: String,
        required: [true,"Title must be required"]
    },
    videoId: {
        type: Schema.Types.ObjectId,
        ref: "Video",
        required: [true,"VideoId must be required"]
    },
    totalMark:{
        type: Number,
        enum: {
            values: [100,200,300],
            message: `{VALUE} is not supported`
        },
        required: [true,"Assignment Number must be required"]
    }
})

const Assignment = model("Assignment",assignmentSchema)

module.exports = Assignment