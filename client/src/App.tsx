import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
// import { Container } from 'reactstrap';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeModal from './components/EmployeeModal';
import EmployeeList from './components/EmployeeList';
import styled from 'styled-components'

export const App = () => {
  const Container = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    color: white;
    background-color: green;`

// const App = () => {
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
  `;
  const Wrapper = styled.section`
      padding: .3em;
      color: white;
      justify-content:space-between;
      display: flex;
      `;
  
  return (

    <Provider store={store}>
      <div>
        <Container>
          <Wrapper>
            <Title>
              CRUD Employee
            </Title>
            <text id="explain"> Create List update and Delete your employees</text>
          </Wrapper>
          <EmployeeModal />
          <EmployeeList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
