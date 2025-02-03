const express =require('express')
const workerController = require ('./controller/workers')
const cursesController = require ('./controller/curses')
const app= express()
const PORT =4000

app.use(workerController)
app.use(cursesController)
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send({
        message: 'Internal Server Error',
        error: err.message,
        path: req.path 
    });
    next();
});
app.listen(PORT,() => {
console.log(`the port http://localhost${PORT}`);
})