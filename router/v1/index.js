const router = require('express').Router()

router.get('/health',(req,res) => {
    res.json({
        message: 'success'
    })
})

// user auth router
router.use('/api/v1/auth')
// video outer
router.use('/api/v1/video')
// assignment router
router.use('/api/v1/assignment')
// quizzes router
router.use('/api/v1/quizzes')
// assignmentMark router
router.use('/api/v1/assignmentMark')
//quizMark router
router.use('/api/v1/quizMark')


module.exports =  router