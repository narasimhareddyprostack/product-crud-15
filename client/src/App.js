import React from 'react'
import Admin from './product/Admin'
import CreateProduct from './product/CreateProduct'
import Product from './product/Product'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
          <Link className="navbar-brand" to="#">CRUD-APP</Link>
          <div className='ml-auto'>
            <ul className='navbar-nav'>
              <li className='nav-list'><Link to="/products" className="nav-link">Products</Link></li>
              <li className='nav-list'><Link to="/admin" className="nav-link">Admin</Link></li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/products" component={Product} />
          <Route path="/createProduct" component={CreateProduct} />
        </Switch>
      </Router>
    </div>
  )
}

export default App