const {Router} = require("express")
const router = Router();

router.post("/signup", (req, res)=>{

})
router.get("/courses", (req, res)=>{

})
router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});