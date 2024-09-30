import React, { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import axios from 'axios';
import { URL } from '../../const';
import toast from 'react-hot-toast';


const ContactData = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${URL}/contact`);
      setData(response.data.contact);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again later.');
    } finally {
    }
  };

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this item?");
    
    if (!isConfirmed) {
      return; 
    }

    try {
      await axios.delete(`${URL}/delete-form/${id}`);
      setData(prevData => prevData.filter(item => item.id !== id));
      window.location.reload();
      toast.success("Contact deleted successfully");
    } catch (error) {
      console.error('Error deleting item:', error);
      toast.error("Failed to delete item. Please try again later.");
    }
  };

  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-pink-700">Contact Data</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-pink-100 rounded-lg overflow-hidden">
          <thead className="bg-pink-200">
            <tr>
              <th className="px-4 py-2 text-left text-pink-700">First Name</th>
              <th className="px-4 py-2 text-left text-pink-700">Last Name</th>
              <th className="px-4 py-2 text-left text-pink-700">Email</th>
              <th className="px-4 py-2 text-left text-pink-700">Message</th>
              <th className="px-4 py-2 text-left text-pink-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-pink-50' : 'bg-pink-100'}>
                <td className="px-4 py-2 text-pink-800">{row.firstName}</td>
                <td className="px-4 py-2 text-pink-800">{row.lastName}</td>
                <td className="px-4 py-2 text-pink-800">{row.email}</td>
                <td className="px-4 py-2 text-pink-800">{row.message}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(row._id)}
                    className="text-pink-600 hover:text-pink-800 transition-colors duration-200"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactData;