import { AlertCircle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800 leading-relaxed">
          This guide is for general educational purposes only and should not be treated as legal, financial, or estate planning advice. Please consult a qualified adviser for your personal situation.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
