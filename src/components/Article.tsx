import { Col, Card } from "react-bootstrap";
import ArticleInterface from "../interfaces/ArticleInterface";

const Article = ({ article }: { article: ArticleInterface }) => {
  return (
    <Col xs={12} md={4} className="text-center">
      <Card>
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.summary}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Article;
