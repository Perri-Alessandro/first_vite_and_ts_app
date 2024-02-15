import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Article from "./Article";
import ArticleInterface from "../interfaces/ArticleInterface";

const AllArticles = () => {
  const [articles, setArticles] = useState<ArticleInterface[]>([]);

  const getData = () =>
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((res) => {
        if (res.ok) {
          console.log("RISPOSTA RICEVUTA DAL SERVER", res);
          return res.json();
        } else {
          throw new Error("RISPOSTA NON OK RICEVUTA DAL SERVER");
        }
      })
      .then((data) => {
        console.log("DATI RICEVUTI", data);
        setArticles(data.results);
      })
      .catch((err) => {
        console.log("ERRORE NEL PROVARE A CONTATTARE IL SERVER", err);
      });

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center text-info mb-3">
        <h2>VIAGGI SPAZIALI DISPONIBILI</h2>
      </Row>
      <Row className="justify-content-center g-3">
        {articles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </Row>
    </Container>
  );
};

export default AllArticles;
