import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

export const metadata = { title: 'Contact', description: 'Contact John Kenny about AI/ML engineering, computer vision, and software opportunities.' };

export default function Contact() {
  return <><Navbar /><main id="main-content" className="min-h-[calc(100svh-190px)] flex flex-col justify-center"><ContactSection standalone /></main><Footer /></>;
}
