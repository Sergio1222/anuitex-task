
import InputMask from 'react-input-mask';
import './style.scss';


export function Input(props) {

  let classNameInput =
    (props.error === undefined) ? 'input' :
      (props.error === "") ? 'input input-valid' : 'input input-invalid';

  return (
    <div>
        <label><p>{props.label}</p>
      <InputMask
        className={classNameInput}
        type={props.type}
        mask={props.mask}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        onChange={props.onChange}
        onBlur={props.onBlur}
        pattern={props.pattern}
      />
      </label>
      <p className="message">{props.error}</p>
    </div>
  );
}