import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Container, Row, Col } from 'reactstrap';


const ArticleItem = props => {
  const { article } = props;
  return (
        <Row className="articlecard">
        <Col md='7' xs='12' sm='8'>
            <div className="artTitle">{article.title}</div>
            <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                <div className="author"  >{article.author}</div>
                <div className="divider"></div>
                <div className="published" >{article.publishedAt.split("T")[0]}</div>
            </div>
            <div className="discription">
            {article.description}
          </div>
        </Col>

        <Col md='5' xs='12' sm='4' className="image">
          <img src={article.urlToImage} />
        </Col>
        </Row>
  );
};

const ArticleList = props => {
  return (
    <div style={{display:'flex',flexDirection:'column',margin:'10px',paddingBottom: '10px'  }}>
      {props.articles.map((article, index) => (
        <ArticleItem article={article} key={article.title + index} />
      ))}
    </div>
  );
};

export default ArticleList;
