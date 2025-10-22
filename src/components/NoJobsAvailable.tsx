import { Inbox } from 'lucide-react';

const NoJobsAvailable = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10">
      {/* Changed text-gray-400 to text-gray-600 (a lighter gray) */}
      <Inbox className="w-16 h-16 text-gray-600 mb-4" />
      
      {/* Added text-white */}
      <h2 className="text-2xl font-semibold mb-2 text-white">No Open Positions</h2>
      
      {/* Changed text-gray-500 to text-gray-300 */}
      <p className="text-gray-300 max-w-md">
        There are no open positions at this time. We are always interested in
        talented individuals, so feel free to check back later or get in touch.
      </p>
      
      <a
        href="mailto:info@zeroindustries.eu"
        className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
      >
        Contact Us
      </a>
    </div>
  );
};

export default NoJobsAvailable;