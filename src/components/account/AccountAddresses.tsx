import React, { useState } from 'react';
import { Home, Trash2, Plus, Edit } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface Address {
  id: string;
  title: string;
  fullName: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

const AddressForm: React.FC<{
  address?: Address;
  onSubmit: (address: Omit<Address, 'id'>) => void;
  onCancel: () => void;
}> = ({ address, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(address?.title || '');
  const [fullName, setFullName] = useState(address?.fullName || '');
  const [streetAddress, setStreetAddress] = useState(address?.streetAddress || '');
  const [city, setCity] = useState(address?.city || '');
  const [state, setState] = useState(address?.state || '');
  const [postalCode, setPostalCode] = useState(address?.postalCode || '');
  const [country, setCountry] = useState(address?.country || 'India');
  const [isDefault, setIsDefault] = useState(address?.isDefault || false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      fullName,
      streetAddress,
      city,
      state,
      postalCode,
      country,
      isDefault,
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Address Title (e.g., Home, Work)
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700 mb-1">
          Street Address
        </label>
        <input
          type="text"
          id="street-address"
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
            State / Province
          </label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700 mb-1">
            Postal Code
          </label>
          <input
            type="text"
            id="postal-code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
            required
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            {/* Add more countries as needed */}
          </select>
        </div>
      </div>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          id="default-address"
          checked={isDefault}
          onChange={(e) => setIsDefault(e.target.checked)}
          className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
        />
        <label htmlFor="default-address" className="ml-2 block text-sm text-gray-900">
          Set as default address
        </label>
      </div>
      
      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors"
        >
          {address ? 'Update Address' : 'Add Address'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

const AccountAddresses: React.FC = () => {
  const { user, addAddress, updateAddress, deleteAddress } = useAuth();
  
  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleAddAddress = async (address: Omit<Address, 'id'>) => {
    setError(null);
    setLoading(true);
    
    try {
      await addAddress(address);
      setShowForm(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };
  
  const handleUpdateAddress = async (address: Omit<Address, 'id'>) => {
    if (!editingAddress) return;
    
    setError(null);
    setLoading(true);
    
    try {
      await updateAddress({ ...address, id: editingAddress.id });
      setEditingAddress(null);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };
  
  const handleDeleteAddress = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      setError(null);
      setLoading(true);
      
      try {
        await deleteAddress(id);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">My Addresses</h2>
        {!showForm && !editingAddress && (
          <button 
            onClick={() => setShowForm(true)}
            className="flex items-center text-amber-600 hover:text-amber-700"
          >
            <Plus size={18} className="mr-1" /> Add New Address
          </button>
        )}
      </div>
      
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 text-red-700">
          <p>{error}</p>
        </div>
      )}
      
      {loading && (
        <div className="text-center py-4">
          <p>Loading...</p>
        </div>
      )}
      
      {showForm ? (
        <div className="border rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium mb-4">Add New Address</h3>
          <AddressForm 
            onSubmit={handleAddAddress} 
            onCancel={() => setShowForm(false)} 
          />
        </div>
      ) : editingAddress ? (
        <div className="border rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium mb-4">Edit Address</h3>
          <AddressForm 
            address={editingAddress}
            onSubmit={handleUpdateAddress} 
            onCancel={() => setEditingAddress(null)} 
          />
        </div>
      ) : user?.addresses && user.addresses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {user.addresses.map((address) => (
            <div 
              key={address.id}
              className={`border rounded-lg p-4 relative ${
                address.isDefault ? 'border-amber-500 bg-amber-50' : ''
              }`}
            >
              {address.isDefault && (
                <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs px-2 py-1 rounded">
                  Default
                </span>
              )}
              
              <div className="flex items-start mb-3">
                <Home size={18} className="mr-2 text-gray-500 mt-1" />
                <div>
                  <h3 className="font-medium">{address.title}</h3>
                  <p className="text-sm">{address.fullName}</p>
                </div>
              </div>
              
              <div className="ml-7 mb-4">
                <p className="text-sm text-gray-600">{address.streetAddress}</p>
                <p className="text-sm text-gray-600">
                  {address.city}, {address.state} {address.postalCode}
                </p>
                <p className="text-sm text-gray-600">{address.country}</p>
              </div>
              
              <div className="flex space-x-3 ml-7">
                <button 
                  onClick={() => setEditingAddress(address)}
                  className="text-amber-600 hover:text-amber-700 text-sm flex items-center"
                >
                  <Edit size={14} className="mr-1" /> Edit
                </button>
                <button 
                  onClick={() => handleDeleteAddress(address.id)}
                  className="text-red-600 hover:text-red-700 text-sm flex items-center"
                >
                  <Trash2 size={14} className="mr-1" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 border rounded-lg">
          <p className="text-gray-500 mb-4">You haven't added any addresses yet.</p>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors"
          >
            Add Your First Address
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountAddresses;