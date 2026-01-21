export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="justify-center min-h-screen w-full">{children}</div>;
}
