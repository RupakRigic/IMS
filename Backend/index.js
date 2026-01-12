import e from "express";
import cors from "cors";

const app = e();
app.use(cors());
const port = 3000;

app.get("/api/users", (req, res) => {

 const users = {
    'name': 'John',
    'age': 30,
    'city': 'New York'
    };
  
    res.send(users);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;

