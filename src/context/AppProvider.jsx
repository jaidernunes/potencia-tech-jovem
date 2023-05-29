import { useEffect, useMemo, useState } from 'react';
import AppContext from './AppContext';
import PropTypes from 'prop-types';

export default function AppProvider({ children }) {
  const [nameFilter, setNameFilter] = useState('');
  const [students, setStudents] = useState([]);
  const [schools, setSchools] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem('students')) || []);
    setSchools(JSON.parse(localStorage.getItem('schools')) || []);
  }, []);

  const value = useMemo(() => ({
    nameFilter, setNameFilter,
    students, setStudents,
    schools, setSchools,
    isOpen, setIsOpen,
    isRegisterOpen, setIsRegisterOpen,
  }), [nameFilter, students, schools, isOpen, isRegisterOpen]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};