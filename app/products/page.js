import AddProduct from "./addProduct"
import DeleteProduct from "./deleteProduct"
import EditProduct from "./editProduct"

async function getProduct () {
  const res = await fetch('http://localhost:5000/products', {
    cache: 'no-store'
  })
  return res.json()
}

export default async function ProductList () {
  const products = await getProduct()
  return (
    <div className='p-10'>
        <div className="py-2">
            <AddProduct/>
        </div>
      <table className='table w-full'>
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Produk</th>
            <th className="text-center">Harga</th>
            <th className="text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((v, k) => {
            return (
              <tr key={k}>
                <td>{parseInt(k + 1)}</td>
                <td>{v.title}</td>
                <td>{v.price}</td>
                <td><div className="flex gap-1">
                    <EditProduct {...v}/>
                    <DeleteProduct {...v}/></div></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
