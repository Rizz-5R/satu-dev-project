export default function DeveloperCard({ name, role, initials, bio }) {
  return (
    <article
      className="
        group bg-white rounded-2xl
        border border-secondary-200
        shadow-card hover:shadow-card-hover
        transition-all duration-200
        hover:-translate-y-0.5
        p-6 text-center
      "
    >
      {/* Avatar */}
      <div
        className="
          w-16 h-16 mx-auto mb-4 rounded-full
          bg-primary-100
          flex items-center justify-center
          group-hover:bg-primary-500
          transition-colors duration-200
        "
      >
        <span
          className="
            font-heading font-bold text-lg
            text-primary-600
            group-hover:text-white
            transition-colors duration-200
          "
        >
          {initials}
        </span>
      </div>

      {/* Name */}
      <h3 className="font-heading text-base font-semibold text-secondary-900 mb-1">
        {name}
      </h3>

      {/* Role badge */}
      <span
        className="
          inline-block font-body text-xs font-medium
          bg-primary-50 text-primary-700
          px-3 py-1 rounded-full
          mb-3
        "
      >
        {role}
      </span>

      {/* Bio */}
      <p className="font-body text-sm text-secondary-500 leading-relaxed">
        {bio}
      </p>
    </article>
  );
}