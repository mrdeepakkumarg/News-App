import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import image from '../assets/news.png'

function NewsItem({ title, description, src, url }) {
  return (
    <Card
      className="bg-dark text-light p-2"
    >
      <Card.Img variant="top" src={src?src:image} style={{ height: "200px" }} />
      <Card.Body>
        <Card.Title>{title.slice(0, 35)}</Card.Title>
        <Card.Text>
          {description
            ? description.slice(0, 60)
            : "Discover the latest trends and insights shaping the world with our exclusive updates."}
        </Card.Text>
        <Button href={url} variant="secondary">
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}


export default NewsItem;
