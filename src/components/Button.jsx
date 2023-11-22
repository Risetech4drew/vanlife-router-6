export default function Button({ children, size }) {
  const sizeClass = size ? `button-${size}` : "";

  return <button className={sizeClass}>{children}</button>;
}
