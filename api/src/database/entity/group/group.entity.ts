import { UserEntity } from '../user';
import { RoomEntity } from '../room';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('guilds')
export class GroupEntity {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'user_id', type: 'int' })
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;

  @Column({ type: 'varchar', length: 50 })
  name!: string;

  @Column({ type: 'varchar', length: 250 })
  description!: string;

  @Column({ name: 'room_id', type: 'int' })
  roomID!: number;

  @ManyToOne(() => RoomEntity)
  @JoinColumn({ name: 'room_id' })
  room?: RoomEntity;

  @Column({ type: 'int', length: 3 })
  state!: number;

  @Column({ type: 'varchar', length: 256 })
  badge!: string;

  @Column({ name: 'date_created', type: 'int', length: 11 })
  dateCreated!: number;
}