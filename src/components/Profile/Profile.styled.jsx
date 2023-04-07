import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 310px;
  height: 450px;
  margin: 20px auto;
  border: 1px solid rgb(223, 223, 223);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 310px;
  height: 370px;
  padding: 30px;
  background-color: rgb(253, 253, 253);
`;

export const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 1px solid black;
  margin: 0 auto 20px;
`;

export const Name = styled.p`
  font-size: 26px;
  font-weight: 600;
  margin: 0 auto 10px;
`;

export const Tag = styled.p`
  margin: 0 auto 10px;
  color: rgb(88, 88, 88);
`;

export const Location = styled.p`
  margin: 0 auto;
  color: rgb(88, 88, 88);
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  height: 100%;
  background-color: rgb(230, 230, 230);
`;

export const StatsElement = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid rgb(216, 214, 214);
  width: 100%;
  height: 100%;
`;

export const Label = styled.span`
  margin: 0 auto;
`;

export const Quantity = styled.span`
  margin: 0 auto;
  font-weight: 700;
`;
