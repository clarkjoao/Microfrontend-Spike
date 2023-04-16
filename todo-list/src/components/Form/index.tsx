interface FormProps extends Partial<HTMLFormElement> {
  children: any;
}

function Form(props: FormProps) {
  return <form onSubmit={props.onSubmit}>{props.children}</form>;
}

export default Form;
