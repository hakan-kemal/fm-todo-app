export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  const styles = `inset-shadow-input rounded-md w-full pl-18 py-5 pr-6 text-preset-1 !leading-6 text-purple-800
    bg-[url(./assets/icons/icon-circle.svg)] bg-[position:1.5rem_center] bg-no-repeat bg-[length:1.5rem_1.5rem]
    focus-visible:outline-2 focus-visible:outline-purple-300 focus-visible:outline-offset-2`;

  return <input className={styles} {...props} />;
}
