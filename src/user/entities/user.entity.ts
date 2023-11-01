import {Entity, PrimaryColumn, Column, ObjectIdColumn} from 'typeorm';

@Entity({synchronize:true})
export class JhomeAgent {
          @ObjectIdColumn()
          _id:string;

          @PrimaryColumn({type:'string', nullable:false})          
          id:string;

          @PrimaryColumn({type:'string', nullable:false})
          username:string;

          @Column({type:'string', nullable:false})
          password:string;
          
          @PrimaryColumn({type:'string', nullable:false})
          email:string;

          @Column({type:'string', nullable:false})
          phoneNumber:string;
}
