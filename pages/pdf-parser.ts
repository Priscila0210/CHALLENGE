import * as pdfjs from 'pdfjs-dist';
import { FileWithPath } from 'react-dropzone';
import path from 'path'; // Import the 'path' module

// Construct the absolute path to pdf.worker.js
const pdfjsWorkerPath = path.join(__dirname, '../../node_modules/pdfjs-dist/build/pdf.worker.js');

// Set the worker script path
// Set the worker script path to a CDN link
pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

export async function parsePdfContent(file: FileWithPath) {
    const buffer = await file.arrayBuffer();
  
    // Convert the ArrayBuffer to a Uint8Array
    const uint8Array = new Uint8Array(buffer);
  
    const loadingTask = pdfjs.getDocument({ data: uint8Array });
    const pdf = await loadingTask.promise;
  
    const numPages = pdf.numPages;
    let textContent = '';
  
    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const pageTextContent = await page.getTextContent();
  
      pageTextContent.items.forEach((item) => {
        if ('str' in item) {
            textContent += item.str;
          }
      });
    }
  
    return textContent;
  }