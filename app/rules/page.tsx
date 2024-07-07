import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Rules() {
  return (
    <div >
      {/* <Navbar /> */}
      <div className="pl-16">
        <h1 className=" text-text_yellow font-Cinzel_Decorative font-bold mb-8 text-accent" style={{ fontSize: '64px' }}>RULES & GUIDELINES</h1>
        <ol className="list-decimal list-inside space-y-6 text-lg" style={{ fontSize: '20px' }}>
          <li>Categories: <b>Mobile Photography, Camera Photography, Reel Making.</b></li>
          <li>Photo Dimensions (Mobile & Camera Photography):<b> 3:4, 3:2, 2:3, or 4:3.</b></li>
          <li>Reel Dimensions: <b>9:16</b>.</li>
          <li>Reel length: Minimum <b>30</b> seconds, maximum <b>45</b> seconds.</li>
          <li><b>Watermark Requirement</b>: Mandatory for all photographs and reels.</li>
          <li>
            Entry Fee:
            <ul className="space-y-6 list-inside ml-10" style={{ listStyleType: 'lower-alpha' }}>
              <li>
                <>Mobile & Camera Photography:</> (Max 3 photos, total fee: Rs. 50):
                <ul className="space-y-2 list-inside ml-10" style={{ listStyleType: 'lower-roman' }}>
                  <li>1st Photo: Rs. 25</li>
                  <li>2nd Photo: Rs. 15</li>
                  <li>3rd Photo: Rs. 10</li>
                </ul>
              </li>
              <li>
                <>Reel Making:</> (Max 2 reels, total fee: Rs. 60):
                <ul className="space-y-2 list-inside ml-10" style={{ listStyleType: 'lower-roman' }}>
                  <li>1st Reel: Rs. 40</li>
                  <li>2nd Reel: Rs. 20</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><b>Photo Enhancement</b>: Allowed without altering the real content. No manipulation; disqualification if detected.</li>
          <li><b>Authenticity</b>: Only original works. No plagiarism.</li>
          <li><b>Device Information</b>: Mention device name and model in the caption.</li>
          <li><b>No AI-generated Works</b>: Not accepted.</li>
          <li><b>Submission: Upload on Instagram, likes will determine the Viewer&apos;s Choice Award (Photography only)</b>.</li>
          <li><b>Winners: One Winner per Photography and Reel theme, selected by judges</b>.</li>
          <li><b>
            Viewer&apos;s Choice Award and Eligibility Criteria:</b>
            <ul className="space-y-2 list-inside ml-10" style={{ listStyleType: 'lower-alpha' }}>
              <li>Photo must have a watermark.</li>
              <li>Tag Resourcio Community on social media (<Link href="https://linktr.ee/resourciocommunity22" className="underline" target="_blank" rel="noopener noreferrer">https://linktr.ee/resourciocommunity22</Link>)</li>
              <li>Submit photo via Submission Form on the website.</li>
              <li>Most reactions will win the Viewer&apos;s Choice Photo Award.</li>
              <li>Tagging Resourcio Community on Instagram (<Link href="https://www.instagram.com/resourciocommunity/" className="underline" target="_blank" rel="noopener noreferrer">@resourciocommunity</Link>) is mandatory.</li>
            </ul>
          </li>
          <li><b>Submission Format</b>: Photos must be in <b>JPEG format</b>, highest possible resolution.</li>
          <li><b>Disqualification</b>: Any misleading information or religious hatred symbols will lead to direct disqualification.</li>
          <li>Judges&apos; Decision: Final and not subject to correspondence.</li>
        </ol>
      </div>
      <Footer />
    </div>
  );
};
