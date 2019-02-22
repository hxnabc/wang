// 商品分类

import React from 'react'
import './index.less'
import Search from './Search'
import Table from './Table'

class ClassifyManagement extends React.Component{
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

export default ClassifyManagement;