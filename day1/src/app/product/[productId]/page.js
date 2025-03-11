import {Metadata} from 'next';
import { resolve } from 'styled-jsx/css';

export const generateMetadata = async({params}) => {
  const id = (await params).productId;
  const title = await new Promise((resolve)=>{
  setTimeout(()=>{
    resolve(`samsung${id}`)
  },1000)})
  return {
    title : `Product ${id}`
  }
}

export default async function ProductDetails({ params }) {
  const productId = (await params).productId;
  return <h1>Product details about {productId}</h1>;
}
