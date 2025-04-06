
import "./globals.css";
import { TanstackProvider} from "components/tanstack_providers/tanstack";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Task Management</title>
        <meta name="description" content="Task Management" />
        <link rel="icon" href="/favicon.ico" />
        
      </head>
      <body style={{backgroundColor:'#eef3f9'}}
       
      >
        <TanstackProvider>
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
