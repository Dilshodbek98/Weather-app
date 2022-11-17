import styled from "styled-components";

const Container = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(#2a8dca, #b0d1e4);
  position: relative;
  padding: 50px;
  .logo{
    z-index: 2;
  }
  h2 {
    color: white;
    font-weight: 400;
    font-size: 16px;
  }
  img {
    position: absolute;
    width: 250px;
    top: 100px;
    right: 190px;
  }

  .info {
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 50px;
    color: white;
    margin-bottom: 20px;
    .temperature {
      font-size: 120px;
    }
    .location {
      .city {
        font-size: 40px;
      }
    }
  }
  @media (max-width: 1300px) {
    img {
      position: absolute;
      width: 100px;
      top: 50px;
      right: 100px;
    }
  }

  @media (max-width: 1100px) {
    img {
      position: absolute;
      width: 100px;
      top: 50px;
      right: 100px;
    }
    .info {
      gap: 20px;
      .temperature {
        font-size: 60px;
      }
      .location {
        .city {
          font-size: 30px;
        }
      }
    }
  }
  @media (max-width: 500px) {
    img {
      display: none;
    }
  }
  @media (max-width: 768px) {
    padding: 30px;
    img {
      position: absolute;
      width: 100px;
      top: 50px;
      right: 20px;
    }
    .info {
      gap: 20px;
      .temperature {
        font-size: 40px;
      }
      .location {
        .city {
          font-size: 20px;
        }
      }
    }
  }
  @media (max-width: 320px) {
    padding: 10px;
    h2{
      margin-bottom: 10px;
    }
    img {
      display: none;
    }
    .info {
      gap: 20px;
      .temperature {
        font-size: 20px;
      }
      .location {
        .city {
          font-size: 14px;
        }
      }
    }
  }
`;

const Cold = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.4);
  z-index: 1;
`
const Cool = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.3);
  z-index: 1;
`
const Warm = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export { Container, Cold, Cool, Warm };
