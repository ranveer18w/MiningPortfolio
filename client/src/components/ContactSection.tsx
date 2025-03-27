import { PERSONAL_INFO } from '@/lib/constants';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Contact Information</h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-secondary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Phone</h3>
                  <p className="text-text">{PERSONAL_INFO.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-secondary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
                  <p className="text-text">{PERSONAL_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-start md:col-span-2">
                <div className="mr-4 mt-1 text-secondary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Address</h3>
                  <p className="text-text">{PERSONAL_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
