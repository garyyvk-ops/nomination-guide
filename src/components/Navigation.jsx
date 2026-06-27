import { ArrowLeft, RefreshCw } from 'lucide-react';

const Navigation = ({ onBack, onRestart, canGoBack }) => {
  return (
    <div className="flex items-center justify-between mt-6 pt-4 border-t border-neutral-200">
      <button
        onClick={onBack}
        disabled={!canGoBack}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          canGoBack
            ? 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
            : 'bg-neutral-50 text-neutral-400 cursor-not-allowed'
        }`}
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>
      
      <button
        onClick={onRestart}
        className="flex items-center gap-2 px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-lg transition-colors"
      >
        <RefreshCw className="w-5 h-5" />
        Restart
      </button>
    </div>
  );
};

export default Navigation;
