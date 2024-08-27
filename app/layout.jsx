export const metadata = {
  title: "Movies application",
  description: "Movies application made with Next.js",
};

export default function RootLayout(
  {children})
 {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
