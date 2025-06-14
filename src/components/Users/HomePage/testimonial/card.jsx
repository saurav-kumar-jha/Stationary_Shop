export default function Card() {
  return (
    <div className="mx-auto w-[92%] sm:w-72 bg-white rounded-2xl shadow-lg p-6 text-gray-800 border border-gray-200">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/100"
          alt="User profile"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">Saurav Kumar Jha</h3>
          <p className="text-xs text-gray-500">saurav@example.com</p>
        </div>
      </div>

      {/* Comment */}
      <p className="mt-4 text-sm italic text-gray-700">
        “This platform has helped me grow as a developer. The UI is clean and the
        support team is responsive. Highly recommended!”
      </p>

      {/* Rating */}
      <div className="mt-4 flex items-center">
        <div className="flex gap-[2px] text-yellow-500">
          {[...Array(4)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09L5.5 12.5 1 8.91l6.06-.88L10 3l2.94 5.03L19 8.91l-4.5 3.59 1.378 5.59z" />
            </svg>
          ))}
          <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09L5.5 12.5 1 8.91l6.06-.88L10 3l2.94 5.03L19 8.91l-4.5 3.59 1.378 5.59z" />
          </svg>
        </div>
        <span className="ml-2 text-xs text-gray-600">4.0/5.0</span>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        Reviewed&nbsp;on:&nbsp;<span className="font-medium">June 12 2025</span>
      </p>
    </div>
  );
}
