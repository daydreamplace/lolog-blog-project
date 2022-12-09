import { useSelector } from 'react-redux';
import styled from 'styled-components';
import User from './User';
import Social from './Social';

const UserBox = () => {
  const { user } = useSelector(state => state.myLologData);

  return (
    <UserBoxContainer className='user-box-container'>
      <User userInfo={user} />
      <Social />
    </UserBoxContainer>
  );
};

const UserBoxContainer = styled.div`
  margin-top: 5.625rem;

  @media screen and (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 3rem;
  }
`;

export default UserBox;
