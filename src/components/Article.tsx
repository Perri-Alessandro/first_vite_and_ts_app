import { Col, Card } from "react-bootstrap";
import ArticleInterface from "../interfaces/ArticleInterface";

const Article = ({ article }: { article: ArticleInterface }) => {
  return (
    <Col xs={12} md={4} className="text-center">
      <Card>
        <Card.Img variant="top" src={article.imageUrl} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Article;
