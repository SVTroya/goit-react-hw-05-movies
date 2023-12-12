import styled from 'styled-components';

export const MovieSearchForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  input {
    width: 400px;
    height: 60px;
    border: 2px solid #2e2f42;
    border-radius: 15px;
    padding: 8px 16px;
    font-size: 20px;
    background-color: var(--color-card-bckg);
  }

  input:focus, input:hover {
    border: 2px solid tomato;
    outline: none;
  }

  button {
    margin-top: 20px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    transform: scale(1);
    box-shadow: 2px 2px 4px 2px #212121, inset 0 0 10px 2px rgba(148, 148, 148, 0.78);
    color:#2e2f42;

    transition: transform 250ms ease-in-out,
    color 250ms ease-in-out,
    box-shadow 250ms ease-in-out;

    svg{
      pointer-events: none;
    }
  }

  button:hover, button:focus {
    transform: scale(1.3);
    color: tomato;
    box-shadow: 3px 3px 5px 3px #212121, inset 0 0 10px 2px rgba(148, 148, 148, 0.78);
  }
`;
