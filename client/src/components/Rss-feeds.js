import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: "",
      latestFeeds: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://timesofindia.indiatimes.com/rssfeedstopstories.cms"
      )
      .then((res) => {
        const feeds = res.data;

        this.setState({ feeds });

        const data = {
          feeds: this.state.feeds
        };
        axios
          .post("http://localhost:3050/latest/RSS", data)
          .then((feeds) => console.log("FE", feeds))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  getFeeds = () => {
    axios
      .get("http://localhost:3050/RSS/feeds")
      .then((feeds) => {
        const latestFeeds = feeds.data;
        this.setState({ latestFeeds });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={{ span: true, offset: 6 }} style={{ paddingTop: "40px" }}>
              <h6>
                Rss Feeds &nbsp;&nbsp;
                <button onClick={this.getFeeds}>Get Feeds</button>
              </h6>
            </Col>
          </Row>
        </Container>
        {this.state.latestFeeds &&
          this.state.latestFeeds.map((feed) => {
            return (
              <Card style={{ width: "18rem" }} key={feed._id}>
                <Card.Body>
                  <Card.Title>{feed.title}</Card.Title>
                  <Card.Text>{feed.description}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    );
  }
}
export default Feeds;
