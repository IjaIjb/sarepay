import React from "react";

interface LayoutProps {
  title: string;
  titleTemplate?: string;
  description?: string;
  image?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  title,
  titleTemplate = "SarePay",
  description,
  image,
  children,
}) => {
  return (
    <>
      {/* <Helmet> */}
        <meta charSet="utf-8" />

        <title>
          {title} - {titleTemplate}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="apple-itunes-app" content="app-id=1601289531" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta property="og:type" content="website" />

        <meta property="og:image" content={image} />
        <meta content={title} property="twitter:title" />
        <meta content={description} property="twitter:description" />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
      {/* </Helmet> */}
      {children}
    </>
  );
};



export default Layout;

