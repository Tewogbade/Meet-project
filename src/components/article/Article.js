import React from "react";
import "./Article.css";

function Article() {
  return (
    <>
      <main>
        <h5>Built for modern use</h5>
        <h1>
          Smarter meetings, all <br />
          one place
        </h1>
        <p>
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-team access,
          data encryption, and data export.
        </p>
      </main>
      <section class="vertical-line">
        <div class="line"></div>
        <div class="number">
          <span>02</span>
        </div>
      </section>

      <section class="horizontal-break">
        <div class="h-line"></div>
        <div class="h-number">
          <span>02</span>
        </div>
        <div class="h-line"></div>
      </section>
    </>
  );
}

export default Article;
