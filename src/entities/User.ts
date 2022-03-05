import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Movie } from "./Movie";

export enum RoleUser {
  ADMIN = "admin",
  USER = "user",
}

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: RoleUser,
    default: RoleUser.USER,
  })
  role: RoleUser;

  @OneToMany(() => Movie, (movie) => movie.id)
  movie: Movie[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
