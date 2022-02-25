import React from "react";
import Modal, { setAppElement } from 'react-modal';
import './index.css'
import img from './addIcon.svg'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth:'40%',

  },
};

class Category extends React.Component{
    constructor(props){
        super(props)
        this.state ={
        selectedCategory:0,
        isopen:false,
        categories:[
            { 
              category:'TechCrunch',
              url:'https://newsapi.org/v2/top-headlines?sources=techcrunch'
            },
            { 
              category:'Bussiness',
              url:'https://newsapi.org/v2/top-headlines?country=us&category=business'
            },
            { 
              category:'Tesla',
              url:'https://newsapi.org/v2/everything?q=tesla&from=2022-01-25&sortBy=publishedAt'
            },
          ],
          category:'',
          url:''

        }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal() {
        this.setState({isopen:true})
    }
     
    closeModal() {
        this.setState({isopen:false})
    }
    handleCategory=(topic ,i)=>{
        this.props.getTopic(topic);
        this.setState({selectedCategory:i})
    }
    handleCategoryName = event => {
        event.preventDefault();
        this.setState({ category: event.target.value });
    };
    handleCategoryUrl = event => {
        this.setState({ url: event.target.value });
    };
    
    addcategory = () =>{
        var new_cat= {'category':this.state.category,'url':this.state.url}
        var newcategorylist = [...this.state.categories,new_cat]
        this.setState({ categories:newcategorylist,isopen:false, category:''})
    }
    
    categoryModal(){
        const {category,url} = this.state;
    
          return(
            <Modal
            isOpen={this.state.isopen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="catHeading">Add Category</div>
            <form style={{display:'flex',flexDirection:'column'}}>
                <div style={{borderBottom:'0.5px solid black',margin:'20px'}}> 
                     <input placeholder="Category name" value={category} onChange={this.handleCategoryName} className='catinputs'/>
                </div>
            
                <div style={{borderBottom:'0.5px solid black',margin:'20px'}}> 
                    <input placeholder="API URL" onChange={this.handleCategoryUrl} className='catinputs' />
                </div>
    
            </form>
            <button onClick={this.addcategory} className='addbutton'> +Add </button>
        </Modal>
          )
      }

      renderCategories(){
        const {categories,selectedCategory} = this.state;
        return(
            <div>
                <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                    {categories.map((topic,i)=>{
                        return(
                            <div key={i} onClick={()=>{this.handleCategory(topic.url,i)}}>
                                <div className={selectedCategory === i ?'selectedcat':'category'}>  {topic.category}</div>
                            </div>
                        )
                    })}
                    {this.state.categories.length < 5 &&
                        <div onClick={this.openModal} className='category' style={{padding: '5px 15px 5px 15px'}}>
                            <img src={img} width ='10px' height= '10px'></img>
                        </div>
                    }
                </div>  
            </div>
        )
      }
    

    render(){
        return(
            <div>
                {this.categoryModal()}
                {this.renderCategories()}
            </div>
        )
    }
}
export default Category;