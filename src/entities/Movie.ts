import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity("movie")
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  duration: string;

  @Column()
  artist: string;

  @Column({
    type: "simple-array",
    default: [],
  })
  genres: string[];

  @Column()
  views: number;

  @Column()
  watch_url: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({
    name: "user_id",
  })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
