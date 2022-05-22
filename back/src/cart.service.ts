import {
  Injectable,
  NotImplementedException,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

export type Cart = {
  id: string;
  items: Item[];
};

export type Item = {
  id: string;
  quantity: number;
  thumbnailUrl: string;
  name: string;
  price: number;
};

@Injectable()
export class CartService {
  // Use this array as your database
  private carts: Cart[] = [
    {
      id: '0',
      items: [],
    },
  ];

  create(): Cart {
    throw new NotImplementedException();
  }

  getCart(id: string): Cart {
    const carts = this.carts.find((cart) => (cart.id = id));
    if (carts) {
      return carts[0];
    } else {
      throw new NotFoundException();
    }
  }

  getAllCarts(): Cart[] {
    return this.carts;
  }

  putItem(id: string, item: Item): Cart {
    throw new NotImplementedException();
  }

  putItems(id: string, item: Item): Cart {
    this.carts[0].items.push(item);
    return this.carts[0];
  }

  removeItem(id: string): Cart {
    const index = this.carts[0].items.findIndex((item) => item.id === id);
    this.carts[0].items.splice(index, 1);
    return this.carts[0];
  }
}
