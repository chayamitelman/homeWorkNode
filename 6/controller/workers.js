const readWorker=require('fs/promises')
const Router=require('express')
const app=Router

async function callWorker(){
    const workers =await json.parse(await readWorker.readFile('./Data/workers.json'))
    app.get('/workers',(req, res)=>{
        res.json(worker)
    })
    app.get('*', (req, res) => {
        const validRoutes = ['/workers'];// ם
        if (validRoutes.includes(req.path)) {
            res.send(` route exists: ${req.path}`);
        } else {
            res.status(404).send('Not Found The Path');
        }
    });
app.get('worker/query',(req,res) =>{
   const name=req.query.name.toLowerCase()
   const resultWorker= workers.filter(worker => worker.name.toLowerCase().include(name))

   if(resultWorker.length < 1){
    return res.status(404).send('worker not found')
   }
   res.json(resultWorker)
}) 
app.get('/workers/:workerID',(req ,res)=>{
    const id =Number(req.params.workerID)
    const findWorker=workers.find(findWorker => findWorker.id===id)
    res.json(findWorker)
})
}
callWorker()
module.exports ={app} ;


    
