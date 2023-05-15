import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
const CreateProduct = () => {
    let history = useHistory()
    let [flag, setFlag] = useState(false)
    let [product, setProudct] = useState({
        name: "",
        price: "",
        image: "",
        qty: "",
        info: ""
    })

    let updateHandler = (event) => {
        setProudct({ ...product, [event.target.name]: event.target.value })
    }
    let changeImage = async (event) => {
        let imageFile = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.addEventListener('load', () => {
            if (reader.result) {
                setProudct({
                    ...product,
                    image: reader.result
                });
            }
            else {
                alert('Error Occurred');
            }
        });
    };

    let submitHandler = (event) => {
        event.preventDefault()
        Axios.post('http://127.0.0.1:5000/api/products', product)
            .then((response) => {
                setFlag(true)
            }).catch(() => { })
    }
    return (
        <div className='container mt-4'>
            <pre>{JSON.stringify(product)}</pre>
            {
                flag ? <>
                    {history.push('/admin')}
                </> : <>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    <h3> Crearte Product</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={submitHandler}>
                                        <div className='form-group'>
                                            <input onChange={updateHandler} className='form-control' name="name" type="text" placeholder='Product Name' />
                                        </div>
                                        <div className='form-group'>
                                            <input onChange={updateHandler} className='form-control' name="price" type="number" placeholder='Price' />
                                        </div>
                                        <div className='form-group'>
                                            <input onChange={updateHandler} className='form-control' name="qty" type="number" placeholder='QTY' />
                                        </div>
                                        <div className='form-group'>
                                            <input onChange={changeImage} className='form-control' name="image" type="file" placeholder='Image' />
                                        </div>
                                        <div className='form-group'>
                                            <input onChange={updateHandler} className='form-control' name="info" type="text" placeholder='Product Info' />
                                        </div>
                                        <input type="submit" value="Create Proudct" className='btn btn-success' />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div></>
            }

        </div>
    )
}

export default CreateProduct