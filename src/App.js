import React from "react";
import logo from './logo.svg';
import './App.css';
import { getArticles,searchArticles } from "./api";
import ArticleList from "./Components/ArticleList";
import SearchBar from "./Components/searchBar";
import Category from "./Components/categories";
import { Container } from "reactstrap";
class App extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    articles: [],
    apiError: "",
    errorMessage:'',
    url:'https://newsapi.org/v2/top-headlines?sources=techcrunch',
    value:''
  };
}
  componentDidMount(){
    this.getTopic(this.state.url)
  }

  getTopic = async topic => {
    try {
      this.setState({ loading: true });
      const response = await getArticles(topic);
      this.setState({
        articles: response.articles,
      });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
    this.setState({ loading: false });
  };

  search = async (val) => {
    try {
      this.setState({ loading: true });
      const response = await searchArticles(val);
      this.setState({
        articles: response.articles,
      });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" , errorMessage:error.message});
    }
    this.setState({ loading: false });
    
  };

 


  render (){
    const {
      articles,
      apiError,
      errorMessage
    } = this.state;
    return(
    <div className="App" style={{minHeight:'900px'}}>
      <Container style={{maxWidth: 900}}>
          <div className="mainheader" >News Today</div>
          <Category getTopic={this.getTopic}  />
          <SearchBar search={this.search}/>
          {articles && articles.length > 0 ?
            <ArticleList articles={articles} />
            :
            <div>Articles not found </div>
          }  
      </Container>
    </div>
    
  );
}
}

export default App;
