import { renderToBuffer } from "@react-pdf/renderer";
import { createElement } from "react";
import { ResumeDocument } from "@/lib/resume-pdf";

export async function GET() {
  const pdf = await renderToBuffer(createElement(ResumeDocument));

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      // inline → previews in the browser tab; <a download> still saves it.
      "Content-Disposition": 'inline; filename="Mahmudul_Hasan_Resume.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
