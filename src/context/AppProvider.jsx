import { useEffect, useMemo, useState } from 'react';
import AppContext from './AppContext';
import PropTypes from 'prop-types';

export default function AppProvider({ children }) {
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => { }, []);

  const value = useMemo(() => ({
    nameFilter, setNameFilter
  }), [nameFilter]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};