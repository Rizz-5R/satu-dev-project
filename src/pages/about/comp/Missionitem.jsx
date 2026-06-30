export default function MissionItem({ icon, text }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="
          flex-shrink-0 w-8 h-8 rounded-lg
          bg-primary-50 text-primary-600
          flex items-center justify-center
          mt-0.5
        "
      >
        {icon}
      </span>
      <p className="font-body text-sm text-secondary-700 leading-relaxed pt-1.5">
        {text}
      </p>
    </li>
  );
}