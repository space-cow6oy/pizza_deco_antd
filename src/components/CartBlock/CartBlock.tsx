import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { CartItem } from '../CartItem/CartItem';
import { clearCart } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { Flex, Button } from 'antd';

export const CartBlock = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const pizzasCount = useSelector((state: RootState) => state.cart.count);
  const pizzasPrice = useSelector((state: RootState) => state.cart.price);
  const dispatch = useDispatch();
  const clearOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(clearCart());
  };

  return (
    <Flex vertical>
      <Flex align="center" justify="space-between" style={{ padding: '0px ' }}>
        <h2>Корзина</h2>
        <Button onClick={clearOnClick}>Очистить корзину</Button>
      </Flex>
      <Flex vertical>
        {items.map((item, index: number) => (
          <CartItem {...{ ...item, index }} />
        ))}
      </Flex>
      <Flex align="center" justify="space-between" style={{ padding: '0px 0px 10px 0px' }}>
        <div>
          Всего пицц: <span>{Number(pizzasCount)}шт</span>
        </div>
        <div>
          сумма заказа: <span>{Number(pizzasPrice)} Р</span>
        </div>
      </Flex>
      <Flex justify="space-between" style={{ padding: '0px 0px 10px 0px' }}>
        <Link to="/">
          <Button>Вернуться назад</Button>
        </Link>
        <Button>Оплатить</Button>
      </Flex>
    </Flex>
  );
};
