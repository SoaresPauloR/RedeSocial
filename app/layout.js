import "@/styles/globals.css";

export const metadata = {
  title: "Social Media",
  description: "",
};

export default function Home({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
