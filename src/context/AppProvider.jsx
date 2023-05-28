import { useEffect, useMemo, useState } from 'react';
import AppContext from './AppContext';
import PropTypes from 'prop-types';

export default function AppProvider({ children }) {
  const [nameFilter, setNameFilter] = useState('');
  const [students, setStudents] = useState([]);
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem('students')) || []);
    console.log(students);
  }, []);

  const value = useMemo(() => ({
    nameFilter, setNameFilter,
    students, setStudents,
    schools, setSchools,
  }), [nameFilter, students, schools]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};