const express = require('express');
const fs = require('fs'); // או fs אם אתה לא משתמש ב-promises
const app = express();
const port = 3000;

// פונקציה אסינכרונית לקרוא את קובץ העובדים
async function getWorkers() {

const workers = await JSON.parse(await fs.promises.readFile('./data/workers.json',));
    app.get('/workers', (req, res) => {
        res.json(workers);
    });
   
        app.get('/data.json', async (req, res) => {
            try {
                const workers = await getWorkers();
                // פילטר את העובדים מעל גיל 20 ובסטטוס W
                const filteredWorkers = workers.filter(worker => worker.age > 20 && worker.status === 'W');
                res.json(filteredWorkers);
            } catch (error) {
                res.status(500).send(error.message);
            }
        });
        
    
// Route עבור /data
app.get('/workers', async (req, res) => {
    try {
        const workers = await getWorkers();
        res.json(workers);
    } catch (error) {
        res.status(404).send('   file not faund 404');
    }
});
}
getWorkers()
// הפעל את השרת
app.listen(port, () => {
    console.log(`השרת פועל בכתובת http://localhost:${port}`);
});
