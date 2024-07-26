"use client";
import { useState } from "react";
import Link from "next/link";

export default function Rules() {
  const [activeTab, setActiveTab] = useState("themes");

  return (
    <div className="text-neutral-200 flex flex-col items-center pt-28 pb-20 gap-8 px-4 sm:px-0 text-wrap">
      <h1 className="text-text_yellow font-Cinzel_Decorative font-bold mb-8 text-accent text-4xl md:text-6xl text-center">
        RULES & GUIDELINES
      </h1>

      <div className="flex space-x-8 md:text-lg justify-center">
        <button
          className={`${activeTab === "themes" ? "border-b-4 border-text_yellow" : ""
            } pb-2 hover:text-text_yellow`}
          onClick={() => setActiveTab("themes")}
        >
          Themes
        </button>
        <button
          className={`${activeTab === "photography" ? "border-b-4 border-text_yellow" : ""
            } pb-2 hover:text-text_yellow`}
          onClick={() => setActiveTab("photography")}
        >
          Photography Guidelines
        </button>
        <button
          className={`${activeTab === "reels" ? "border-b-4 border-text_yellow" : ""
            } pb-2 hover:text-text_yellow`}
          onClick={() => setActiveTab("reels")}
        >
          Shorts Guidelines
        </button>
      </div>

      {activeTab === "themes" && (
        <div className="text-lg max-w-[50rem] space-y-4 px-4 sm:px-0 animate-fade">
          <h2 className="text-2xl font-bold mb-4 text-text_yellow">Themes</h2>
          <h3 className="text-xl font-semibold">Photography</h3>
          <ul className="list-decimal list-inside space-y-2 ml-4">
            <li>
              <b>Nature in Night</b>: Capturing the picturesque view of nature in the night.
            </li>
            <li>
              <b>Travel & Tourist Photography</b>: Capturing memories through your Travelling and Tourism.
            </li>
            <li>
              <b>Tech in Nature</b>: Capture the intersection of technology and the natural world.
            </li>
          </ul>


          <h3 className="text-xl font-semibold mt-4">Shorts</h3>
          <ul className="list-decimal list-inside space-y-2 ml-4">
            <li>
              <b>Explore Your City/Village</b>: Creating reels about your special moments with your city life.
            </li>
            <li>
              <b>A Viewport to Your Daily Life</b>: Shoot your daily life inside a reel.
            </li>
          </ul>
        </div>
      )}

      {activeTab === "photography" && (
        <div className="text-lg w-full md:max-w-[50rem] space-y-4 px-4 sm:px-0 flex flex-col animate-fade">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-text_yellow">
            Photography Guidelines
          </h2>
          <ol className="list-decimal list-inside space-y-2 w-[80%]">
            <li>
              Dimensions: <b>3:4, 3:2, 2:3, 4:3</b>
            </li>
            <li>
              Max 3 photos per participant
            </li>
            <li>
              Entry Fees:
              <ul className="space-y-2 list-inside ml-6">
                <li>
                  <ul className="space-y-1 list-inside ml-6" style={{ listStyleType: "lower-roman" }}>
                    <li>1st Photo: Rs. 25</li>
                    <li>2nd Photo: Rs. 15</li>
                    <li>3rd Photo: Rs. 10</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <b>Enhancement Allowed</b>: No manipulation
            </li>
            <li>
              <b>Must Be Authentic Work</b>
            </li>
            <li>
              <b>No AI-generated Content</b>
            </li>
            <li>
              Highest Pixels, <b>JPEG Format</b>
            </li>
            <li>
              <b>Viewer’s Choice Award</b>:
              <ul className="space-y-1 list-inside ml-6" style={{ listStyleType: "lower-alpha" }}>
                <li>Optional watermark</li>
                <li>
                  Post photo on social media tagging Resourcio Community -
                  <a href="https://linktr.ee/resourciocommunity22" className="underline" target="_blank" rel="noopener noreferrer">
                    https://linktr.ee/resourciocommunity22
                  </a>
                </li>
                <li>Submit the same photo on the website</li>
                <li>Most reactions win</li>
              </ul>
            </li>
          </ol>

        </div>
      )}

      {activeTab === "reels" && (
        <div className="text-lg w-full md:max-w-[50rem] space-y-4 px-2 sm:px-0 animate-fade">
          <h2 className="text-2xl font-bold mb-4 text-text_yellow">
            Shorts Guidelines
          </h2>
          <ol className="list-decimal list-inside space-y-2 w-[80%]">
            <li>
              Dimensions: <b>9:16</b>
            </li>
            <li>
              Length: <b>maximum 30 seconds</b>
            </li>
            <li>
              Max 2 reels per participant
            </li>
            <li>
              Entry Fees:
              <ul className="space-y-2 list-inside ml-6">
                <li>
                  <ul className="space-y-1 list-inside ml-6" style={{ listStyleType: "lower-roman" }}>
                    <li>1st Reel: Rs. 40</li>
                    <li>2nd Reel: Rs. 20</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <b>Must Be Authentic Work</b>
            </li>
            <li>
              Mention the device name/model in the caption
            </li>
            <li>
              <b>No AI-generated Content</b>
            </li>
            <li>
              Post reel on social media tagging Resourcio Community -
              <a href="https://linktr.ee/resourciocommunity22" className="underline" target="_blank" rel="noopener noreferrer">
                https://linktr.ee/resourciocommunity22
              </a>
            </li>
            <li>
              Submit the posted reel link on the website
            </li>
            <li>
              Optional watermark
            </li>
            <li>
              Can include outro branding
            </li>
            <li>
              Can write the idea of making the reel in the caption
            </li>
          </ol>

        </div>
      )}
    </div>
  );
}
