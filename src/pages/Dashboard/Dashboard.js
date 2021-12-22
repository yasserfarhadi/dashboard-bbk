import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../../redux';

import AppBar from '../../components/AppBar/AppBar';
import Container from '@mui/material/Container';
import SearchField from '../../components/SearchField/SearchField';
import DataGrid from '../../components/DataGrid/DataGrid';
import Modal from '../../components/Modal/Modal';

function Dashboard() {
  const [searchValue, setSearchValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [filteredData, setFilteredData] = useState([]);

  const dispatch = useDispatch();

  const { login, data } = useSelector((store) => store);
  useEffect(() => {
    dispatch(actions.fetchData());
  }, []);
  useEffect(() => {
    searchFilterHandler();
  }, [data.data]);
  useEffect(() => {
    if (searchValue === '') {
      setFilteredData(data.data);
    }
  }, [searchValue]);

  const searchFilterHandler = () => {
    let newFilteredData;
    const DataClone = [];
    data.data.forEach((item) => DataClone.push({ ...item }));
    newFilteredData = DataClone.filter((item) =>
      item.title.includes(searchValue)
    );
    setFilteredData(newFilteredData);
  };

  const editHandler = (id) => {
    const row = data.data.find((item) => item.id === id);
    setEditItem(row);
    setModalOpen(true);
  };

  const modalCloseHandler = useCallback(() => {
    setModalOpen(false);
  });

  const submitChangeHander = (id, title, body) => {
    dispatch(actions.editItemAction({ id, title, body }));
    modalCloseHandler();
  };

  const GridData =
    filteredData.length === 0 && searchValue === '' ? data.data : filteredData;

  return (
    <div className="dashboard">
      <AppBar
        filteredDataCount={filteredData.length}
        userFullName={login.user.fullName}
      />
      <Container maxWidth="lg">
        <SearchField
          searchvalueGetter={searchValue}
          searchValueSetter={setSearchValue}
          searchFilterHandler={searchFilterHandler}
        />
        <div className="mb"></div>
        <DataGrid
          data={GridData}
          editHandler={editHandler}
          isLoading={data.loading}
        />
        <Modal
          open={modalOpen}
          modalCloseHandler={modalCloseHandler}
          data={editItem}
          submitChangeHander={submitChangeHander}
        />
      </Container>
    </div>
  );
}

export default Dashboard;
