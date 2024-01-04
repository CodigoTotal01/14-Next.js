import { lusitana } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>
        {children}

        <footer className='py-10 flex justify-center items-center'>
          Hecho con ♥ por la vgente de vercel
        </footer>
        </body>
    </html>
  );
}
