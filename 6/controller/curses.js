const readCurses=require('fs/promises')
const {Router} =require('express')
const app=Router()
async function callCurses(){
    let curses = await json.parse(await readCurses.readFile('./Data/curses.json')) 
app.get('curses',(req ,res)=>{
    res.json(curses)
})
 app.get('*', (req, res) => {
        const validRoutes = ['/curses'];// ם
        if (validRoutes.includes(req.path)) {
            res.send(` route exists: ${req.path}`);
        } else {
            res.status(404).send('Not Found The Path');
        }
    });
app.get('/curses/:courseID',(req ,res)=>{
    const id=Number(req.params.courseID)
    const findCurse=curses.find(findCurse=>findCurse.id ===id)
    if(findCurse <1){
        return res.status(404).send('no this curs')
       
} res.json(findCurse)
}

)}
callCurses()
module.exports={app}