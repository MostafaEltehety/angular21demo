export interface product{
  id: number,
    name : string,
    price : number,
    category : string,
    image : string,
    stock : number,
     rating:{
        count:number,
        rate:number
      }
}
