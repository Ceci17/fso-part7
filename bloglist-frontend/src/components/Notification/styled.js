import styled from 'styled-components'

// .toast {
//     font-size: 16px;
//     font-style: italic;
//     display: flex;
//     align-items: center;
//   }

//   .toast p {
//     padding: 10px;
//     border-radius: 10px;
//   }

//   .toast .success {
//     border: 3px solid rgb(34, 187, 51);
//     color: rgb(34, 187, 51);
//   }

//   .toast .error {
//     border: 3px solid rgb(187, 33, 36);
//     color: rgb(187, 33, 36);
//   }

export const Toast = styled.div`
  position: absolute;
  padding: 5px;
  font-size: 12px;
  display: flex;
  width: calc(100% - 10px);
  height: 24px;
  height: 0;
  align-items: center;
  bottom: 0;
  left: 0;
  opacity: 0.8;
  transform-origin: top;
  transition: ease-in 0.2s all;
  &.error {
    background-color: #000000;
    color: rgb(187, 33, 36);
    height: 20px;
    transition: ease-in 0.2s all;
  }
  &.success {
    background-color: #000000;
    color: rgb(34, 187, 51);
    height: 20px;
    transition: ease-in 0.2s all;
  }
`
