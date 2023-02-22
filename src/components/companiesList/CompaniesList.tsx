import React from "react";
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import {Card, CardContent, styled} from '@mui/material';
import {CompaniesListProps} from "./companiesList.types";

const CompaniesList: React.FC<CompaniesListProps> = ({companiesList}) => {
  return (
    <CompaniesListWrap>
      {companiesList?.map((el) => {
        return (
          <Card sx={{minWidth: 275}} key={el.companyId}>
            <CardContent style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div className="question_card">{el.name}</div>
              <WrapLink>
                <Link to={`company/${el.companyId}`}><Button variant="contained">More info</Button></Link>
              </WrapLink>
            </CardContent>
          </Card>
        )
      })}
    </CompaniesListWrap>
  );
};

export default CompaniesList;

const CompaniesListWrap = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}));

const WrapLink = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
}));