import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  const getDetail = () =>
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((res) => {
        if (res.ok) {
          console.log("INC ONTATTO CON IL SERVER", res);
          return res.json();
        } else {
          throw new Error("RISPOSTA NON OK RICEVUTA DAL SERVER IN FETCH ID");
        }
      })
      .then((data) => {
        console.log("DATI RICEVUTI DAL SERVER IN FETCH ID", data);
        setArticle(data);
      })
      .catch((err) => {
        console.log(
          "NESSUNA RISPOSTA RICEVUTA IN FETCH ID, ERRORE NEL PROVARE A CONTATTARE IL SERVER",
          err
        );
      });

  useEffect(() => {
    getDetail();
  }, [id]);

  if (!article) {
    return <div>Caricamento in corso...</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
          <a href={article.url} target="_blank" rel="noreferrer"></a>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
