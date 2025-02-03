const express =require('express')
const workerController = require ('./controller/workers')
const cursesController = require ('./controller/curses')
const app= express()
const PORT =4000

app.use(workerController)
app.use(cursesController)
app.listen(PORT,() => {
console.log(`the port http://localhost${PORT}`);
})