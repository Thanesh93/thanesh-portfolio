/* Reusable Section Title Component */
export default function SectionTitle({ label, heading, subtext }) {
  return (
    <div className="section-title reveal-up">
      {label && <span className="section-title__label">{label}</span>}
      <h2>{heading}</h2>
      {subtext && <p>{subtext}</p>}
    </div>
  );
}
