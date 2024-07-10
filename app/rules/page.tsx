"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Rules() {
  const [activeTab, setActiveTab] = useState('themes');

  return (
    <div className="text-neutral-200 flex flex-col items-center pt-28 pb-20 gap-8 px-4 sm:px-0">
      <h1 className="text-text_yellow font-Cinzel_Decorative font-bold mb-8 text-accent text-6xl text-center">
        RULES & GUIDELINES
      </h1>

      <div className="flex space-x-8 text-lg">
        <button
          className={`${
            activeTab === 'themes' ? 'border-b-4 border-text_yellow' : ''
          } pb-2 hover:text-text_yellow`}
          onClick={() => setActiveTab('themes')}
        >
          Themes
        </button>
        <button
          className={`${
            activeTab === 'photography' ? 'border-b-4 border-text_yellow' : ''
          } pb-2 hover:text-text_yellow`}
          onClick={() => setActiveTab('photography')}
        >
          Photography Guidelines
        </button>
        <button
          className={`${
            activeTab === 'reels' ? 'border-b-4 border-text_yellow' : ''
          } pb-2 hover:text-text_yellow`}
          onClick={() => setActiveTab('reels')}
        >
          Reels Guidelines
        </button>
      </div>

      {activeTab === "themes" && (
        <div className="text-lg max-w-[50rem] space-y-4 px-4 sm:px-0">
          <h2 className="text-2xl font-bold mb-4 text-text_yellow">Themes</h2>
          <h3 className="text-xl font-semibold">Photography</h3>
          <ul className="list-decimal list-inside space-y-2 ml-4">
            <li><b>Nature in Night</b>: Capturing the picturesque view of nature in the night.</li>
            <li><b>Travel & Tourist Photography</b>: Capturing memories through your Travelling and Tourism.</li>
            <li><b>Tech in nature</b>: Capture the intersection of technology and the natural world.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-4">Reels</h3>
          <ul className="list-decimal list-inside space-y-2 ml-4">
            <li><b>Explore your city/ village</b>: Creating Reels about your special moments with your city life.</li>
            <li><b>B roll of any Nature Element - Cinematics Shot</b>: The term B-roll originates from the early days of film, when editors
              inserted supplemental footage or B-roll, into the main footage or A-roll, to hide visible lines where two pieces of film were
              joined. In modern film and video production, B-roll describes all of the footage that isn&apos;t the main action.
            </li>
          </ul>
        </div>
      )}

      {activeTab === "photography" && (
        <div className="text-lg max-w-[50rem] space-y-4 px-2 sm:px-0">
          <h2 className="text-2xl font-bold mb-4 text-text_yellow">
            Photography Guidelines
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Categories: <b>Mobile Photography, Camera Photography.</b></li>
            <li>Photo Dimensions: <b>3:4, 3:2, 2:3, or 4:3.</b></li>
            <li><b>Watermark Requirement</b>: Mandatory for all photographs.</li>
            <li>
              Entry Fee:
              <ul className="space-y-2 list-inside ml-6">
                <li>
                  Mobile & Camera Photography (Max 3 photos, total fee: Rs. 50):
                  <ul
                    className="space-y-1 list-inside ml-6"
                    style={{ listStyleType: "lower-roman" }}
                  >
                    <li>1st Photo: Rs. 25</li>
                    <li>2nd Photo: Rs. 15</li>
                    <li>3rd Photo: Rs. 10</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><b>Photo Enhancement</b>: Allowed without altering the real content. No manipulation; disqualification if detected.</li>
            <li><b>Authenticity</b>: Only original works. No plagiarism.</li>
            <li><b>Device Information</b>: Mention device name and model in the caption.</li>
            <li><b>No AI-generated Works</b>: Not accepted.</li>
            <li><b>Submission</b>: Normal submission will be in the website <b>Submission Form</b>. For Viewer&apos;s Choice Award (Photography only) you have to upload on Instagram as well.</li>
            <li><b>Winners</b>: One Winner per Photography theme, selected by judges.</li>
            <li><b>Viewer&apos;s Choice Award and Eligibility Criteria:</b>
              <ul
                className="space-y-1 list-inside ml-6"
                style={{ listStyleType: "lower-alpha" }}
              >
                <li>Photo must have a watermark.</li>
                <li>
                  Tag Resourcio Community on social media (
                  <Link
                    href="https://linktr.ee/resourciocommunity22"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://linktr.ee/resourciocommunity22
                  </Link>
                  ).
                </li>
                <li>Submit photo via Submission Form on the website.</li>
                <li>Most reactions will win the Viewer&apos;s Choice Photo Award.</li>
                <li>
                  Tagging Resourcio Community on Instagram (
                  <Link
                    href="https://www.instagram.com/resourciocommunity/"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @resourciocommunity
                  </Link>
                  ) is mandatory.
                </li>
                <li>Submissions only through the website&apos;s <b>Submission Form</b> will be considered eligible.</li>
              </ul>
            </li>
            <li><b>Submission Format</b>: Photos must be in <b>JPEG format</b>,highest possible resolution.</li>
            <li><b>Disqualification</b>: <ul
                    className="space-y-1 list-inside ml-6"
                    style={{ listStyleType: "lower-roman" }}
                  >
                    <li>Any misleading information or religious hatred symbols will lead to direct disqualification.</li>
                    <li>Your photograph must respect intellectual property rights and not violate privacy or publicity rights.</li>
                    <li>Your photograph must not promote illegal activities or violations of any law.</li>
                  </ul></li>
            <li>Judges&apos; Decision: Final and not subject to correspondence.</li>
          </ol>
        </div>
      )}

      {activeTab === "reels" && (
        <div className="text-lg max-w-[50rem] space-y-4 px-2 sm:px-0">
          <h2 className="text-2xl font-bold mb-4 text-text_yellow">Reels Guidelines</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Reel Dimensions: <b>9:16</b>.</li>
            <li>Reel length: Minimum <b>30</b> seconds, maximum <b>45</b> seconds.</li>
            <li><b>Watermark Requirement</b>: Mandatory for all reels.</li>
            <li>
              Entry Fee:
              <ul
                className="space-y-2 list-inside ml-6">
                <li>
                  Reel Making (Max 2 reels, total fee: Rs. 60):
                  <ul
                    className="space-y-1 list-inside ml-6"
                    style={{ listStyleType: "lower-roman" }}
                  >
                    <li>1st Reel: Rs. 40</li>
                    <li>2nd Reel: Rs. 20</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><b>Authenticity</b>: Only original works. No plagiarism.</li>
            <li><b>Device Information</b>: Mention device name and model in the caption.</li>
            <li><b>No AI-generated Works</b>: Not accepted.</li>
            <li><b>Submission</b>:
                  <ul
                    className="space-y-1 list-inside ml-6"
                    style={{ listStyleType: "lower-roman" }}
                  >
                    <li>Reel must have a watermark.</li>
                    <li>Post the reel on any social media platform.</li>
                    <li> Tag Resourcio Community on social media (
                  <Link
                    href="https://linktr.ee/resourciocommunity22"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://linktr.ee/resourciocommunity22
                  </Link>
                  ).</li>
                  <li>Submit the posted reel <b>Link</b> via Submission Form on the website.</li>
                  <li>Submissions only through the website&apos;s <b>Submission Form</b> will be considered eligible.</li>
                  </ul></li>
            <li><b>Winners</b>: One Winner per Reel theme, selected by judges.</li>
            <li><b>Submission Format</b>: Reels must be in the highest possible resolution.</li>
            <li><b>Disqualification</b>: <ul
                    className="space-y-1 list-inside ml-6"
                    style={{ listStyleType: "lower-roman" }}
                  >
                    <li>Any misleading information or religious hatred symbols will lead to direct disqualification.</li>
                    <li>Your reel must respect intellectual property rights and not violate privacy or publicity rights.</li>
                    <li>Your reel must not promote illegal activities or violations of any law.</li>
                  </ul></li>
            <li>Judges&apos; Decision: Final and not subject to correspondence.</li>
          </ol>
        </div>
      )}
    </div>
  );
}
