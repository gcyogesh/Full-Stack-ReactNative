interface Product{
    _id: number,
    productName: string,
    productSubTitle: string,
    price: number,
    brandName: string,
    image: string,
    description:string
  
  }

interface categoryItem{
    _id: number,
    name:string
    path:never,
    icon:string
}




export {Product, categoryItem};
  