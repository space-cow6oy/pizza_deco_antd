import React from 'react';
import { addItem } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { CartItemType } from '../../redux/slices/cartSlice';
import { removeItem, clearCart } from '../../redux/slices/cartSlice';
import { Button, Flex, Image } from 'antd';

type CartItemProps = CartItemType & {
  index: number;
};

export const CartItem: React.FC<CartItemProps> = ({
  id,
  imageUrl,
  price,
  activeSize,
  title,
  activeType,
  count,
  index,
}) => {
  const dispatch = useDispatch();

  const addItemOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(addItem({ index, price }));
  };

  const removeItemOnClick = () => {
    dispatch(removeItem({ index, price }));
  };

  return (
    <Flex align="center" justify="space-between">
      <div style={{ padding: '25px 0px', borderRadius: '25px' }}>
        <Image src={imageUrl} alt={title} style={{ width: 200, borderRadius: '25px' }} />
      </div>

      <Flex vertical>
        <h3>{title}</h3>
        <span>
          {activeType}, {activeSize} см
        </span>
      </Flex>
      <Flex gap={10} align='center'>
      <Button size="small" onClick={removeItemOnClick}>
        -
      </Button>
      <span>{count}</span>
      <Button size="small" onClick={addItemOnClick}>
        +
      </Button>
      </Flex>
      <span>{price} Р</span>
      <Button size="small">удалить</Button>
    </Flex>
  );
};
