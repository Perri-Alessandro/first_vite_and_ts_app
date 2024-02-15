import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

interface Article {
  title: string;
  image_url: string;
  summary: string;
  url: string;
  news_site: string;
  published_at: string;
}

const Detail = () => {
  const { id } = useParams();
  const [articlee, setArticlee] = useState<Article | null>(null);

  const getDetail = () =>
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((res) => {
        if (res.ok) {
          console.log("IN CONTATTO CON IL SERVER DA FETCH ID", res);
          return res.json();
        } else {
          throw new Error("RISPOSTA NON OK RICEVUTA DAL SERVER IN FETCH ID");
        }
      })
      .then((data: Article) => {
        console.log("DATI RICEVUTI DAL SERVER IN FETCH ID", data);
        setArticlee(data);
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

  if (!articlee) {
    return <div>Caricamento in corso...</div>;
  }

  return (
    <Container>
      <Row>
        <Link className="fixed-top mt-3" to="/">
          HOME
        </Link>
      </Row>
      <Row>
        <Col xs={12}>
          <p>PUBLISHED: {articlee.published_at}</p>
        </Col>
        <Col>
          <h2 className="text-info">{articlee.title}</h2>
          <a href={articlee.news_site} target="_blank">
            FROM {""}
            {articlee.news_site}
          </a>
          <Row>
            <img src={articlee.image_url} alt="foto viaggi" className="col" />
          </Row>

          <p className="mt-2">{articlee.summary}</p>
          <a href={articlee.url} target="_blank" className="text-black"></a>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
