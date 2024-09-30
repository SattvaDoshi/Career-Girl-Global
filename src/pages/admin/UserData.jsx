import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../../const';

const UserData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${URL}/all-users`);
        console.log(response.data.users);
        setData(response.data.users);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Failed to fetch users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="p-4 min-h-screen flex items-center justify-center">
      <p className="text-pink-700">Loading users...</p>
    </div>;
  }

  if (error) {
    return <div className="p-4 min-h-screen flex items-center justify-center">
      <p className="text-red-500">{error}</p>
    </div>;
  }

  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-pink-700">User Data</h1>
      {data.length === 0 ? (
        <p className="text-pink-700">No users found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-pink-100 rounded-lg overflow-hidden">
            <thead className="bg-pink-200">
              <tr>
                <th className="px-4 py-2 text-left text-pink-700">Name</th>
                <th className="px-4 py-2 text-left text-pink-700">Email</th>
                <th className="px-4 py-2 text-left text-pink-700">Country</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={row.id || index} className={index % 2 === 0 ? 'bg-pink-50' : 'bg-pink-100'}>
                  <td className="px-4 py-2 text-pink-800">{row.name}</td>
                  <td className="px-4 py-2 text-pink-800">{row.email}</td>
                  <td className="px-4 py-2 text-pink-800">{row.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserData;