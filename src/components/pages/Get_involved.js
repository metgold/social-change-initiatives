import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import Footer from '../Footer';

 function GetInvolved() {
  return (
  <React.Fragment>
  <Get><h1 className='get_involved'>LIKE & SUBSCRIBE</h1></Get>
  <Footer />
  </React.Fragment>)
}

export default  GetInvolved

const Get = styled.div`
    background-image: url('/images/img-2.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    font-size: 100px;
`