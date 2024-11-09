declare module 'html2pdf.js' {
  type Html2PdfOptions = Record<string, unknown>;
  
  interface Html2Pdf {
      set: (options: Html2PdfOptions) => Html2Pdf;
      from: (element: HTMLElement | string) => Html2Pdf;
      save: () => void;
  }

  const html2pdf: (element?: HTMLElement | string, options?: Html2PdfOptions) => Html2Pdf;
  export default html2pdf;
}