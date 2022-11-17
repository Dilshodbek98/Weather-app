import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  background: linear-gradient(#275b81, #718591);
  padding: 50px;
  position: relative;
  .top {
    height: 50%;
    overflow-y: auto;
    border-bottom: 1px solid #a9cee1;
    ul {
      list-style-type: none;
    }
    p {
      color: #a9cee1;
      width: fit-content;
      cursor: pointer;
      margin-bottom: 15px;
    }

    .row {
      display: flex;
      justify-content: space-between;
    }

    input {
      border: none;
      color: white !important;
      background-color: transparent;
      width: 80%;
      font-size: 16px;
      border-bottom: 1px solid #a9cee1;
      margin-bottom: 20px;
      :focus {
        outline: none;
      }
      ::placeholder {
        color: #a9cee1;
      }
    }

    .icon {
      position: absolute;
      top: 0;
      right: 0;
      width: 70px;
      height: 70px;
      background-color: #a9cee1;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      :active {
        transform: scale(1.05);
      }
      :hover {
        opacity: 0.95;
      }
    }
  }

  .bottom {
    border-bottom: 1px solid #a9cee1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
    h2 {
      color: white;
      font-weight: 400;
      font-size: 16px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .row {
      display: flex;
      justify-content: space-between;
      p {
        color: #a9cee1;
        width: fit-content;
        cursor: pointer;
        margin-bottom: 15px;
      }
      span {
        color: white;
      }
    }
  }

  @media (max-width: 768px) {
    .icon {
      width: 50px;
      height: 50px;
    }
    h2 {
      margin-top: 15px;
      margin-bottom: 15px;
    }
    p {
      margin-bottom: 10px;
    }
  }
  @media (max-width: 320px) {
    .icon {
      width: 50px;
      height: 50px;
    }
    h2 {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 5px;
    }
  }
`;

export { Container };
