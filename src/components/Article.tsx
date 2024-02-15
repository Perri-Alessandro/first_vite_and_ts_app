import { Col, Card } from "react-bootstrap";
import ArticleInterface from "../interfaces/ArticleInterface";
import { Link } from "react-router-dom";

const Article = ({ article }: { article: ArticleInterface }) => {
  return (
    <Col xs={12} md={4} className="text-center">
      <Card className="row justify-content-center align-items-center">
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.summary}</Card.Text>
          <Card.Text>{article.updated_at}</Card.Text>
        </Card.Body>
      </Card>
      <Link to={`/article/${article.id}`}>VIENI A SCOPRIRE I DETTAGLI</Link>
    </Col>
  );
};

export default Article;
