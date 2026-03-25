import { Footer, Navbar } from '@/components/layout';
import { PageLoaderProvider, ScrollProvider } from '@/providers';
import { Toaster } from 'sonner';

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLoaderProvider>
      <ScrollProvider>
        <Toaster position="top-center" richColors />
        <Navbar />
        {children}
        <Footer />
      </ScrollProvider>
    </PageLoaderProvider>
  );
}
