import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: auto;
  
`;

export const FormItems = styled.form`
  width: 490px;
  max-width: 100%;
  padding: 15px 5px;
`;

export const FormContainer = styled.div`
  text-align: center;
`;

export const InputContainer = styled.input`
  border-radius: 6px;
  height: 40px;
  padding: 0 10px;
  width: 66%;
  outline: none;
  border: none;
  margin-bottom:10px;
  margin-top:3px;
`;

export const SelectContainer = styled.select`
  border-radius: 6px;
  height: 40px;
  padding: 0 10px;
  width: 70%;
  outline: none;
  border: none;
  margin-bottom:10px;
  margin-top:3px;
`;

export const TextareaContainer = styled.textarea`
  border-radius: 6px;
  height: 80px;
  padding: 5px 10px;
  width: 66%;
  outline: none;
  border: none;
  margin-bottom:10px;
  margin-top:3px;
`;

export const ButtonContainer = styled.button`
  border-radius: 5px;
  height: 60px;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 20px;
  font-weight: bold;
  width: 70%;
  background-color:#cca559;
`;

export const IconsContainer = styled.div`
  
    width: 66%;
    text-align:left;
    line-height:5px;
    margin:auto;
    color:#fff;
    font-size:20px;
`;

//    <button
//     type="submit"
//     disabled={loading}
//     className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-md transform ${
//       loading
//         ? "bg-gray-400 cursor-not-allowed"
//         : "bg-[#baa77f] hover:bg-[#a7946e] hover:scale-105"
//     }`}
//   >
//     {loading ? "Enviando..." : "Confirmar Agendamento"}
//   </button>
