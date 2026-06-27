import { Phone, Mail, MessageCircle, RefreshCw, User, MapPin } from 'lucide-react';

const ContactScreen = ({ node, onRestart }) => {
  const { contactDetails } = node;

  return (
    <div className="py-4">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
        {node.title}
      </h2>
      
      <p className="text-lg text-neutral-600 mb-8">
        {node.body}
      </p>
      
      <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg border border-teal-200 p-6 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900">{contactDetails.name}</h3>
            <p className="text-sm text-neutral-600">Financial Adviser</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <a
            href={`tel:${contactDetails.phone}`}
            className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-teal-100 transition-colors"
          >
            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Phone</p>
              <p className="font-medium text-neutral-900">{contactDetails.phone}</p>
            </div>
          </a>
          
          <a
            href={`mailto:${contactDetails.email}`}
            className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-teal-100 transition-colors"
          >
            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">Email</p>
              <p className="font-medium text-neutral-900">{contactDetails.email}</p>
            </div>
          </a>
          
          <a
            href={`https://wa.me/${contactDetails.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-teal-100 transition-colors"
          >
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">WhatsApp</p>
              <p className="font-medium text-neutral-900">{contactDetails.whatsapp}</p>
            </div>
          </a>
        </div>
      </div>
      
      <button
        onClick={onRestart}
        className="w-full flex items-center justify-center gap-2 p-4 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors font-medium text-neutral-700"
      >
        <RefreshCw className="w-5 h-5" />
        Restart Guide
      </button>
    </div>
  );
};

export default ContactScreen;
