import { ChevronDown, ChevronUp, History } from 'lucide-react';

const UserSummary = ({ userPath, onToggle, isOpen }) => {
  if (!userPath || userPath.length === 0) return null;

  return (
    <div className="mb-6">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors mb-3"
      >
        <History className="w-5 h-5" />
        {isOpen ? 'Hide' : 'Show'} Your Journey
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      
      {isOpen && (
        <div className="bg-neutral-50 rounded-lg border border-neutral-200 p-4">
          <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-3">
            Your Path Through the Guide
          </h4>
          <div className="space-y-2">
            {userPath.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 text-xs font-medium mt-0.5">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-neutral-900">{step.title}</p>
                  <p className="text-sm text-neutral-600">{step.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSummary;
