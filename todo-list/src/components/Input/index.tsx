interface InputProps extends Partial<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputProps) {
  return (
    <input
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
      type={props.type}
    />
  );
}

export default Input;
