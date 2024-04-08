import { Sort } from '../Sort/Sort';
import { Navigation } from '../Navigation/Navigation';
import { Search } from '../Search/Search';
import { Col, Flex, Row } from 'antd';

export const Menu = ({}) => {
  return (
    <Row gutter={[16, 16]} justify="space-between" style={{ padding: '0px 0px 30px 0px' }}>
      <Col>
        <Navigation />
      </Col>

      <Col>
        <Search />
      </Col>

      <Col>
        <Sort />
      </Col>
    </Row>
  );
};
