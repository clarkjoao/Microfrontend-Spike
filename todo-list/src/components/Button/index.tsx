import "./style.css";
interface ButtonProps extends Partial<HTMLButtonElement> {
  children: any;
}

function Button(props: ButtonProps) {
  return <button type={"submit"}>{props.children}</button>;
}

export default Button;
