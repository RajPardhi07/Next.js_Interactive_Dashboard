'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchData } from '../store/dataSlice';

interface User {
  id: string;
  name: string;
  email: string;
  status: string;
}
type FilterType = 'all' | 'active' | 'inactive';

// Define props for the DataTableWidget
interface DataTableWidgetProps {
  filter: FilterType;
}

const DataTableWidget: React.FC<DataTableWidgetProps> = ({filter}) => {
  const dispatch = useDispatch<AppDispatch>();
  const tableData = useSelector((state: RootState) => state.data.tableData);
  const status = useSelector((state: RootState) => state.data.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  return (
    <div className="widget">
      <h3 className="widget-title">User Information</h3>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData &&
              tableData.map((user: User) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.status}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataTableWidget;
