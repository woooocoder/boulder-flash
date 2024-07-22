/**
 * 
 * 
 * import React from "react";

const SessionShareFacebook = ({ sessionId, sessionData }) => {
  const handleFacebookShare = () => {
    const url = `http://example.com/session/${sessionId}`;
    const quote = `Check out my climbing session: ${sessionData.title}, on ${sessionData.date}`;

    window.FB.ui({
      method: 'share',
      href: url,
      quote: quote
    }, function(response){});
  };

  return (
    <button onClick={handleFacebookShare}>
      Share on Facebook
    </button>
  );
};

export default SessionShareFacebook;

<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0&appId=YOUR_APP_ID&autoLogAppEvents=1" nonce="XXXXXXXX"></script>










import React from "react";

const SessionShare = ({ sessionId, sessionData }) => {
  const handleEmailShare = () => {
    const subject = `Check out my climbing session: ${sessionData.title}`;
    const body = `Title: ${sessionData.title}\nDate: ${sessionData.date}\nSession Time: ${sessionData.session_time} minutes\n\nLink: http://example.com/session/${sessionId}`;

    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <button onClick={handleEmailShare}>
      Share via Email
    </button>
  );
};

export default SessionShare;









import React from "react";

const SessionShare = ({ sessionId, sessionData }) => {
  const handleTextShare = async () => {
    try {
      const shareData = {
        title: sessionData.title,
        text: `Check out my climbing session:\nTitle: ${sessionData.title}\nDate: ${sessionData.date}\nSession Time: ${sessionData.session_time} minutes`,
        url: `http://example.com/session/${sessionId}`
      };

      await navigator.share(shareData);
      console.log("Shared successfully");
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <button onClick={handleTextShare}>
      Share via Text
    </button>
  );
};

export default SessionShare;



 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */