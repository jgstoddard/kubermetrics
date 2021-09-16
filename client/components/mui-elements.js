import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';


export const PodElement = styled(Card)({
  display: 'flex',
  width: '150px',
  height: '150px',
  color: 'white',
  backgroundColor: '#3b3d41',
  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  flexDirection: 'column',
  padding: '45px',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px',
  clipPath:
  'circle(50%)',
});

export const DeploymentElement = styled(Card)({
  display: 'flex',
  width: '150px',
  height: '150px',
  color: 'white',
  margin: '10px',
  backgroundColor: '#3b3d41',
  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  flexDirection: 'column',
  padding: '45px',
  justifyContent: 'center',
  alignItems: 'center',
  clipPath:
  'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
});

// clipPath:
//   'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)'


export const ServiceElement = styled(Card)({
  display: 'flex',
  width: '150px',
  height: '150px',
  color: 'white',
  margin: '10px',
  backgroundColor: '#3b3d41',
  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  flexDirection: 'column',
  padding: '45px',
  justifyContent: 'center',
  alignItems: 'center',
  clipPath: 'inset(21% 0 22% 0 round 10% 10% 10% 10%)',
});
