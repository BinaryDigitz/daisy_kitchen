type Props = {
  text1: string;
  text2: string;
  size: string
};

function Title({ text1, text2, size }: Props) {
  return (
    <h3 className={`${size} text-center `}>
      <span className="text-[var(--primary-color)]">{text1}</span>
      <span className="text-[var(--secondary-color)]">{text2}</span>
    </h3>
  );
}

export default Title;
