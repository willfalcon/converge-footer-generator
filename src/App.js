import styled, { ThemeProvider } from 'styled-components';
import Code from './Code';
import { useForm, FormContextProvider } from './formUtils';
import getCopyText from './getCopyText';
import GlobalStyle from './GlobalStyle';
import Preview from './Preview';
import TextField from './TextField';
import theme from './theme';

function App() {
  const initialFields = {
    name: '',
    position: '',
    pronouns: '',
    email: '',
  };

  const formData = useForm(initialFields);
  const { loading, inputs, handleChange, errors } = formData;

  function copyCode() {
    const copyText = getCopyText(inputs);
    navigator.clipboard.writeText(copyText);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <h1>Converge Footer Generator</h1>

        <FormContextProvider value={{ errors, inputs, handleChange }}>
          <FormWrapper className="form">
            <fieldset className="form__fields" disabled={loading} aria-busy={loading}>
              <div className="fieldset-flex-fix">
                <TextField name="name" label="Name" required />
                <TextField name="email" label="Email" required />
                <TextField name="position" label="Position" />
                <TextField name="pronouns" label="Pronouns" />
              </div>
            </fieldset>
          </FormWrapper>
        </FormContextProvider>
        <Preview {...inputs} />
        <Button className="button" className="copy" onClick={copyCode}>
          Copy Code
        </Button>
        <Code {...inputs} />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

const Button = styled.button`
  background: ${({ theme }) => theme.teal};
  border: 1px solid ${({ theme }) => theme.dark};
  outline: none;
  color: white;
  padding: 0.5rem 1rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 3rem;
`;

const FormWrapper = styled.form`
  padding: 0 2rem;
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
  }

  @supports (display: grid) {
    .fieldset-flex-fix {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
      gap: 0.5rem;
    }
  }

  .form {
    &__submit {
      justify-self: start;
      -webkit-appearance: none;
      border-radius: 0px;
      grid-column: span 2;
      margin-right: 1rem;
    }
  }

  .field-address {
    grid-column: span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0.5rem;
  }

  .complex-field-label {
    font-size: 1.8rem;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 2px;
    line-height: 2.15;
    margin: 0 0 0.5rem;
    text-transform: uppercase;
    display: block;
    grid-column: span 2;
    width: 50%;
    ::after {
      content: '';
      width: 100%;
      height: 1px;
      display: block;
    }
  }

  .honeypot {
    display: none;
  }
  .success {
    padding: 1rem;
    background: ${({ theme }) => theme.green};
    color: white;
  }
`;

export default App;
