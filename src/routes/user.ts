import express, { Request, Response } from "express";
import { User } from "src/entities/User";
import { getRepository } from "typeorm";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  const repo = getRepository(User);

  const emailRes = await repo.find({ where: { email } });

  if (emailRes.length !== 0) {
    res.status(400).json({ message: "user already exist" });
  }

  await repo.save({ name, email, password, role });

  res.status(201).json({ message: "user registered successfully" });
});

export default router;
