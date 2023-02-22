import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import Header from "../header/Header";
import useDebounce from "../../hooks/useDebounce";
import {getAllCompanies} from "../../services/companiesService";
import {Alert, Button, CircularProgress, Container, styled} from "@mui/material";
import CompaniesList from "../companiesList/CompaniesList";

const Main = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [totalResults, setTotalResults] = useState(0);
  const limit = useRef(12);
  const [loader, setLoader] = useState(false);
  const [newCompaniesLoading, setNewCompaniesLoading] = useState(false);
  const [error, setError] = useState(false);
  const [companiesList, setCompaniesList] = useState([]);
  const debouncedValue = useDebounce<string>(inputSearch, 500)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value)
  }

  useEffect(() => {
    setError(false);
    fetchCompanies();
  }, [debouncedValue])

  const fetchCompanies = async () => {
    if (inputSearch) {
      try {
        setLoader(true);
        const response = await getAllCompanies({q: inputSearch, limit: String(limit.current)});
        setTotalResults(response.totalResults);
        return setCompaniesList(response.companiesList);
      } catch (e) {
        setError(true);
      } finally {
        setLoader(false);
        setNewCompaniesLoading(false);
      }
    }
    setCompaniesList([]);
  }

  const loadMore = () => {
    limit.current += 12;
    setNewCompaniesLoading(true);
    fetchCompanies();
  }

  const showCompanies = !error;
  const showLoading = loader && !companiesList.length;
  const showLoadMore = (totalResults > limit.current) && !!companiesList.length && showCompanies;

  return (
    <>
      <Header inputSearch={inputSearch} handleChange={handleChange} showSearch/>
      <MainWrap>
        <Container>
          {!companiesList.length && <h1>Find Company</h1>}
          {error && <Alert severity="error">Internal Server Error</Alert>}
          {showLoading && (
            <CircularProgressWrap>
              <CircularProgress/>
            </CircularProgressWrap>)
          }
          {showCompanies && <CompaniesList companiesList={companiesList}/>}
          {showLoadMore && (
            <ButtonWrap>
              <Button variant="contained" disabled={newCompaniesLoading} onClick={loadMore}>Load more</Button>
            </ButtonWrap>
          )}
        </Container>
      </MainWrap>
    </>
  );
};

export default Main;

const ButtonWrap = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px'
}));

const MainWrap = styled('div')(() => ({
  padding: '20px 0 50px',
  position: 'relative',
}));

const CircularProgressWrap = styled('div')(() => ({
  position: 'absolute',
  left: '50%',
  marginLeft: '-50px',
  top: '350px'
}));