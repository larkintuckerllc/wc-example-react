/// <reference path="@types/react" />

declare namespace JSX {
  interface HelloWorldAttributes extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    color?: string;
    value?: string;
  }
  interface IntrinsicElements {
    "hello-world": HelloWorldAttributes;
  }
}
