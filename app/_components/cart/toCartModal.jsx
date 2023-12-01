'use client';

// images
import { VscClose } from 'react-icons/vsc';

// components
import Link from 'next/link';
import Image from 'next/image';

export default function ToCartModal({ product, collection, setAddedToCart }) {
  const mainImage = product.main_image;

  const clickOutStyles = {
    display: 'block',
  };

  const closeStyles = {
    margin: '1em',
    zIndex: '100',
  };

  return (
    <div>
      <div
        style={clickOutStyles}
        onClick={() => setAddedToCart(false)}></div>
      <div>
        <div>
          <div>
            <VscClose
              style={closeStyles}
              onClick={() => setAddedToCart(false)}
            />
          </div>
          <div>
            <div>
              <div>
                <h2>
                  <span></span>
                  Added to bag
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <Image
                    src={mainImage}
                    alt={product.title}
                    width={200}
                    height={200 * 1.25}
                  />
                </div>
              </div>
              <div>
                <p>
                  <span>{product.title} –</span> has been added to your cart.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Link href='/cart'>View Cart</Link>
            </div>
            <div>
              <div onClick={() => setAddedToCart(false)}>Continue Shopping</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
