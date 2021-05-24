const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create({
        day: Date.now(),
    })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .sort({ day: 1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        { _id: req.params.id },
        {$push: { exercises: {
            type: req.body.type,
            name: req.body.name,
            duration: req.body.duration,
            reps: req.body.reps,
            sets: req.body.sets,
            weight: req.body.weight,
            distance: req.body.distance 
        }}},
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    )
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({
        day: {
            $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        }
    })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        console.log(err);
    });
});


module.exports = router; 