import { ArrowRight } from 'lucide-react';

const StartScreen = ({ node, onStart }) => {
  return (
    <div className="text-center py-8">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          {node.title}
        </h1>
        <p className="text-lg text-neutral-600 max-w-md mx-auto">
          {node.body}
        </p>
      </div>
      
      <button
        onClick={onStart}
        className="inline-flex items-center px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium text-lg shadow-sm"
      >
        {node.button}
        <ArrowRight className="ml-2 w-5 h-5" />
      </button>
    </div>
  );
};

export default StartScreen;
