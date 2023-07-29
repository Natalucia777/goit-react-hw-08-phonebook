import styled from '@emotion/styled';
import { MdContactPhone } from 'react-icons/md';

export const HomeStile = styled.div`
    margin-top: 150px;
    text-align: center;
    margin-left: 15px;
  }
`;
export const Icon = styled(MdContactPhone)`
  margin-left: 15px;
  width: 60px;
  height: 60px;
  margin-top: 10px;
  color: #b02767;

  &:hover,
  &:focus {
    background-color: rgb(64, 207, 232);
  }
`;