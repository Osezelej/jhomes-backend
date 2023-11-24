import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { MongoClient } from "mongodb";

@Injectable()
export class MongodbService implements OnModuleInit, OnModuleDestroy{
    private client:MongoClient;

          
    async onModuleInit() {
          this.client = await new MongoClient('mongodb+srv://osezelejoseph:7bKIQUXHBfa6ACT1@cluster0.7uwgrbb.mongodb.net/?retryWrites=true&w=majority').connect()         
    }

    async onModuleDestroy() {
          await this.client.close();
                    
   }

   // to search a colection document in mongodb
  async searchDocument(query:string,skip:number,){
    const collection =  this.client.db('test').collection('home_data');
      const result = await collection.aggregate([
        {
          $search: {
          index: "jhomesHomedata",
          text: {
            query: query,
            path: {
              wildcard: "*"
            }
          }
        }   
      }, 
      {$skip:10 * (skip-1)},
      { $limit:10},
    ]).toArray()
          
          
    return result
  }
}