// components/InputWithIcon.tsx
import styled from "styled-components";
import { IconType } from "react-icons";

interface InputWithIconProps {
  icon: IconType;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

const StyledIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  font-size: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 44px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
  font-size: 16px;
  background: #fff;
  color: #333;

  &:focus {
    border-color: #baa77f;
  }
`;

export function InputWithIcon({
  icon: Icon,
  placeholder,
  type = "text",
  value,
  onChange,
  name,
}: InputWithIconProps) {
  return (
    <Wrapper>
      <StyledIcon>
        <Icon />
      </StyledIcon>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </Wrapper>
  );
}
