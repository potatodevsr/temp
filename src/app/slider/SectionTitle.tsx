type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="leading-none">
      <div className="text-[22px] sm:text-[28px] font-semibold tracking-wide text-red-700">
        {title}
      </div>
      <div className="mt-1 text-[18px] sm:text-[22px] italic text-red-700/80">
        {subtitle}
      </div>
    </div>
  );
}
