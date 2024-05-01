import { buttonStyle } from "./Button.css";

type Props = {
  children: React.ReactNode;
};

export function Button({ children }: Props) {
  return (
    <button type="button" className={buttonStyle}>
      {children}
    </button>
  );
}
