//商品列表


import React from 'react'
import Search from './Search'
import Table from './Table'
import './index.less'
class ProductList extends React.Component{
    render () {
        return (
            <div className="contentBox">
                <div>
                    <Search/>
                    <Table/>
                </div>
            </div>
        )
    }
}
export default ProductList;