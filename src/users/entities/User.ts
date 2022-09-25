import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Role } from 'src/roles/entities/Role';
import { Exclude } from 'class-transformer';

@Entity('users')
export class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  isAdmin: boolean;

  @Column()
  avatar?: string;

  @ManyToOne(() => Role, {
    cascade: true,
  })
  role: Role;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
