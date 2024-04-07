import { Link } from 'react-router-dom';
import pizzaLogo from '../../assets/img/pizza-logo.svg';
import cartImg from '../../assets/img/cart.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Typography, Button, Divider, Image, Flex } from 'antd';

export const Header = () => {
  const pizzasCount = useSelector<RootState>((state) => state.cart.count);
  const pizzasPrice = useSelector<RootState>((state) => state.cart.price);
  const { Title } = Typography;

  return (
    <header>
      <Flex justify="space-between" align="center" style={{ padding: '30px 0px 0px 0px' }}>
        <Flex align="center" gap={30}>
          <Link to="/">
            <Image preview={false} style={{ width: 50 }} src={pizzaLogo} alt="pizzalogo" />
          </Link>
          <Flex vertical justify="space-evenly">
            <Title style={{ margin: 0 }} level={1}>
              Пицца
            </Title>
            <Title style={{ margin: 0 }} level={4}>
              самая вкусная пицца во вселенной
            </Title>
          </Flex>
        </Flex>
        <div>
          <Link to="/cart">
            <Button style={{ width: 110, padding: '0px 10px' }}>
              <Flex align="center" justify="space-between">
                <span>{Number(pizzasPrice)} RUB</span>
                <Flex gap={3}>
                  <img
                    style={{
                      filter:
                        'invert(80%) sepia(0%) saturate(7500%) hue-rotate(285deg) brightness(94%) contrast(97%)',
                    }}
                    src={cartImg}
                    alt="carticon"
                  />
                  <span>{Number(pizzasCount)}</span>
                </Flex>
              </Flex>
            </Button>
          </Link>
        </div>
      </Flex>

      <Divider></Divider>
    </header>
  );
};
