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
      id: 'lol',
      items: [
        {
          id: 'lal',
          quantity: 1,
          thumbnailUrl: '',
          name: '',
          price: 0,
        },
      ],
    },
  ];

  create(): Cart {
    throw new NotImplementedException();
  }

  getCart(id: string): Cart {
    const carts = this.carts.find((cart) => (cart.id = id));
    if (carts) {
      return carts;
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

  putItems(id: string, items: Item[]): Cart {
    throw new NotImplementedException();
  }
}
