import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const port = 3001;
const token = "secrettoken";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    res.send({
      success: true,
      data: token,
    });
  }
  res.send({
    success: false,
    error: "username or password is wrong!",
  });
});

app.get("/users/me", (req: Request, res: Response) => {
  const { authorization } = req.headers;

  if (token === authorization) {
    res.send({
      success: true,
      data: {
        id: 1,
        username: "admin",
        name: "admin",
        email: "admin@admin.com",
      },
    });
  }

  res.send({
    success: false,
    error: "token is not valid",
  });
});

app.listen(port, () => {
  console.log(`app is listening at http://localhost:${port}`);
});
