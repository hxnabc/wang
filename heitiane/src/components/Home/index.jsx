import React from 'react'
import HeadBar from '../HeadBar'
import SiderComponent from '../Sider'
//import AddCommodity from '../CommodityManagement/AddCommodity'
//import ProductList from '../CommodityManagement/ProductList'
import ClassifyManagement from '../CommodityManagement/ClassifyManagement'
import route1 from '../CommodityManagement/route1.js'

import {
    Layout, Menu, Breadcrumb, Icon,Tabs
} from 'antd';

const {
    Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

class Home extends React.Component {
constructor(props){
    super(props)
    this.state = {
        collapsed: false,
        panes:[]
    };
    this.newTabIndex = 0;
}
   

   

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab',  key: activeKey });
        this.setState({ panes, activeKey });
      }
    
      handleActive=(activeTitle)=>{

          let panes=this.state.panes
          let obj = {};
        panes.push({title:activeTitle.key,id:activeTitle.item.props.tabid})



          let newPanes = panes.reduce((cur,next) => {
              if(  !obj[next.id]){
                  obj[next.id] = true && cur.push(next);
              }
              return cur;
          },[])

        this.setState({panes:newPanes},()=>{
            this.setState({ activeKey:activeTitle.item.props.tabid });
        })


      }
    onChange = (activeKey) => {
        this.setState({ activeKey });
    }

    render() {
        const {panes}=this.state
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                    <SiderComponent handleActive={this.handleActive}/>
                </Sider>
                <Layout style={{background: '#F6FBFB'}}>
                    <Header style={{ background: '#fff', padding: 0,height:'54px','lineHeight:':'54px'}} >
                        <HeadBar/>
                    </Header>

                    <Content style={{ margin: '0'}}>
                        <Tabs
                            onChange={this.onChange}
                            activeKey={this.state.activeKey}
                            type="editable-card"
                            onEdit={this.onEdit}
                            style={{background:"#fff"}}
                            className='tab-style'
                        >
            {panes.map((pane,index) => {
            // .ant-tabs-nav-container
                let id=pane.id

                return<TabPane     onChange={this.onChange} tab={pane.title} key={id} closable={pane.closable}   >{route1[id]}</TabPane>})}
                </Tabs>


                        {/*<ClassifyManagement/>*/}

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>)}
    
}
export default Home;