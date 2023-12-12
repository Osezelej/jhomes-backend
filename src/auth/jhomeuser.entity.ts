import { Column, Entity, ObjectId, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity({synchronize:true})
export class JHomeUser{
    @ObjectIdColumn()
    _id:ObjectId;

    @PrimaryColumn()
    id:string;
    
    @Column()
    email:string;

    @Column()
    name:string;
}