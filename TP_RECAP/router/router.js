const express  =require('express')
const router = express.Router()
const db=require('../dao/connection')



/*router.get('/',(req,res)=>{
    res.render("employe", { emps: [] })
})*/

router.get('/', (req, res)=>{
db.query("SELECT * FROM employe", (err,result)=>{
    if(err) throw err
    else res.render("employe",{emps:result})
  })
})

router.post("/insert", (req,res)=>{

  const { mat, name, sal } = req.body;
  
  // Construct a proper SQL query
  const query = `INSERT INTO employe (mat, name, sal) VALUES (?, ?, ?)`;

  db.query(query, [mat, name, sal], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Database error");
      return;
    }
    res.redirect("/");
  })
  
})


router.get('/delete/:mat', (req,res)=>{

  const {mat} = req.body;
const query2 = "DELETE FROM employe WHERE mat = ?"

  db.query(query2, [req.params.mat], (err, result)=>{
    if(err) throw err
    else res.redirect("/")
  })
})

module.exports = router