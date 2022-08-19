import express from 'express';
import cors from 'cors';
import { collection,getDocs,deleteDoc,doc,setDoc,updateDoc,getDoc} from "firebase/firestore";
import { db } from './config.js'; 
const app = express();

// Use of cors 
app.use(cors())
let port = 8080
app.use(express.json());


app.use(express.urlencoded({extended:true}));




app.get('/',(_req,res)=>{
    res.send("<h1>server is working</h1>");
})





app.get('/add-device', async(req,res)=>{
    await setDoc(doc(db,"device",req.query.id),{safetemp:req.query.temp});
      res.send("device is added...");
})





// API for getting safe temperature
app.get('/safetemp',async(req,res)=>{
    const docRef = doc(db, "device", req.query.id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  res.send(docSnap.data().safetemp);
} else {
  // doc.data() will be undefined in this case
  res.send("No such document foun");
}
})



// API for updating hardware data
app.get('/update-hardware',async(req,res)=>{
    const device = doc(db, "device",req.query.id);
    await updateDoc(device, {
        temp:req.query.temp,
        lat:req.query.lat,
        long:req.query.long,
        battery:req.query.battery
    });
    res.send("device is updated...")
})




app.post('/padd-device',async(req,res)=>{
    await setDoc(doc(db,"device",req.body.id),{safetemp:req.body.temp});
    res.send("Device added by pst...");
})




app.post('/psafetemp',async(req,res)=>{
    const docRef = doc(db, "device", req.body.id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  res.send(docSnap.data().safetemp);
} else {
  // doc.data() will be undefined in this case
  res.send("No such document found");
}
})



app.post('/pupdate-hardware',async(req,res)=>{
    const device = doc(db, "device",req.body.id);
    await updateDoc(device, {
        temp:req.body.temp,
        lat:req.body.lat,
        long:req.body.long,
        battery:req.body.battery
    });
    res.send("device is updated...")
})

app.listen(process.env.PORT || port);