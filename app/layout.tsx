import { PropsWithChildren } from 'react';
import '~/ui/global.css';
import { inter } from './ui/fonts';

function RootLayout({ children }: PropsWithChildren) {
  // prettier-ignore
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.className} `}
       >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
