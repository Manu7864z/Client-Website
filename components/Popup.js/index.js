import styled from "styled-components";

export default function Popup({ children, onClose }) {
  return (
    <StyledPopup>
      <StyledPopupInner>
        <h2>Kontaktieren Sie uns!</h2>
        <StyledPopupClose onClick={() => onClose(false)}>X</StyledPopupClose>
        {children}
        <StyledForm
          action="https://formsubmit.co/info@glaserei-baatz.com"
          method="POST"
        >
          <StyledInput type="text" name="name" placeholder="Name" required />
          <StyledInput
            type="email"
            name="email"
            placeholder="E-Mail-Adresse"
            required
          />
          <StyledInput type="text" name="phone" placeholder="Telefonnummer" />
          <input
            type="hidden"
            name="_subject"
            value="Neue Kontaktanfrage!"
          ></input>
          <input
            type="hidden"
            name="_autoresponse"
            value="Sie haben eine Kontaktanfrage an Glas und Spiegel gesendet!"
          ></input>
          <input type="hidden" name="_template" value="table"></input>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/"
          ></input>
          <StyledTextArea
            name="message"
            placeholder="Ihre Nachricht"
            cols="30"
            rows="5"
            required
          ></StyledTextArea>

          <StyledSubmit type="submit">Senden</StyledSubmit>
        </StyledForm>
        {/* using formsubmit.co */}
      </StyledPopupInner>
    </StyledPopup>
  );
}

const StyledPopup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  z-index: 1000;
`;

const StyledPopupInner = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 10px;
  padding: 32px;
  z-index: 1000;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

const StyledPopupClose = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  border: 1px solid #333;
  background: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  z-index: 1000;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;

  &:hover {
    color: rgba(300, 0, 0, 1);
    border: 1px solid rgba(300, 0, 0, 1);
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
  position: relative;
  background: white;
  border-radius: 10px;
  padding: 32px;
  z-index: 1000;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #333;
  border-radius: 4px;
  resize: vertical;
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f7f7f7;
  }

  &:focus {
    background-color: #f7f7f7;
    border: 1px solid rgba(0, 200, 100, 1);
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #333;
  border-radius: 4px;
  resize: vertical;
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f7f7f7;
  }

  &:focus {
    background-color: #f7f7f7;
    border: 1px solid rgba(0, 200, 100, 1);
  }
`;

const StyledSubmit = styled.button`
  background-color: #333;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(0, 200, 100, 1);
  }
`;
