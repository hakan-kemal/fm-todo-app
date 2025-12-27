export default function TodoInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  const styles = `relative bg-white inset-shadow-input rounded-md w-full pl-14 py-4 pr-5 text-preset-3 leading-5! text-purple-800
    bg-[url(./assets/icons/icon-circle.svg)] bg-position-[1.25rem_center] bg-no-repeat bg-size-[1.25rem_1.25rem]
    focus-visible:outline-2 focus-visible:outline-purple-300 focus-visible:outline-offset-2`;

  return <input className={styles} {...props} />;
}
