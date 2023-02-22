import React, {useEffect, useState} from 'react';
import {CircularProgress, Container, styled} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Header from "../header/Header";
import {useParams} from "react-router-dom";
import {getCompany} from "../../services/companiesService";
import {ICompany} from "./company.types";

const CompanyDetails = () => {
  const [loader, setLoader] = useState(false);
  const [company, setCompany] = useState<ICompany | null>(null);
  const navigate = useNavigate();
  const {id} = useParams();

  const fetchCompany = async () => {
    setLoader(true);
    const response = await getCompany(id ?? '');
    setCompany(response);
  }

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetchCompany()
      .then(() => setLoader(false));
  }, [])
  return (
    <>
      <Header/>
      {loader && (
        <CircularProgressWrap>
          <CircularProgress />
        </CircularProgressWrap>)
      }
      {!loader && (
        <Container>
          <TitleWrap>
            <ArrowBackIcon onClick={goBack} style={{cursor: 'pointer'}}/> {company?.name}
          </TitleWrap>
          <p>{company?.description}</p>
        </Container>
      )}
    </>
  );
};

export default CompanyDetails;

const CircularProgressWrap = styled('div')(() => ({
  position: 'absolute',
  left: '50%',
  marginLeft: '-50px',
  top: '350px'
}));

const TitleWrap = styled('h2')(() => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '20px'
}));