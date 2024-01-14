import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiTypescript,
  SiRedis,
  SiFirebase,
  SiAmazonsqs,
  SiAwslambda,
  SiAmazonaws,
  SiAmazonapigateway,
  SiAmazondynamodb,
  SiPostman,
  SiGrafana,
  SiOpensearch,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5>Node</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>JS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <h5>TS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws/>
        <h5>AWS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwslambda/>
        <h5>Lambda</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonsqs title="SQS" textAnchor="SQS" />
        <h5>SQS</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazondynamodb title="SQS" textAnchor="SQS" />
        <h5>DynamoDB</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonapigateway title="SQS" textAnchor="SQS" />
        <h5>API Gateway</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h5>Mongodb</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h5>Git</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h5>Firebase</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <h5>Redis</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h5>Postman</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />
        <h5>Grafana</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpensearch />
        <h5>OpenSearch</h5>
      </Col>
    </Row>
  );
}

export default Techstack;
