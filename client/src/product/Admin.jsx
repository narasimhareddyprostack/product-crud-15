import React from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
const Admin = () => {
    let [products, setProducts] = React.useState([])
    React.useEffect(() => {
        getProducts();
    }, [])

    let getProducts = () => {
        console.log("Test Case 123")
        Axios.get('http://127.0.0.1:5000/api/products')
            .then((resp) => {
                setProducts(resp.data)
            })
            .catch(() => { })
    }
    let deleteProdcut = (id) => {
        console.log(id)
        let url = `http://127.0.0.1:5000/api/products/${id}`
        console.log(url)
        Axios.delete(url)
            .then((resp) => {
                console.log("Test Case 1234")
                getProducts()
            }).catch(() => { })
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8">
                    <h3>Warning !</h3>
                    <Link to="/createProduct"> <button className='btn btn-warning' >Create Product</button></Link>
                </div>

            </div>
            <hr />
            <div className="row">
                <h2>List of Products</h2>
                <div className="col-md-10">
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Info</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.length > 0 ? <>
                                    {
                                        products.map((product, index) => {
                                            return <tr key={index}>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>{product.qty}</td>
                                                <td>{product.info}</td>
                                                <td><Link className="btn btn-warning mr-2">Update</Link> <Link onClick={deleteProdcut.bind(this, product._id)} className="btn btn-danger">Delete</Link></td>
                                            </tr>
                                        })
                                    }
                                </> : <h1>No Product</h1>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Admin