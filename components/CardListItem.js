import { Card, Image } from "react-bootstrap";
import Link from "next/link";

const CardListItem = ({ title, subtitle, author, link, date }) => {
  return (
    <Card className={`fj-card fj-card-list`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <Image
            src={author?.avatar}
            className="rounded-circle mr-3"
            height="100px"
            width="100px"
            alt="avatar"
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">
              {author?.name}
            </Card.Title>
            <Card.Text className="card-date">{date}</Card.Text>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      {link && ( // 예외처리?
        <Link {...link}>
          <a className="card-button">Read More</a>
        </Link>
      )}
    </Card>
  );
};

export default CardListItem;
