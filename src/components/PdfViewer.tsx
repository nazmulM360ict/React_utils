import { useState } from "react";
import { Document, Page } from "react-pdf";

export const PdfViewer = ({ pdfUrl }: { pdfUrl: string }) => {
  const [error, setError] = useState<any>(null);

  const handleError = (e: any) => {
    setError(e);
  };

  return (
    <div>
      {error ? (
        <p>Error loading PDF: {error?.message}</p>
      ) : (
        <Document file={"/pdf-file.pdf"} onError={handleError}>
          <Page pageNumber={1} />
        </Document>
      )}
    </div>
  );
};
