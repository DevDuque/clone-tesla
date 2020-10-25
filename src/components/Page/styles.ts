import styled from 'styled-components';
import model3 from '../Images/Model_3.jpg';
import modelS from '../Images/Model_S.jpg';
import modelX from '../Images/Model_X.jpg';
import modelY from '../Images/Model_Y.jpg';
import modelSolar from '../Images/Model_Solar.jpg'; 
import modelBike from '../Images/Model_Bike.jpg';


export const Container = styled.div`
  .colored:nth-child(1) {
    background: url(${model3});
    background-position: center;
    background-repeat: no-repeat;
  };

  .colored:nth-child(2) {
    background: url(${modelX});
    background-position: center;
    background-repeat: no-repeat;
  };
  .colored:nth-child(3) {
    background: url(${modelY});
    background-position: center;
    background-repeat: no-repeat;
  };
  .colored:nth-child(4) {
    background: url(${modelS});
    background-position: center;
    background-repeat: no-repeat;
  };
  .colored:nth-child(5) {
    background: url(${modelBike});
    background-position: center;
    background-repeat: no-repeat;
  };
  .colored:nth-child(6) {
    background: url(${modelSolar});
    background-position: center;
    background-repeat: no-repeat;
  };
  .colored:nth-child(7) {
    background: url(${model3});
    background-position: center;
    background-repeat: no-repeat;
  };
`

export const Spacer = styled.div`
  height: 10vh;
  background: #595959;
`