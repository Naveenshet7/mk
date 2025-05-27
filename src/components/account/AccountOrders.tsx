import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ChevronRight, Download } from 'lucide-react';

// Mock order data
const orders = [
  {
    id: 'ORD123456',
    date: '2023-05-15',
    status: 'Delivered',
    total: 845,
    items: [
      {
        id: 'powdered-001',
        name: 'Turmeric Powder',
        price: 95,
        quantity: 2,
        image: 'https://images.pexels.com/photos/6941023/pexels-photo-6941023.jpeg'
      },
      {
        id: 'whole-001',
        name: 'Green Cardamom',
        price: 245,
        quantity: 1,
        image: 'https://images.pexels.com/photos/6942003/pexels-photo-6942003.jpeg'
      },
      {
        id: 'powdered-009',
        name: 'Garam Masala',
        price: 130,
        quantity: 1,
        image: 'https://images.pexels.com/photos/6941035/pexels-photo-6941035.jpeg'
      },
      {
        id: 'seasonings-002',
        name: 'Red Chilli Flakes',
        price: 95,
        quantity: 3,
        image: 'https://images.pexels.com/photos/6941042/pexels-photo-6941042.jpeg'
      }
    ]
  },
  {
    id: 'ORD123455',
    date: '2023-04-22',
    status: 'Delivered',
    total: 595,
    items: [
      {
        id: 'combo-003',
        name: 'Whole Masala Collection',
        price: 595,
        quantity: 1,
        image: 'https://images.pexels.com/photos/6941057/pexels-photo-6941057.jpeg'
      }
    ]
  },
  {
    id: 'ORD123454',
    date: '2023-03-10',
    status: 'Delivered',
    total: 560,
    items: [
      {
        id: 'dryfruits-002',
        name: 'Cashew Nuts',
        price: 425,
        quantity: 1,
        image: 'https://images.pexels.com/photos/5964/food-apple-nuts-cashew.jpg'
      },
      {
        id: 'dryfruits-001',
        name: 'Golden Raisins',
        price: 135,
        quantity: 1,
        image: 'https://images.pexels.com/photos/7439978/pexels-photo-7439978.jpeg'
      }
    ]
  }
];

const OrderCard: React.FC<{ order: typeof orders[0], isOpen: boolean, toggle: () => void }> = ({ 
  order, 
  isOpen, 
  toggle 
}) => {
  return (
    <div className="border rounded-lg overflow-hidden mb-6">
      {/* Order Header */}
      <div className="bg-gray-50 p-4 border-b">
        <div className="flex flex-wrap justify-between">
          <div className="mb-2 sm:mb-0">
            <div className="flex items-center">
              <Package size={16} className="mr-2 text-amber-600" />
              <span className="font-medium">Order #{order.id}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Placed on {new Date(order.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          <div className="flex flex-col sm:items-end">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              order.status === 'Delivered' 
                ? 'bg-green-100 text-green-800' 
                : order.status === 'Processing' 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {order.status}
            </span>
            <p className="text-sm font-medium mt-1">₹{order.total.toFixed(2)}</p>
          </div>
        </div>
      </div>
      
      {/* Order Summary */}
      <div className="p-4 flex items-center justify-between cursor-pointer" onClick={toggle}>
        <div className="flex items-center">
          <div className="flex -space-x-2">
            {order.items.slice(0, 3).map((item) => (
              <div key={item.id} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
            {order.items.length > 3 && (
              <div className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium">
                +{order.items.length - 3}
              </div>
            )}
          </div>
          <span className="ml-4 text-sm">
            {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
          </span>
        </div>
        
        <div className="flex items-center text-amber-600">
          <span className="mr-2">{isOpen ? 'Hide details' : 'View details'}</span>
          <ChevronRight 
            size={16} 
            className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`} 
          />
        </div>
      </div>
      
      {/* Order Details (Expanded) */}
      {isOpen && (
        <div className="border-t p-4">
          {/* Item List */}
          <div className="space-y-4 mb-6">
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center">
                <div className="h-16 w-16 rounded overflow-hidden mr-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <Link to={`/product/${item.id}`} className="font-medium hover:text-amber-700">
                    {item.name}
                  </Link>
                  <div className="text-sm text-gray-500">
                    ₹{item.price.toFixed(2)} x {item.quantity}
                  </div>
                </div>
                <div className="font-medium">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span>₹{order.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping</span>
              <span>₹0.00</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>₹{order.total.toFixed(2)}</span>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex justify-between mt-6">
            <button className="text-amber-600 hover:text-amber-700 flex items-center">
              <Download size={16} className="mr-1" /> 
              Invoice
            </button>
            <button className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors">
              Buy Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const AccountOrders: React.FC = () => {
  const [openOrderId, setOpenOrderId] = useState<string | null>(null);
  
  const toggleOrder = (orderId: string) => {
    setOpenOrderId(openOrderId === orderId ? null : orderId);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">Order History</h2>
      
      {orders.length > 0 ? (
        <div>
          {orders.map(order => (
            <OrderCard 
              key={order.id} 
              order={order} 
              isOpen={openOrderId === order.id}
              toggle={() => toggleOrder(order.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 border rounded-lg">
          <Package size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
          <Link 
            to="/products/seasonings" 
            className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default AccountOrders;