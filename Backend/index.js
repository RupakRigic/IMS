import e from "express";
const app = e();
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

