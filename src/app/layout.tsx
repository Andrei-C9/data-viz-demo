import '../styles/globals.css';
import { TrpcProvider } from '../utils/trpc-provider';
import Navbar from '../components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-next-black text-next-white">
        <TrpcProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container py-12">
              {children}
            </main>
            {/* <footer className="bg-next-gray-900 py-6">
              <div className="container">
                <div className="flex justify-center items-center">
                  <div className="text-3xl font-bold text-next-blue">
                    Tennis Analysis App
                  </div>
                </div>
              </div>
            </footer> */}
          </div>
        </TrpcProvider>
      </body>
    </html>
  );
}