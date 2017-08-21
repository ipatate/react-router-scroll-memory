import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  padding:0;
  flex-direction: column;
`;

const ListEleme = styled.li`
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  a {
    display: flex;
    flex: 1 1 auto;
    padding: .5rem;
    color: #ff6600;
  }
`;

export default () => 
  <div>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    </nav>
    <h1>List of element</h1>
    <List>
      <ListEleme><Link to="/detail/1">Element 1</Link></ListEleme>
      <ListEleme><Link to="/detail/2">Element 2</Link></ListEleme>
      <ListEleme><Link to="/detail/3">Element 3</Link></ListEleme>
      <ListEleme><Link to="/detail/4">Element 4</Link></ListEleme>
      <ListEleme><Link to="/detail/5">Element 5</Link></ListEleme>
      <ListEleme><Link to="/detail/6">Element 6</Link></ListEleme>
      <ListEleme><Link to="/detail/7">Element 7</Link></ListEleme>
      <ListEleme><Link to="/detail/8">Element 8</Link></ListEleme>
      <ListEleme><Link to="/detail/9">Element 9</Link></ListEleme>
      <ListEleme><Link to="/detail/10">Element 10</Link></ListEleme>
      <ListEleme><Link to="/detail/11">Element 11</Link></ListEleme>
      <ListEleme><Link to="/detail/12">Element 12</Link></ListEleme>
      <ListEleme><Link to="/detail/13">Element 13</Link></ListEleme>
      <ListEleme><Link to="/detail/14">Element 14</Link></ListEleme>
      <ListEleme><Link to="/detail/15">Element 15</Link></ListEleme>
      <ListEleme><Link to="/detail/16">Element 16</Link></ListEleme>
      <ListEleme><Link to="/detail/17">Element 17</Link></ListEleme>
    </List>
  </div>;
